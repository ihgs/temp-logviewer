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
    const logformat = new LogFormat({id: id, format: format})
    this.logFormats.push(logformat)
  }
  save () {
    localStorage.setItem(LogFormatList.storageKey(), JSON.stringify(this))
  }
  remove (id) {
    _.remove(this.logFormats, function (e) {
      return id === e.id
    })
  }
  get (id) {
    const a = _.find(this.logFormats, function (e) {
      return id === e.id
    })
    console.log(a)
    return a
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
