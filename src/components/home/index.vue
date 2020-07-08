<template>
  <div class="home">
    <el-table
      :data="tableData"
      style="width: 100%">
      <template v-for='(item, index) in tatbleHead'>
        <el-table-column
          v-if="item.prop === 'operate'"
          :key="index"
          :label="item.label"
          width="180">
          <template slot-scope='scope'>
            操作
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.prop === 'img'"
          :key="index"
          :label="item.label"
          width="180">
          <template>
            gggggggggggggggggg
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="index"
          :label="item.label"
          :prop="item.prop"
          width="180">
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "index",
    
    data () {
      return {
        tatbleHead: [{
          label: '岗位',
          prop: 'post'
        },{
          label: '公司名称',
          prop: 'name'
        },{
          label: '图片',
          prop: 'img'
        },{
          label: '操作',
          prop: 'operate'
        }],
        tableData: [{
          post: '1',
          name: '1',
          img: '1',
          prop: '1'
        }, {
          post: '2',
          name: '2',
          img: '2',
          prop: '2'
        }, {
          post: '3',
          name: '3',
          img: '3',
          prop: '3'
        }, {
          post: '4',
          name: '4',
          img: '4',
          prop: '4'
        }]
      }
    }
  }
</script>

<style scoped>
  .home {
    height: 1500px;
  }
</style>
