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
  
      <!-- Service Area -->
      <div class="service-area ptb--120 bg_color--5">
          <div class="container">
              <ServiceTwo />
          </div>
      </div>
      <!-- Service Area -->
  
      <!-- Start Portfolio Area -->
      <div class="portfolio-area ptb--120 bg_color--1">
        <div class="portfolio-sacousel-inner mb--55">
          <Portfolio />
        </div>
      </div>
      <!-- End Portfolio Area -->


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
import BlogContent from "./BlogContent.js";
import CounterOne from "./CounterOne.vue";

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
    CounterOne,
  },
  data() {
    return {
      PostList: BlogContent.slice(0, 3)
    }
  }
};
</script>
