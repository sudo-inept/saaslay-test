<template>
    <div>
      <div v-for="(post, i) in blogContent" :key="i">
        <img :src="'images/blog/' + post.images + '.jpg'" alt="" />
        <h3>{{ post.title }}</h3>
        <p>{{ post.category }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import BlogContent from "./BlogContent";
  
  export default {
    name: "BlogList",
    data() {
      return {
        blogContent: BlogContent,
      };
    },
  };
  </script>
  