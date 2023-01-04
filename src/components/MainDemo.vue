<template>    
  <div class="active-dark"> 
  
      <!-- Start Slider Area -->
      <div class="slider-wrapper">
        <SliderOne />
      </div>
      <!-- End Slider Area -->
  
      <!-- Start About Area -->
      <div class="about-area ptb--120 bg_color--1">
        <About />
      </div>
      <!-- End About Area -->
  
      
  
      <!-- Start Portfolio Area -->
      <div class="portfolio-area ptb--120 bg_color--1">
        <div class="portfolio-sacousel-inner mb--55">
          <Portfolio />
        </div>
      </div>
      <!-- End Portfolio Area -->
  
      
  
      <!-- Start Testimonial Area -->
      <div class="rn-testimonial-area bg_color--1 ptb--120">
        <div class="container">
          <Testimonial />
        </div>
      </div>
      <!-- End Testimonial Area -->
  
      <!-- Start Blog Area -->
      <div class="rn-blog-area ptb--120 bg_color--5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="section-title text-center">
                <span class="subtitle">what's stories on</span>
                <h2 class="title">Latest News</h2>
                <p class="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
              </div>
            </div>
          </div>
          <div class="row mt--30 mt_sm--40">
            <div class="col-lg-12">
              <div class="blog-carousel-wrap">
                <BlogList v-for="post in PostList" :key="post.id" :post="post" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Blog Area -->
  
<!-- Start Brand Area -->
  <div class="rn-brand-area ptb--120 bg_color--5">
      <div class="container">
        <BrandTwo />
      </div>
    </div>
    <!-- End Brand Area -->

    <!-- Start Footer Style  -->
    <Footer />
    <!-- End Footer Style  -->

    <!-- Start Back To Top -->
    <div class="backto-top">
      <ScrollTopArrow />
    </div>
    <!-- End Back To Top -->
  </div>
</template>
  

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import ScrollTopArrow from "./ScrollTopArrow.vue";

import SliderOne from "./SliderOne.vue";
import ServiceTwo from "./ServiceTwo.vue";
import Testimonial from "./Testimonial.vue";
import About from "./About.vue";
import Portfolio from "./Portfolio.vue";
import BrandTwo from "./BrandTwo.vue";
import BlogList from "./BlogList.vue";

export default {
  name: "MainDemo",
  components: {
    Header,
    Footer,
    SliderOne,
    ServiceTwo,
    Testimonial,
    About,
    Portfolio,
    BrandTwo,
    ScrollTopArrow,
    BlogList,
  },
  data() {
    return {
      PostList:[],
    };
  }
};
</script>
