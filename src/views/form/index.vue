<template>
  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <el-form-item label="活动名称">
      <el-input v-model="sizeForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="region" @change="changeValue" placeholder="请选择活动区域">
        <el-option v-for="(item, index) in options"
                   :key="index"
                   :label="item.label"
                   :value="item.label">
        </el-option>
      </el-select>
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
        options: [{
          label: '111',
          value: '我的1'
        },{
          label: '222',
          value: '我的2'
        }],
        region: '',
        sizeForm: {
          name: '',
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

      }
    },

    created() {
      this.initFormList()
    }
  }
</script>

<style scoped>

</style>
