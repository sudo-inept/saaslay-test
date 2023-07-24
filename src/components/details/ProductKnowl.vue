<template>
    <div>
        <!-- {/* Start Breadcrump Area */} -->
                <div class="rn-page-title-area pt--120 pb--190 pb_md--100 pb_sm--100  bg_image bg_image--4"  data-black-overlay="7">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="rn-page-title text-center pt--100">
                                    <h2 class="title theme-gradient">KnowL</h2>
                                    <p>Empowering Exceptional Customer Support and Knowledge Management</p>
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
                                        <div class="col-lg-12">
                                            <div class="inner">
                                                <div class="section-title">
                                                    <h2 class="title">KnowL</h2>
                                                    <p class="description mt--30">KnowL is an innovative customer support and knowledge management app designed to revolutionize the way businesses interact with their customers. Our app is built on the foundation of providing exceptional support experiences and fostering strong customer relationships. KnowL offers a comprehensive suite of features and tools that streamline support operations and enable businesses to deliver outstanding customer service across various communication channels.</p>
                                                    <p class="description">Central to KnowL is its powerful ticketing system, which serves as a centralized hub for managing customer inquiries. Regardless of the communication channel—email or self-service portals—KnowL organizes and prioritizes customer requests, ensuring they are promptly assigned to the appropriate support agents. This streamlined approach saves time, reduces response times, and enables your support team to efficiently resolve customer issues.</p>
                                                    <p class="description mt--30">To empower customers in finding answers independently, KnowL offers a robust self-service knowledge base. This knowledge base acts as a comprehensive library of articles, FAQs, and tutorials that customers can access anytime, anywhere. By empowering customers to help themselves, KnowL reduces support ticket volumes, improves efficiency, and enhances overall customer satisfaction.</p>
                                                        <p class="description mt--30">KnowL's advanced analytics and reporting features provide valuable insights into support performance. Key metrics, agent productivity, and customer satisfaction can be monitored and measured, enabling businesses to identify areas for improvement and make data-driven decisions. These insights optimize support strategies and ensure exceptional customer experiences.</p>
                                                </div>
                                                <div class="portfolio-details-btn mt--30">
                                                    <a class="btn-default btn-border" href="#">Launch The Site</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="portfolio-details-accordion mt_md--40 mt_sm--40">
                                                <div class="inner">
                                                    <div class="section-title">
                                                        
                                                        <p class="description mt--30">Scalability and flexibility are inherent in KnowL's design, accommodating businesses of all sizes. Our app's architecture is adaptable, allowing businesses to customize the platform to match their unique requirements. This customization ensures a tailored experience that reflects their brand and customer service goals.</p>
                                                        <p class="description mt--30">Security and compliance are paramount for KnowL. We employ robust data protection measures, encryption protocols, and adhere to industry standards to safeguard customer data. Businesses can confidently provide outstanding support while KnowL handles the security aspects of customer interactions.</p>
                                                        <p class="description mt--30">Experience the transformative power of KnowL, trusted by businesses worldwide to elevate their customer support and knowledge management. With KnowL, businesses can streamline their support experience, foster customer loyalty, and drive business growth through exceptional customer service and knowledge sharing.</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portfolio-thumb-inner">
                                        <div class="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-01-knowl.png" alt="Portfolio Images"/>
                                        </div>
                                        
                                        <div class="thumb mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-02-knowl.png" alt="Portfolio Images"/>
                                        </div>

                                        <div class="thumb">
                                            <img src="/assets/images/portfolio/portfolio-big-03-knowl.png" alt="Portfolio Images"/>
                                        </div>
                                    </div>
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
                                        <router-link to="/productslayhub">
                                            <img src="/assets/images/portfolio/portfolio-8.webp" alt="Portfolio-images" width="600" height="414"/>
                                        </router-link>
                                    </div>
                                    <div class="inner">
                                        <h4><router-link to="/productslayhub">Slayhub</router-link></h4>
                                        <span class="category"></span>
                                    </div>
                                </div>
                            </div>
                             <!-- {/* End Single Portfolio */} -->
                            <!-- {/* Start Single Portfolio */} -->
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="related-work text-center mt--30">
                                    <div class="thumb">
                                        <router-link to="/productloopo">
                                            <img src="/assets/images/portfolio/related-image-02.jpg" alt="Portfolio-images"/>
                                        </router-link>
                                    </div>
                                    <div class="inner">
                                        <h4><router-link to="/productloopo">Loopo</router-link></h4>
                                        <span class="category"></span>
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
import Footer from "../Footer.vue";
import ScrollTopArrow from "../ScrollTopArrow.vue";

import Portfolio from "../Portfolio.vue";

export default {
  name: "MainDemo",
  components: {
    Footer,
    Portfolio,
    ScrollTopArrow,
  },
  data() {
    return {
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