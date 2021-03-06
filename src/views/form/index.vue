<template>
  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <el-form-item label="活动名称">
      <el-input v-model="sizeForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-input v-model="sizeForm.region"></el-input>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-input v-model="sizeForm.date1"></el-input>
    </el-form-item>
    <el-form-item label="省">
      <el-input v-model="sizeForm.province"></el-input>
    </el-form-item>
    <el-form-item label="市">
      <el-input v-model="sizeForm.city"></el-input>
    </el-form-item>
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "index",

    data () {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          province: '',
          city: '',
          resource: '',
          desc: ''
        }
      }
    },

    methods: {
      initFormList () {
        this.$http.post('/form/list').then(({data}) => {
          this.sizeForm = data.data
        });
      },

      onSubmit() {
        console.log('submit!');
      }
    },

    created() {
      this.initFormList()
    }
  }
</script>

<style scoped>

</style>
