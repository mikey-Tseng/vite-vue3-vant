<script setup>
import {useRoute} from "vue-router";
const route = useRoute()
</script>
<template>
  <router-view v-slot="{ Component }">
    <transition :name="route.meta.transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
