<template>
  <div v-if="detail.length > 0">
    <b-btn v-b-modal="modalid">Show Trace</b-btn>
    <b-modal v-bind:id="modalid" size="lg" title="Trace" ok-only>
      <b-card>
      <ol>
        <li v-for="d in detail">
          {{d}}
        </li>
      </ol>
      </b-card>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'LogTableDetail',
  props: [
    'detail',
    'logindex'
  ],
  data () {
    return {
      modalid: 'collapse-' + String(this.logindex)
    }
  }
}
</script>


<style scoped>

</style>