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
                                                    <a class="btn-default btn-border" href="#">Launch The Site</a>
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
                                        <router-link to="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-01.jpg" alt="Portfolio-images"/>
                                        </router-link>
                                    </div>
                                    <div class="inner">
                                        <h4><router-link to="/portfolio-details">Digital Analysis</router-link></h4>
                                        <span class="category">Technique</span>
                                    </div>
                                </div>
                            </div>
                             <!-- {/* End Single Portfolio */} -->
                            <!-- {/* Start Single Portfolio */} -->
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="related-work text-center mt--30">
                                    <div class="thumb">
                                        <router-link to="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-02.jpg" alt="Portfolio-images"/>
                                        </router-link>
                                    </div>
                                    <div class="inner">
                                        <h4><router-link to="/portfolio-details">Plan Management</router-link></h4>
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
      PostList: BlogContent.slice(0, 3),
      activePortfolio: { title: "", },
      portfolioList: [
      {
          title: "KnowL",
          subtitle: "Empowering Exceptional Customer Support and Knowledge Management",
          description: "Created cloud-based Knowledge Base for a top HRMS provider, enhancing product understanding",
          para: "KnowL is an innovative customer support and knowledge management app designed to revolutionize the way businesses interact with their customers. Our app is built on the foundation of providing exceptional support experiences and fostering strong customer relationships. KnowL offers a comprehensive suite of features and tools that streamline support operations and enable businesses to deliver outstanding customer service across various communication channels.",
          subpara: "Central to KnowL is its powerful ticketing system, which serves as a centralized hub for managing customer inquiries. Regardless of the communication channel—email or self-service portals—KnowL organizes and prioritizes customer requests, ensuring they are promptly assigned to the appropriate support agents. This streamlined approach saves time, reduces response times, and enables your support team to efficiently resolve customer issues.",
          heading: "Key Features",
          subheading: "To empower customers in finding answers independently, KnowL offers a robust self-service knowledge base. This knowledge base acts as a comprehensive library of articles, FAQs, and tutorials that customers can access anytime, anywhere. By empowering customers to help themselves, KnowL reduces support ticket volumes, improves efficiency, and enhances overall customer satisfaction.",
          pointone: "",
          pointtwo: "",
          pointthree: "",
          pointfour: "",
          pointfive: "",
          link: "",
          imgpath1: "",
        },
        {
          title: "Slayhub",
          subtitle: "Your Ultimate Zendesk, AzureDevOps, and GitHub Integration Solution",
          description: "Bridging Zendesk and Azure/GitHub for efficient tracking & superior customer service",
          para: "‘SlayHub’ is a seamless way to handle change requests, bugs, and user stories without any hiccups. It bridges the gap between Zendesk, AzureDevOps, and GitHub.",
          subpara: "",
          heading: "Key Features",
          subheading: "",
          pointone: "Two-Way Ticket Sync",
          pointtwo: "Real-Time Collaboration",
          pointthree: "Customizable Mapping",
          pointfour: "Automatic Ticket Assignment",
          pointfive: "Detailed Insights & Analytics",
          link: "",
          imgpath1: "",
        },
        
        {
          title: "LoopO",
          subtitle: "Revolutionize Your Communication with the Power of ChatGPT and Google Chrome Extensions!",
          description: "Chrome extension uses ChatGPT for crafting engaging, tailored LinkedIn comments/posts.",
          para: "We always wish there was a way to supercharge our messages and ignite our LinkedIn presence effortlessly right? Well, LoopO is here to transform the way you communicate and take your writing skills to new heights",
          subpara: "",
          heading: "Key Features",
          subheading: "Unleash the full potential of ChatGPT and take your writing skills to the next level with LoopO. From crafting captivating emails to elevating your LinkedIn presence, this revolutionary tool will transform the way you communicate, saving you time and effort while producing exceptional results.",
          pointone: "Craft Captivating Emails, LinkedIn Posts",
          pointtwo: "Supercharge Your Email Messages",
          pointthree: "Ignite Your LinkedIn Presence",
          pointfour: "Master the Art of Responses",
          pointfive: "Revamp Your Writing Anywhere, Anytime",
          link: "",
          imgpath1: "",
        }
      ]
    }
  },
  mounted() {
    this.activePortfolio = this.portfolioList.filter((service) => {
      return service.title == this.$route.query.title;
    })[0];
  },
};
</script>