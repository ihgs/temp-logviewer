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
        <div class="error">
          {{errorMsg}}
        </div>
        <div>
          <b-link v-b-modal.helperModal>helper</b-link>
        </div>
      </b-form-group>
      <b-modal id="helperModal" size="lg" title="Regex Helper" @ok="setTmpRegex">
        <helper ref="helper"></helper>
      </b-modal>
      <b-button type="submit" v-on:click="load()">Check</b-button>
      <b-button type="reset" v-on:click="clear()">Clear</b-button>

      <div class="logarea" v-if="this.logFile">
        <logtable v-bind:item="logFile"></logtable>
      </div>
      <b-form-group label="Log Format Id">
        <b-form-input type="text" v-model="logformat_id">
        </b-form-input>
        <div class="error">
          {{errorMsgLogFormatId}}
        </div>
      </b-form-group>
      <b-button type="submit" v-on:click="register()">Register</b-button>
    </b-form>
  </div>
</div>
</template>

<script>
import LogFile from '../models/logfile'
import LogFormatList from '../models/logformat'
import Helper from './Helper'

export default {
  name: 'RegisterRegexp',
  components: {
    helper: Helper
  },
  data () {
    return {
      sample: '',
      logformat: '',
      logFile: undefined,
      logformat_id: '',
      errorMsg: '',
      errorMsgLogFormatId: '',
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
      logFile.initByString('Check result', this.sample)
      this.logFile = logFile
    },
    clear: function () {
      this.errorMsg = ''
      this.logFile = undefined
    },
    register: function () {
      this.errorMsgLogFormatId = ''
      if (this.logformat_id.trim().length === 0) {
        this.errorMsgLogFormatId = 'Input Log format Id'
        return
      }
      try {
        this.registerd.add(this.logformat_id.trim(), this.logformat)
      } catch (e) {
        this.errorMsgLogFormatId = e.message
        return
      }
      this.registerd.save()
      this.logformat_id = ''
    },
    remove: function (id) {
      this.registerd.remove(id)
      this.registerd.save()
    },
    setTmpRegex: function () {
      this.logformat = this.$refs.helper.tmpRegex + '$'
    }
  }
}
</script>

<style>
.sample {
  height: 100px;
}
</style>