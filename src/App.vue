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
<style>

.slide-in-enter-active,.slide-out-enter-active,.slide-in-leave-active,.slide-out-leave-active{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation-fill-mode: both;
  will-change: transform,opacity;
}
.slide-in-enter-active{
  z-index: 3;
  box-shadow: -2px -2px 4px 1px #f8f8f8;
  animation: slide-in .5s;
}
.slide-out-enter-active{
  z-index: 1;
  animation: slide-out .5s;
}
.slide-in-leave-active{
  z-index: 2;
  animation: slide-in-leave .4s;
}
.slide-out-leave-active{
  z-index: 2;
  animation: slide-out-leave .4s;
}
@-webkit-keyframes slide-in-leave {
  0% {
    opacity: 1;
  }
  25%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes slide-out-leave {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(50%);
    opacity: 0;
  }
}
@-webkit-keyframes slide-in {
0% {
  opacity: 0;
  transform: translateX(50%);
}
80%{
  opacity: 1;
}
100% {
  opacity: 1;
  transform: translateX(0);
}
}
@-webkit-keyframes slide-out {
0% {
  opacity: 0;
}
80%{
  opacity: 1;
}
100% {
  opacity: 1;
}
}
</style>
