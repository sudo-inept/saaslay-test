<template>
    <div>
        <!-- {/* Start Breadcrump Area */} -->
                <div class="rn-page-title-area pt--120 pb--190 pb_md--100 pb_sm--100  bg_image bg_image--4"  data-black-overlay="7">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="rn-page-title text-center pt--100">
                                    <h2 class="title theme-gradient">Software Architecture and Development Consulting</h2>
                                    <p>We help you build the software you need to succeed, from ideation to deployment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- {/* End Breadcrump Area */} -->

                <!-- {/* Start Portfolio Details */} -->
                <div class="rn-portfolio-details ptb--120 bg_color--1">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="portfolio-details">
                                    <div class="row row--35 mb--50">
                                        <div class="col-lg-6">
                                            <div class="inner">
                                                <div class="section-title">
                                                    <h2 class="title">Our Approach</h2>
                                                    <p class="description mt--30">Requirements analysis and planning: We collaborate with your team to understand your business objectives, processes, and technical requirements. Through meticulous analysis, we identify key software development needs and define a strategic roadmap to ensure a successful outcome.</p>
                                                    <p class="description">Architecture design and strategy: Our experienced architects design a solid software architecture that lays the foundation for a scalable and flexible system. We focus on modularity, reusability, and future growth, taking into account factors such as performance, security, and integration capabilities.</p>
                                                </div>
                                                <div class="portfolio-view-list d-flex flex-wrap">
                                                    <div class="port-view">
                                                        <span>Branch</span>
                                                        <h4>Ability</h4>
                                                    </div>

                                                    <div class="port-view">
                                                        <span>Project Types</span>
                                                        <h4>Website</h4>
                                                    </div>

                                                    <div class="port-view">
                                                        <span>Program</span>
                                                        <h4>View Project</h4>
                                                    </div>
                                                </div>
                                                <div class="portfolio-details-btn mt--30">
                                                    <a class="btn-default btn-border" href="/portfolio">Launch The Site</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="portfolio-details-accordion mt_md--40 mt_sm--40">
                                                <div class="inner">
                                                    <div class="section-title">
                                                        <h4 class="title">Our software architecture and development consulting services offer a number of benefits</h4> 
                                                        <p class="description mt--30">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form have suffered alteration in some form.</p>
                                                        <p class="description mt--30">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                                        <ul class="list-style--1">
                                                            <li>Expert guidance</li>
                                                            <li>Customized solutions</li>
                                                            <li>Scalability and flexibility</li>
                                                            <li>Reduced time-to-market</li>
                                                        </ul>     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="portfolio-thumb-inner">
                                        <div class="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button class="video-popup position-top-center" onClick={this.openModal}><span class="play-icon"></span></button>
                                        </div>
                                        
                                        <div class="thumb mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-02.jpg" alt="Portfolio Images"/>
                                        </div>

                                        <div class="thumb">
                                            <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images"/>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- {/* End Portfolio Details */} -->

        <!-- {/* Start Related Work */} -->
                <div class="portfolio-related-work pb--120 bg_color--1">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section-title text-center">
                                    <span class="subtitle">Related Work</span>
                                    <h2 class="title">Our More Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row mt--10">
                            <!-- {/* Start Single Portfolio */} -->
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="related-work text-center mt--30">
                                    <div class="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-01.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div class="inner">
                                        <h4><a href="/portfolio-details">Digital Analysis</a></h4>
                                        <span class="category">Technique</span>
                                    </div>
                                </div>
                            </div>
                             <!-- {/* End Single Portfolio */} -->
                            <!-- {/* Start Single Portfolio */} -->
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="related-work text-center mt--30">
                                    <div class="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-02.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div class="inner">
                                        <h4><a href="/portfolio-details">Plan Management</a></h4>
                                        <span class="category">PLANNING</span>
                                    </div>
                                </div>
                            </div>
                             <!-- {/* End Single Portfolio */} -->
                        </div>
                    </div>
                </div>
                <!-- {/* End Related Work */} -->

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