<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-header>
      vue简单框架构建
    </el-header>

    <el-container>
      <el-aside style="width: 200px;">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-setting"></i>导航</template>
            <el-menu-item-group>
              <template v-for="(item, index) in routers">
                <router-link :key="item.name" v-if="item.path != '/'" :to="item.path">
                  <el-menu-item :index="'1-' + index" :class="$route.path == item.path?'is-active':''">{{item.name}}</el-menu-item>
                </router-link>
              </template>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
  import routers from "../routes";

  export default {
    data() {
      return{
        routers: routers
      }
    },

    mounted(){

    }
  };
</script>

<style scoped>
  .el-header {
    background: #000;
    line-height: 60px;
    color: #fff;
    font-size: 18px;
  }

  .el-aside {
    background: #000;
  }
</style>
