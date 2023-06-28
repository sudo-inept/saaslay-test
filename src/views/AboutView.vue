<template>
  <div class="">
    <Breadcrumb title="About" pageTitle="Unleash the Power of Technology with SaasLay!" />

    <div class="rn-about-area ptb--120 bg_color--5">
      <div class="container">
        <div class="row row--35 align-items-center">
          <div class="col-lg-6">
            <div class="thumbnail">
              <img class="w-100" src="/assets/images/about/about-4.png" alt="About Images" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-inner inner">
              <div class="section-title">
                <span class="subtitle">Who We Are</span>
                <h2 class="title">Who We Are</h2>
                <p class="description">We are a team of technology enthusiasts, dreamers, and problem solvers who believe
                  in the transformative power of technology. We help businesses of all sizes unlock their full potential
                  by providing them with the tools and solutions they need to succeed in the digital age.</p>

                <p class="description">We are committed to providing our customers with the highest quality service and
                  support. We are also
                  committed to social responsibility and believe that technology can be used to make a positive impact on
                  the world. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="rn-about-area ptb--120 bg_color--5">
      <div class="container">
        <div class="row row--35 align-items-center">
          <div class="col-lg-6">
            <div class="thumbnail">
              <img class="w-100" src="/assets/images/about/about-3-right.jpg" alt="About Images" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-inner inner">
              <div class="section-title">
                <span class="subtitle">Our Story</span>
                <h2 class="title">Our Story</h2>
                <p class="description">Every great venture has a story. Ours is one of passion, innovation, and dedication
                  to making a difference.</p>
                <p class="description">We started with a shared vision of building a company that would revolutionize the
                  way businesses
                  harness technology. From humble beginnings, we have grown into a dynamic team of professionals, united
                  by our passion for innovation and a drive to make a difference.</p>
                <p class="description">Together, we have embarked on a journey of transforming businesses, one success
                  story at a time.</p>
                <p class="description">We believe that technology can be a powerful force for good in the world. We are
                  committed to using our
                  expertise to help businesses of all sizes achieve their goals and make a positive impact on the world.
                </p>
                <p class="description">We are excited to continue our journey and help even more businesses succeed. We
                  believe that the best
                  is yet to come. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="rn-finding-us-area attacment-fixed rn-finding-us ptb--120 bg_color--1 bg_image bg_image--18"
      data-black-overlay="5">
      <div class="conrtianer">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="inner">
              <div class="content-wrapper">
                <div class="content">
                  <h4 class="theme-gradient">Join Us on the Journey</h4>
                  <p>
                    Are you ready to embrace the power of technology and embark on a transformative journey with SaasLay?
                    Contact our passionate team today to explore how our innovative solutions and technology consulting
                    services can elevate your business to new heights.
                  </p>
                  <router-link class="btn-default" to="/about">Get Started</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="rn-about-area ptb--120 bg_color--1">
      <div class="container">
        <div class="row row--35 align-items-center">
          <div class="col-lg-6 order-2 order-lg-1">
            <div class="about-inner inner">
              <div class="section-title">
                <span class="subtitle">Our Mission</span>
                <h2 class="title">Our Mission</h2>
                <p class="description">At SaasLay, we redefine what's possible.</p>
                <p class="description">We are a team of technology experts and
                  innovators who are passionate about helping
                  businesses succeed. We believe that technology can be a powerful force for good, and we are committed to
                  using our expertise to help businesses of all sizes achieve their goals.</p>

                <p class="description">We empower businesses to embrace digital transformation, achieve operational
                  efficiency, and stay ahead
                  of the curve in an ever-evolving digital landscape. </p>
              </div>

            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2">
            <div class="thumbnail position-relative">
              <img class="w-100" src="/assets/images/about/about-3.png" alt="About Images" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about-area ptb--120 bg_color--1">
      <div class="about-wrapper">
        <div class="container">
          <div class="row row--35 align-items-center">
            <div class="col-lg-5 col-md-12">
              <div class="thumbnail">
                <img class="w-100" src="/assets/images/about/about-1.png" alt="About Images" />
              </div>
            </div>
            <div class="col-lg-7 col-md-12">
              <div class="about-inner inner">
                <div class="section-title">
                  <h2 class="title">Our Approach</h2>
                  <p class="description">We take a unique and collaborative approach to every project.</p>
                  <p class="description">We work closely with our clients to understand their aspirations, challenges, and
                    unique needs. We combine our technical prowess with creative thinking to develop tailored strategies
                    and deliver solutions that exceed expectations.</p>
                  <p class="description">Our holistic approach encompasses the latest technologies, industry best
                    practices, and a deep understanding of our clients' industries to ensure sustainable and long-term
                    success.</p>
                  <p class="description">We believe that every business is unique, and we tailor our approach to each
                    project accordingly. We are committed to working with our clients to understand their specific needs
                    and goals, and we are always looking for new and innovative ways to help them achieve their desired
                    results.</p>
                  <p class="description">We are confident that our unique and collaborative approach will help you achieve
                    your business goals. We invite you to contact us to learn more about how we can help you succeed.</p>
                  <div class="purchase-btn">
                    <router-link class="btn-transparent" to="/">SAASLAY</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Testimonial from "../components/Testimonial.vue";
import BrandTwo from "../components/BrandTwo.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import AboutComp from "../components/About.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
  components: {
    Breadcrumb,
    Testimonial,
    BrandTwo,
    Header,
    Footer,
    AboutComp,
  },
  data() {
    return {
      pageTitle: "About",
      title: "About",
      blackOverlay: "5",
    };
  },
};
</script>

