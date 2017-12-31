<template>
<div id="upload_section">
    <div class="title">
      ログ解析
    </div>
    <div class="input">
      <b-form>
        <b-form-group label="Log Format">
          <b-form-select v-model="selected">
            <option :value="null">Please select an option</option>
            <option v-for="option in options.logFormats" v-bind:key="option.id" v-bind:value="option.id">{{option.id}} : {{option.format}}a</option>
          </b-form-select>
        </b-form-group>
      </b-form>
    </div>
    <div id="drop" draggable=true v-on:dragover="onDragOver" v-on:drop="onDrop">
        ファイルをドラッグアンドドロップしてください。
    </div>
    <div class="logarea">
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
import LogFormatList from '../models/logformat'

import LogTable from '@/components/LogTable'
import Vue from 'vue'
Vue.component('logtable', LogTable)

export default {
  name: 'LogViewer',
  data () {
    return {
      logFiles: [],
      selected: null,
      options: new LogFormatList()
    }
  },
  methods: {
    onDragOver: function (event) {
      event.preventDefault()
    },
    onDrop: function (event) {
      this.logFiles = []
      event.preventDefault()
      const files = event.dataTransfer.files
      for (let i = 0; i < files.length; i++) {
        const logfile = new LogFile()
        logfile.setLogformat(this.options.get(this.selected).format)
        logfile.initByFile(files[i])
        this.logFiles.push(logfile)
      }
    }
  }
}
</script>

<style>
#drop {
  height:50px;
  padding:10px; 
  border:3px solid
}

.logarea {
  text-align: left;
  color: black;
}
</style>