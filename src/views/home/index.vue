<template>
  <div class="home">
<!--    <el-button type="primary" @click="onSubmit">显示弹框</el-button>-->
    <myTable :key="tableKey"/>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <span :key="formKey">
        <myForm/>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import myTable from './components/myTable'
import myForm from './components/myForm'

export default {
  name: 'index',
  components: {
    myTable,
    myForm
  },
  data() {
    return {
      tableKey: 0,
      formKey: 0,
      dialogVisible: false
    }
  },
  created() {
    console.log('created', 'home')
  },
  activated() {
    console.log('activated', 'home')
  },
  methods: {
    handleClose() {
      this.dialogVisible = false
      this.formKey++
    },

    onSubmit() {
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
</style>
