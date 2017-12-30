<template>
<div id="register_regexp">
  <div class="title">
      ログフォーマットの登録
  </div>
  <div class="input-area">
    <b-form>
      <b-form-group label="Log Sample">
      <b-form-textarea class="sample" v-model="sample">
      </b-form-textarea>

      </b-form-group>
      <b-form-group label="Log Format">
        <b-form-input type="text" class="logformat" v-model="logformat">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" v-on:click="load()">Check</b-button>
      <b-button type="reset" v-on:click="clear()">Clear</b-button>
    </b-form>
  </div>
  <div class="error">
    {{errorMsg}}
  </div>
  <div class="logarea" v-if="this.logFile">
    <logtable v-bind:item="logFile"></logtable>
  </div>
</div>
</template>

<script>
import LogFile from '../models/logfile'

export default {
  name: 'RegisterRegexp',
  data () {
    return {
      sample: '',
      logformat: '^(\\d+:\\d+:\\d+\\.\\d+)\\s+\\[([\\w\\d-]+)\\]\\s+(\\w+)\\s+(.*)$',
      logFile: undefined,
      errorMsg: ''
    }
  },
  methods: {
    load: function () {
      this.errorMsg = ''
      const logFile = new LogFile()
      try {
        logFile.setLogformat(this.logformat)
      } catch (e) {
        this.clear()
        this.errorMsg = e.message
        return
      }
      logFile.initByString(this.sample)
      this.logFile = logFile
    },
    clear: function () {
      this.errorMsg = ''
      this.logFile = undefined
    }
  }
}
</script>

<style>
.sample {
  height: 100px;
}
</style>