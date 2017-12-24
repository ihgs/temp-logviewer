<template>

<div id="upload_section">
    <div id="drop" draggable=true style="height:50px; padding:10px; border:3px solid" v-on:dragover="onDragOver" v-on:drop="onDrop">
        ファイルをドラッグアンドドロップしてください。複数ファイル同時も対応しています。
    </div>
    <ul>
      <li v-for="item in logFiles">
        {{item.name}}
      </li>
    </ul>
</div>
</template>

<script>
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
      var files = event.dataTransfer.files
      for (var i = 0; i < files.length; i++) {
        this.logFiles.push(files[i])
      }
    }
  }
}
</script>