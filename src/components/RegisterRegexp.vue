<template>
<div id="register_regexp">
  <div class="title">
      ログフォーマット
  </div>
  <div class="subtitle">
    登録済みログフォーマット
  </div>
  <div class="list" v-if="registerd">
    <b-table  show-empty striped :items="registerd.logFormats" :fields="fields">
      <template slot="actions" slot-scope="row">
        <b-button v-on:click="remove(row.item.id)">Delete</b-button>
      </template>
    </b-table>
  </div>
  <div class="subtitle">
    ログフォーマット登録
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
      <div class="error">
        {{errorMsg}}
      </div>
      <b-form-group label="Log Format Id">
        <b-form-input type="text" v-model="logformat_id">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" v-on:click="register()">Register</b-button>
    </b-form>
  </div>
  <div class="logarea" v-if="this.logFile">
    <logtable v-bind:item="logFile"></logtable>
  </div>
</div>
</template>

<script>
import LogFile from '../models/logfile'
import LogFormatList from '../models/logformat'

export default {
  name: 'RegisterRegexp',
  data () {
    return {
      sample: '',
      logformat: '^(\\d+:\\d+:\\d+\\.\\d+)\\s+\\[([\\w\\d-]+)\\]\\s+(\\w+)\\s+(.*)$',
      logFile: undefined,
      logformat_id: '',
      errorMsg: '',
      registerd: new LogFormatList(),
      fields: [
        {key: 'id', label: 'Id'},
        {key: 'format', label: 'Format'},
        {key: 'actions', label: 'Action'}
      ]
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
    },
    register: function () {
      this.registerd.add(this.logformat_id, this.logformat)
      this.registerd.save()
    },
    remove: function (id) {
      this.registerd.remove(id)
      this.registerd.save()
    }
  }
}
</script>

<style>
.sample {
  height: 100px;
}
</style>