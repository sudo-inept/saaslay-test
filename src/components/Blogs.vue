<template>
    <div class="row mt_dec--30">
      <div
        v-for="(value, i) in blogContent"
        :key="i"
        class="col-lg-4 col-md-6 col-sm-12 col-12 mt--30"
      >
        <div class="im_box">
          <div class="thumbnail">
            <router-link :to="'/blog-details'">
              <img class="w-100" :src="`/assets/images/blog/blog-${value.images}.jpg`" alt="Blog Images" />
            </router-link>
          </div>
          <div class="content">
            <div class="inner">
              <div class="content_heading">
                <div class="category_list">
                  <router-link :to="'/blog-details'">{{ value.category }}</router-link>
                </div>
                <h4 class="title">
                  <router-link :to="'/blog-details'">{{ value.title }}</router-link>
                </h4>
              </div>
              <div class="content_footer">
                <router-link class="rn-btn btn-opacity" :to="'/blog-details'">Read More</router-link>
              </div>
            </div>
            <router-link class="transparent_link" :to="'/blog-details'"></router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import BlogContent from "./BlogContent";

  export default {
    data() {
      return {
        postList: [],
        blogContent: BlogContent,

      }
    },
  }
  </script>
  