<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <template v-for='(item, index) in tatbleHead'>
      <el-table-column
         v-if="item.prop === 'operate'"
        :key="index"
        :label="item.label"
        width="180">
        <template slot-scope="scope">
          <el-select v-model="scope.row.select" placeholder="请选择活动区域">
            <el-option v-for="(item, index) in options"
                       :key="index"
                       :label="item.label"
                       :value="item.label">
            </el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column
        v-else
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
      select: '单瓶',
      options: [{
        label: '单瓶',
        value: '我的1'
      },{
        label: '整箱',
        value: '我的2'
      }],
      tatbleHead: [{
        label: '创建时间',
        prop: 'createdTime',
        desc: '111',
      },{
        label: '登录名',
        prop: 'loginName',
        desc: '222',
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
        this.tableData = data.data.dataList;
        this.tableData.map(item => item.num = 1)
        // console.log('this.tableData', this.tableData)
      });
    },

    changeValue (e) {
      // console.log(e, '1111111111111111')
      this.region = e;
    },
  },

  created() {
    this.initTableList()
  }
}
</script>

<style scoped>

</style>
