<template>
<div>
  {{item.name}}
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
      filters: []
    }
  },
  methods: {
    update: function (n, value) {
      this.filters[n - 1] = value
      const filters = this.filters
      this.filterlogs = _.filter(this.item.logs, function (l) {
        const columnSize = l.key.length
        let hasInput = false
        let match = false
        for (let i = 0; i < columnSize; i++) {
          if (filters[i] !== undefined && filters[i].length > 0) {
            hasInput = true
            if (l.key[i].includes(filters[i])) {
              match = true
            }
          }
        }
        return match || !hasInput
      })
    }
  }
}
</script>

<style>
table {
  border-collapse: collapse;
}

table tr td {
    border: 1px black solid;
    padding: 3px
}
</style>