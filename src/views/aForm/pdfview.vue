<template>
  <div id="show_box" style="height: 100%" />
</template>

<script>
import { embed } from './pdfobject'
// PDFObject.embed(result, "#mail_pictorial_show_box");

export default {
  name: 'Pdfview',
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  watch: {
    src: {
      immediate: true,

      handler(value) {
        console.log(value)
        if (value) this.pdfstart()
      }
    }
  },
  methods: {
    pdfstart() {
      console.log(this.src)
      this.$nextTick(() => {
        embed(this.src, '#show_box')
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
