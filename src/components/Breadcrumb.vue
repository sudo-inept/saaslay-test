<template>
    <div class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-inner pt--100">
              <h2 class="title">{{ title }}</h2>
              <ul class="page-list">
                <li class="rn-breadcrumb-item">
                  <router-link to="{{ process.env.PUBLIC_URL }}">Home</router-link>
                </li>
                <li class="rn-breadcrumb-item" v-if="parent">{{ parent }}</li>
                <li class="rn-breadcrumb-item active">{{ title }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
  name: "Breadcrumb",
  props: {
    title: {
      type: String,
      required: true
    },
    parent: {
      type: String,
      default: ""
    }
  }
};
</script>
