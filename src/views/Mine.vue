<script setup>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
const router = useRouter()
const store = useStore()
const go = ()=>{
  router.push('/home')
}
</script>

<template>
<Page>
  mine
  <button @click="go">button</button>
</Page>
</template>

<style>

</style>
