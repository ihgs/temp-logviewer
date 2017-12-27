<template>
<div>
  {{item.name}}
  <table class="logtable" v-if="item">
    <tbody>
      <tr v-for="log in item.logs" :key="log.index">
        <td v-for="column in log.key">
          {{column}}
        </td>
        <td>
          <ul>
            <li v-for="d in log.detail">
              {{d}}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>


<script>
export default {
  name: 'LogTable',
  props: [
    'item'
  ]
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