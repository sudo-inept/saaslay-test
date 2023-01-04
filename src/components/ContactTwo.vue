<template>
    <div class="contact-form--1">
      <div class="container">
        <div class="row row--35 align-items-start">
          <div class="col-lg-6 order-2 order-lg-1">
            <div class="section-title text-left mb--50">
              <span class="subtitle">Let's Say Hi</span>
              <h2 class="title">Contact With Us.</h2>
              <div class="im_address">
                <span>Call us directly:</span>
                <a class="link im-hover" href="phone">+111 (0)55 5869 8976</a>
              </div>
              <div class="im_address mt--5">
                <span>Contact Email:</span>
                <a class="link im-hover" href="email">example@gmail.com</a>
              </div>
            </div>
            <FormStyle />
          </div>
          <div class="col-lg-6 order-1 order-lg-2">
            <div class="thumbnail mb_md--30 mb_sm--30">
              <img src="/assets/images/about/about-12.jpg" alt="trydo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import FormStyle from './FormStyle.vue'
  
  export default {
    name: 'ContactTwo',
    components: {
      FormStyle
    }
  }
  </script>
  