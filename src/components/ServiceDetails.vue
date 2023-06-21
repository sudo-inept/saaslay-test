<template>
   <div>
     <div class="rn-page-title-area pt--120 pb--190 pt_md--100 pb_md--100 pt_sm--100 pb_sm--100 bg_image bg_image--4"  data-black-overlay="5">
       <div class="container">
         <div class="row">
           <div class="col-lg-12">
             <div class="rn-page-title text-center pt--100 pt_md--50 pt_sm--100">
               <h2 class="title theme-gradient">Product Development</h2>
               <p>Fresh From The Press Discription</p>
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
                 <div class="row row--35 sercice-details-content align-items-center">
                   <div class="col-lg-6 col-12">
                     <div class="thumb position-relative">
                       <img class="w-100" src="/assets/images/service/service-01.png" alt="Service Images"/>
                       <modal-video channel='youtube' :isOpen="isOpen" videoId='ZOoVOfieAF8' @close="closeModal" />
                       <button class="video-popup" @click="openModal"><span class="play-icon"></span></button>
                     </div>
                   </div>
                   <div class="col-lg-6 col-12">
                     <div class="details mt_md--30 mt_sm--30">
                       <div class="section-title">
                         <span class="subtitle">Our service</span>
                         <h2 class="title">Product Development</h2>
                         <p class="description">Our process is holistic and covers the entire product development lifecycle, from ideation to deployment and support. We work closely with our clients to understand their needs and goals, and we use our expertise and experience to create products that are both innovative and user-friendly.</p>
                         <p class="description">Ready to take your business to the next level? Contact us today to learn how SaasLay can help you achieve your business goals.</p>
                       </div>
                       <ul class="service-details-list">
                         <li>
                           <!-- <fi-check /> -->
                           <span>Discovery and Planning: We collaborate with you to understand your vision, goals, and target market. We conduct market research and create a comprehensive project plan to ensure alignment and success.</span>
                         </li>
                         <li>
                           <span>Design and Prototyping: Our talented design team translates your ideas into visually appealing and user-friendly interfaces. We create interactive prototypes to gather feedback and iterate on the design.</span>
                           </li>
                        <li>
                          <span>Development and Testing: Our experienced developers bring the design to life, using the latest technologies and best practices. We follow rigorous testing procedures to ensure quality, performance, and security</span>
                        </li>
                        <li>
                          <span>Deployment and Support: We assist with the deployment of the product, whether it's on-premises or in the cloud. We also provide ongoing support and maintenance to ensure your product's long-term success.</span>
                        </li>
                        <li>
                          <span>If you're looking for a partner to help you bring your product to market, SaasLay is the perfect choice. We have the expertise, experience, and passion to help you succeed.</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
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
    <Footer />
  </div>
</template>


<script>
import Footer from "../components/Footer.vue";

export default {
  name: "ServiceDetails",
  components: {
    Footer,
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    }
  }
}
</script>

