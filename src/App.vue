<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
export default {
  components : {
    Header,
    RouterView,
  }
}
</script>

<template>
    <Header/>
    <RouterView />
</template>

