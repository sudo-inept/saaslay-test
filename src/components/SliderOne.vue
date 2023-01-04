<template>
    <div class="slider-activation">
      <div
        class="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
        data-black-overlay="8"
      >
        <div class="container position-relative">
          <div class="row">
            <div class="col-lg-12">
              <div class="inner">
                <h1 class="title theme-gradient">Design Driven Development Your Web Products.</h1>
              </div>
            </div>
          </div>
  
          <div class="service-wrapper service-white">
            <service-one />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ServiceOne from "./ServiceOne.vue";
  
  export default {
    name: "SliderOne",
    components: {
      ServiceOne,
    },
  };
  </script>
  