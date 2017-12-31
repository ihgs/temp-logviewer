<template>
<div>
  {{item.name}}
  <div id="message">{{message}}</div>
  <table class="logtable" v-if="item">
    <thead>
      <tr>
        <th v-for="n in this.item.size" :key="n">
          <input type="text" v-on:input="update(n, $event.target.value)" >
        </th>
        <td>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="log in filterlogs" :key="log.index">
        <td v-for="column in log.key">
          {{column}}
        </td>
        <td>
          <ol>
            <li v-for="d in log.detail">
              {{d}}
            </li>
          </ol>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import _ from 'lodash'

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