<template>
<div>
  {{item.name}}
  <div id="message">{{message}}</div>
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
      message: ''
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
      this.filters[n - 1] = value
      const filters = this.filters
      const _this = this
      _.defer(function () {
        _this.filterlogs = _.filter(_this.item.logs, function (l) {
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
          return match || !hasInput
        })
        _this.message = ''
      })
    }, 1000)
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
</style>