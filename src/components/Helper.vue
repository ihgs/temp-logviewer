<template>
  <b-card>
    <b-input type="text" v-model="filter" placeholder="Filter"></b-input>
    <b-table :items="examples" :fields="fields" :filter="filter">
      <template slot="example" slot-scope="row">
        <ul>
          <li v-for="(ex, index) in row.item.example" v-bind:key="index">
            {{ex}}
          </li>
        </ul>
      </template>
      <template slot="action" slot-scope="row">
        <b-btn @click="addSeparator(row.item)" v-if="row.item.separator">Add Separator</b-btn>
        <b-btn @click="addGroup(row.item)" v-if="!row.item.separator">Add Group</b-btn>
      </template>
    </b-table>
    {{display}}
    <b-input type="text" v-model="tmpRegex"></b-input><b-btn @click="clear">Clear</b-btn>
  </b-card>
</template>

<script>
const examples = require('./examples.json')

export default {
  name: 'Helper',
  data: function () {
    return {
      filter: '',
      tmpRegex: '^',
      display: '',
      fields: [
        'type', 'example', 'regex', 'action'
      ],
      examples: examples
    }
  },
  methods: {
    addSeparator: function (item) {
      this.display = this.display + item.example[0]
      this.tmpRegex = this.tmpRegex + item.regex
    },
    addGroup: function (item) {
      this.display = this.display + item.example[0]
      this.tmpRegex = this.tmpRegex + '(' + item.regex + ')'
    },
    clear: function () {
      this.display = ''
      this.tmpRegex = '^'
    }
  }
}
</script>