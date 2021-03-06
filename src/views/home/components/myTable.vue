<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <template v-for='(item, index) in tatbleHead'>
      <el-table-column
        :key="index"
        :prop="item.prop"
        :label="item.label"
        width="180">
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: "myTable",

  data () {
    return {
      tatbleHead: [{
        label: '创建时间',
        prop: 'createdTime',
        desc: '',
      },{
        label: '登录名',
        prop: 'loginName',
        desc: '',
      },{
        label: '角色',
        prop: 'userName',
        desc: '',
      },{
        label: '操作',
        prop: 'operate',
        desc: '',
      }],
      tableData: [],
    }
  },

  methods: {
    initTableList () {
      this.$http.get('/tableList').then(({data}) => {
        this.tableData = data.data.dataList
      });
    }
  },

  created() {
    this.initTableList()
  }
}
</script>

<style scoped>

</style>
