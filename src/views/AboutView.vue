<template>
  <div class="">
    <Breadcrumb title="About" />
    
    <div class="about-area ptb--120 bg_color--1">
      <AboutComp />
    </div>

    <div class="rn-counterup-area ptb--120 bg_color--5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Experts growts</span>
              <h2 class="title">Our Company Growth</h2>
              <p class="description">We have grown strength over the past 20 years.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-finding-us-area attacment-fixed rn-finding-us ptb--120 bg_color--1 bg_image bg_image--18" data-black-overlay="5">
      <div class="conrtianer">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="inner">
              <div class="content-wrapper">
                <h4 class="theme-gradient">Find Your Work Now</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                <a class="btn-default" href="/about">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-team-area bg_color--1 ptb--120">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section-title text-center mb--25">
                                    <span class="subtitle">Skilled team</span>
                                    <h2 class="title">Skilled Team</h2>
                                    <p class="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="team">
                                    <div class="thumbnail">
                                        <img class="w-100" src="/assets/images/team/team-01.jpg" alt="Blog Images"/>
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Jone Due</h4>
                                        <p class="designation">Sr. Web Developer</p>
                                    </div>
                                    <ul class="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="team">
                                    <div class="thumbnail">
                                        <img class="w-100" src="/assets/images/team/team-02.jpg" alt="Blog Images"/>
                                    </div>
                                    <div class="content">
                                        <h4 class="title">BM. Alamin</h4>
                                        <p class="designation">Sr. Web Developer</p>
                                    </div>
                                    <ul class="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="team">
                                    <div class="thumbnail">
                                        <img class="w-100" src="/assets/images/team/team-03.jpg" alt="Blog Images"/>
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Jone Due</h4>
                                        <p class="designation">Sr. Web Developer</p>
                                    </div>
                                    <ul class="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

    <div class="rn-testimonial-area bg_color--5 ptb--120">
       <div class="container">
          <Testimonial />
       </div>
    </div>

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

      <Footer />

  </div>
</template>

<script>
import Testimonial from '../components/Testimonial.vue';
import BrandTwo from '../components/BrandTwo.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import AboutComp from '../components/About.vue';
import Breadcrumb from  '../components/Breadcrumb.vue';

export default {
  components: {
    Breadcrumb,
    Testimonial,
    BrandTwo,
    Header,
    Footer,
    AboutComp
  },
  data() {
    return {
      pageTitle: 'About',
      title: 'About',
      blackOverlay: '5'
    };
  }
};
</script>

