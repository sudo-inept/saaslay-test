<template>
  <div>
    <div
      class="rn-page-title-area pt--120 pb--190 pt_md--100 pb_md--100 pt_sm--100 pb_sm--100 bg_image bg_image--4"
      data-black-overlay="5"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="rn-page-title text-center pt--100 pt_md--50 pt_sm--100">
              <h2 class="title theme-gradient">Product Development</h2>
              <p>Service Detail Page Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rn-service-details ptb--120 bg_color--1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="service-details-inner">
              <div class="inner">
                <div
                  class="row row--35 sercice-details-content align-items-center"
                >
                  <div class="col-lg-6 col-12">
                    <div class="thumb position-relative">
                      <img
                        class="w-100"
                        src="/assets/images/service/service-01.png"
                        alt="Service Images"
                      />
                      <modal-video
                        channel="youtube"
                        :isOpen="isOpen"
                        videoId="ZOoVOfieAF8"
                        @close="closeModal"
                      />
                      <button class="video-popup" @click="openModal">
                        <span class="play-icon"></span>
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="details mt_md--30 mt_sm--30">
                      <div class="section-title">
                        <span class="subtitle">Our approach</span>
                        <h2 class="title">Product Development</h2>
                        <p class="description">
                          Our process is holistic and covers the entire product
                          development lifecycle, from ideation to deployment and
                          support. We work closely with our clients to
                          understand their needs and goals, and we use our
                          expertise and experience to create products that are
                          both innovative and user-friendly.
                        </p>
                        <p class="description">
                          Ready to take your business to the next level? Contact
                          us today to learn how SaasLay can help you achieve
                          your business goals.
                        </p>
                      </div>
                      <ul class="service-details-list">
                        <li>
                          <!-- <fi-check /> -->
                          <span
                            >Discovery and Planning: We collaborate with you to
                            understand your vision, goals, and target market. We
                            conduct market research and create a comprehensive
                            project plan to ensure alignment and success.</span
                          >
                        </li>
                        <li>
                          <span
                            >Design and Prototyping: Our talented design team
                            translates your ideas into visually appealing and
                            user-friendly interfaces. We create interactive
                            prototypes to gather feedback and iterate on the
                            design.</span
                          >
                        </li>
                        <li>
                          <span
                            >Development and Testing: Our experienced developers
                            bring the design to life, using the latest
                            technologies and best practices. We follow rigorous
                            testing procedures to ensure quality, performance,
                            and security</span
                          >
                        </li>
                        <li>
                          <span
                            >Deployment and Support: We assist with the
                            deployment of the product, whether it's on-premises
                            or in the cloud. We also provide ongoing support and
                            maintenance to ensure your product's long-term
                            success.</span
                          >
                        </li>
                        <li>
                          <span
                            >Deployment and Support: We assist with the deployment of the product, whether it's on-premises or in the cloud. We also provide ongoing support and maintenance to ensure your product's long-term success.</span
                          >
                        </li>
                        <li>
                          <span
                            >If you're looking for a partner to help you bring your product to market, SaasLay is the perfect choice. We have the expertise, experience, and passion to help you succeed.</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rn-service-details ptb--120 bg_color--5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="service-details-inner">
              <div class="inner">
                <div
                  class="row row--35 sercice-details-content align-items-center"
                >
                  <div class="col-lg-6 col-12">
                    <div class="details">
                      <div class="section-title">
                        <span class="subtitle">Our benefits</span>
                        <h2 class="title">Product Development</h2>
                        <p class="description">
                          Our process is holistic and covers the entire product development lifecycle, from ideation to deployment and support. We work closely with our clients to understand their needs and goals, and we use our expertise and experience to create products that are both innovative and user-friendly.
                        </p>
                        <p class="description">
                          If you are looking for a partner to help you build robust, scalable, and efficient software solutions, SaasLay is the perfect choice. We have the expertise, experience, and passion to help you succeed.
                        </p>
                      </div>
                      <ul class="list-style--1 mt--30">
                        <li>If you're looking for a partner to help you bring your product to market, SaasLay is the perfect choice. We have the expertise, experience, and passion to help you succeed.</li>
                        <li>If you're looking for a partner to help you bring your product to market, SaasLay is the perfect choice. We have the expertise, experience, and passion to help you succeed.</li>
                        <li>Latest Technologies: Utilization of the most recent tech and industry best practices during development ensures high-performing and secure products.</li>
                        <li>Rigorous Testing: Thorough testing procedures ensure the quality, performance, and security of the product.</li>
                        <li>Deployment Support: Assistance in deploying the product, either on-premises or in the cloud.</li>
                        <li>Expertise & Passion: SaasLay's extensive experience and passionate team guarantee the success of your product development project.</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12 mt_md--30 mt_sm--30">
                    <div class="thumb position-relative">
                      <img
                        class="w-100"
                        src="/assets/images/service/service-02.png"
                        alt="Service Images"
                      />
                    </div>
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
import Footer from "../Footer.vue";

export default {
  name: "ServiceDetails",
  components: {
    Footer,
  },
  data() {
    return {
      isOpen: false,
      serviceList: [
        {
          title: "Software Architecture",
          description: "",
          path: "",
        },
        {
          title: "Digital transformation consulting ",
          description: " ",
          path: "",
        },
        {
          title: "Marketing & Reporting",
          description: "",
          path: "",
        },
        {
          title: "IT Project Management",
          description: "",
          path: "",
        },
        {
          title: "Cloud Computing and Infrastructure Optimization",
          description: "",
          path: "",
        },
        {
          title: "Cybersecurity and Data Privacy",
          description: "",
          path: "",
        },
      ],
      activeService: { title: "", description: "" },
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
  mounted() {
    this.activeService = this.serviceList.filter((service) => {
      return service.title == this.$route.query.title;
    })[0];
  },
};
</script>

