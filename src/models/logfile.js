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
    const countGroup = (str) => {
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
    this.size = countGroup(logformat.toString())
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
