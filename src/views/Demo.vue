<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
const router = useRouter()
const store = useStore()

const go = ()=>{
  router.push('/home/mine')
}
</script>

<template>
  <Page>
  <div>资源引入：<img alt="Vue logo" src="../assets/logo.png" width="20" /></div>
  <div>组件引入：<HelloWorld msg="components" /></div>
  <div>路由跳转：<van-button type="primary" @click="go">go</van-button></div>
  <div>vuex使用：{{store.state.user.name}}</div>
  <div><van-field border placeholder="请输入用户名"></van-field></div>
  <p class="font">字体大小</p>
  </Page>
</template>

<style>
.font{
  font-size: 32px;
}
</style>
