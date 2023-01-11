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
          <div
            v-for="(value, i) in PostList"
            :key="i"
            class="col-lg-4 col-md-6 col-12 mt--30"
          >
            <div class="im_box">
              <div class="thumbnail">
                <router-link :to="'/blog-details'">
                  <img class="w-100" :src="`/assets/images/blog/blog-${value.images}.jpg`" alt="Blog Images"/>
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
      </div>    
    </div>
      <!-- End Blog Area -->
  
    <!-- Start Brand Area -->
    <div class="rn-brand-area bg_color--1 ptb--120">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="section-title text-center mb--30">
              <span class="subtitle">Top clients</span>
              <h2 class="title">We worked with brands.</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <BrandTwo />
          </div>
        </div>
      </div>
    </div>
    <!-- End Brand Area -->
    
    <!-- Start Back To Top -->
    <div class="backto-top">
      <ScrollTopArrow />
    </div>
    <!-- End Back To Top -->

    <!-- Start Footer Style  -->
    <Footer />
    <!-- End Footer Style  -->

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
      PostList: BlogContent.slice(0, 3)
    }
  }
};
</script>
