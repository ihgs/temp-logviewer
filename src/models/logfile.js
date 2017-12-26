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
  constructor (file, logformat) {
    this.name = file.name
    const reader = new FileReader()
    this.logs = []
    reader.onload = (e) => {
      const res = e.target.result
      let logItem
      let index = 0
      res.split('\n').forEach(element => {
        const matchItem = element.match(logformat)
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
