import _ from 'lodash'

class LogFormatList {
  constructor () {
    this.reload()
  }
  reload () {
    this.logFormats = []
    const source = LogFormatList.fetch()
    if (source) {
      const logformats = source.logFormats || []
      this.logFormats = logformats
    }
  }
  add (id, format) {
    if (this.get(id)) {
      throw Error('Already exists. ' + id)
    }
    const logformat = new LogFormat({id: id, format: format})
    this.logFormats.push(logformat)
  }
  save () {
    localStorage.setItem(LogFormatList.storageKey(), JSON.stringify(this))
  }
  remove (id) {
    const index = this.logFormats.findIndex(function (e) {
      return id === e.id
    })
    if (index !== -1) {
      this.logFormats.splice(index, 1)
    }
  }
  get (id) {
    return _.find(this.logFormats, function (e) {
      return id === e.id
    })
  }
  static storageKey () {
    return 'logviewer'
  }
  static fetch () {
    return JSON.parse(localStorage.getItem(LogFormatList.storageKey()))
  }
}

class LogFormat {
  constructor (source = {}) {
    this.id = source.id || ''
    this.format = source.format || ''
  }
}

export default LogFormatList
