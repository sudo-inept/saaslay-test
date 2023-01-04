<template>
   <div>
     <div class="rn-page-title-area pt--120 pb--190 pt_md--100 pb_md--100 pt_sm--100 pb_sm--100 bg_image bg_image--4"  data-black-overlay="5">
       <div class="container">
         <div class="row">
           <div class="col-lg-12">
             <div class="rn-page-title text-center pt--100 pt_md--50 pt_sm--100">
               <h2 class="title theme-gradient">Website Development</h2>
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
                         <h2 class="title">Providing Service</h2>
                         <p class="description">But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                         <p class="description">If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing</p>
                       </div>
                       <ul class="service-details-list">
                         <li>
                           <!-- <fi-check /> -->
                           <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
                         </li>
                         <li>
                           <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
                           </li>
                        <li>
                          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
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

