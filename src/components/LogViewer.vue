<template>
<div id="upload_section">
    <div id="drop" draggable=true style="height:50px; padding:10px; border:3px solid" v-on:dragover="onDragOver" v-on:drop="onDrop">
        ファイルをドラッグアンドドロップしてください。複数ファイル同時も対応しています。
    </div>
    <div id="logarea">
      <ul>
        <li v-for="item in logFiles">
          <logtable v-bind:item="item"></logtable>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
import LogFile from '../models/logfile'
import LogTable from '@/components/LogTable'
import Vue from 'vue'
Vue.component('logtable', LogTable)

export default {
  name: 'LogViewer',
  data () {
    return {
      logFiles: []
    }
  },
  methods: {
    onDragOver: function (event) {
      event.preventDefault()
    },
    onDrop: function (event) {
      event.preventDefault()
      const files = event.dataTransfer.files
      for (let i = 0; i < files.length; i++) {
        const logfile = new LogFile(files[i], /^(\d+:\d+:\d+\.\d+)\s+\[([\w\d-]+)\]\s+(\w+)\s+(.*)$/)
        this.logFiles.push(logfile)
      }
    }
  }
}
</script>

<style>
#logarea {
  text-align: left;
  color: black;
}
</style>