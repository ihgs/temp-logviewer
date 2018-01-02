class LogItem {
  constructor (matchItem, index) {
    this.index = index
    this.key = matchItem
    this.key.shift()
    this.detail = []
  }

  add (line) {
    this.detail.push(line)
  }
}

class LogFile {
  countGroup (str) {
    const start = str.match(/\(/g)
    if (start) {
      const escaped = str.match(/\\\(/g)
      if (escaped) {
        return start.length - escaped.length + 1
      } else {
        return start.length + 1
      }
    } else {
      return 1
    }
  }
  setLogformat (logformat) {
    ''.match(logformat)
    this.logformat = logformat
    this.size = this.countGroup(logformat.toString())
  }
  initByString (name, logstr) {
    this.name = name
    this.logs = []

    let logItem
    let index = 0
    logstr.split(/\r?\n/).forEach(element => {
      const matchItem = element.match(this.logformat)
      if (matchItem) {
        logItem = new LogItem(matchItem, ++index)
        this.logs.push(logItem)
      } else if (logItem) {
        logItem.add(element)
      }
    })
  }
  initByFile (file) {
    this.name = file.name
    this.logs = []
    const reader = new FileReader()
    reader.onload = (e) => {
      const res = e.target.result
      let logItem
      let index = 0
      res.split(/\r?\n/).forEach(element => {
        const matchItem = element.match(this.logformat)
        if (matchItem) {
          logItem = new LogItem(matchItem, ++index)
          this.logs.push(logItem)
        } else if (logItem) {
          logItem.add(element)
        }
      })
    }
    reader.readAsText(file)
  }
}

export default LogFile
