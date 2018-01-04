<template>
<div>
  {{item.name}}
  <div align="right">
    <b-button v-on:click="exportToCsv()" size="sm">Download CSV</b-button>
  </div>
  <div id="message">{{message}}</div>
  <div class="range">
    <b-form inline>
      <label> Range: </label>
      <b-form-input type="number" size="sm" v-model="from" v-on:input="update()"></b-form-input>
      ~
      <b-form-input type="number" size="sm" v-model="to" v-on:input="update()"></b-form-input>
    </b-form>
  </div>
  <table class="logtable" v-if="item">
    <thead>
      <tr>
        <th>No.</th>
        <th v-for="n in this.item.size-1" :key="n">
          <input type="text" v-on:input="update(n, $event.target.value)" >
        </th>
        <th>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="log in filterlogs" :key="log.index">
        <td>{{log.index}}</td>
        <td v-for="column in log.key">
          {{column}}
        </td>
        <td>
          <logtabledetail v-bind:detail="log.detail" v-bind:logindex="log.index"></logtabledetail>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import _ from 'lodash'
import LogTableDetail from '@/components/LogTableDetail'
import Vue from 'vue'
Vue.component('logtabledetail', LogTableDetail)

export default {
  name: 'LogTable',
  props: [
    'item'
  ],
  data () {
    return {
      filterlogs: this.item.logs,
      filters: [],
      message: '',
      from: undefined,
      to: undefined
    }
  },
  watch: {
    item: function () {
      this.update()
    }
  },
  methods: {
    update: _.debounce(function (n, value) {
      this.message = 'Filtering....'
      this.filterlogs = []
      if (n) {
        this.filters[n - 1] = value
      }
      const filters = this.filters
      const _this = this
      _.defer(function () {
        let start = 0
        let end = _this.item.logs.length
        if (_this.from && _this.from - 1 > start) {
          start = _this.from - 1
        }
        if (_this.to && _this.to < end) {
          end = _this.to
        }
        for (let j = start; j < end; j++) {
          const l = _this.item.logs[j]
          const columnSize = l.key.length
          let hasInput = false
          let match = false
          for (let i = 0; i < columnSize; i++) {
            if (filters[i] !== undefined && filters[i].length > 0) {
              hasInput = true
              if (l.key[i].includes(filters[i])) {
                match = true
                break
              }
            }
          }
          if (match || !hasInput) {
            _this.filterlogs.push(l)
          }
        }
        _this.message = ''
      })
    }, 1000),
    exportToCsv: function () {
      const csvRow = (logitem) => {
        let finalVal = ''
        _.each(logitem.key, function (c) {
          const column = c === null ? '' : c.toString()
          const result = column.replace(/"/g, '""')
          finalVal += '"' + result + '",'
        })
        let detail = ''
        _.each(logitem.detail, function (line) {
          detail += line + '\n'
        })
        detail = detail.replace(/"/g, '""')
        finalVal += '"' + detail + '"'
        return finalVal + '\n'
      }
      let csvFile = ''
      for (let i = 0; i < this.filterlogs.length; i++) {
        csvFile += csvRow(this.filterlogs[i])
      }

      const filename = 'exportlog.csv'
      const blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' })
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, filename)
      } else {
        const link = document.createElement('a')
        if (link.download !== undefined) {
          var url = URL.createObjectURL(blob)
          link.setAttribute('href', url)
          link.setAttribute('download', filename)
          link.style.visibility = 'hidden'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      }
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
}

table tr td {
    border: 1px black solid;
    padding: 3px
}

.range {
  margin-bottom: 20px
}

input {
  width: 100%;
}
</style>