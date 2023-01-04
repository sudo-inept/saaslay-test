<template>
  <div>


    <!-- Start Breadcrump Area -->
    <div class="rn-page-title-area pt--120 pb--190 bg_image bg_image--15" data-black-overlay="6">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="rn-page-title text-center pt--100">
              <h2 class="title theme-gradient">Contact With Us</h2>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Breadcrump Area -->

    <!-- Start Contact Top Area -->
    <div class="rn-contact-top-area ptb--120 bg_color--5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title mb--30 text-center">
              <span class="subtitle">Our contact address</span>
              <h2 class="title">Quick Contact Address</h2>
              <p class="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Start Single Address -->
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="rn-address">
              <div class="icon">
                <!-- <fi-headphones /> -->
              </div>
              <div class="inner">
                <h4 class="title">Contact Phone Number</h4>
                <p>
                  <a href="tel:+444 555 666 777">+444 555 666 777</a>
                </p>
                <p>
                  <a href="tel:+222 222 222 333">+222 222 222 333</a>
                </p>
              </div>
            </div>
          </div>
          <!-- End Single Address -->

          <!-- Start Single Address -->
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="rn-address">
              <div class="icon">
                <!-- <fi-mail /> -->
              </div>
              <div class="inner">
                <h4 class="title">Our Email Address</h4>
                <p>
                  <a href="mailto:admin@gmail.com">admin@gmail.com</a>
                </p>
                <p>
                  <a href="mailto:support@gmail.com">support@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <!-- End Single Address -->

          <!-- Start Single Address -->
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="rn-address">
              <div class="icon">
                <!-- <fi-map-pin /> -->
              </div>
              <div class="inner">
                <h4 class="title">Our Location</h4>
                <p>New York City</p>
              </div>
            </div>
          </div>
          <!-- End Single Address -->
        </div>
      </div>
    </div>
    <!-- End Contact Top Area -->

    <!-- Start Contact Map Area -->
    <div class="rn-contact-map-area rn-contact-map-area-2">
      <div class="google-map-area">
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-lg-12">
              <div class="google-map" id="googleMap">
                <!-- <google-map-react
                  :bootstrapURLKeys="{ key: 'AIzaSyDn3XtGZvh52aE0QrBzrQ6rQT6EgTmT_x4' }"
                  :defaultCenter="{ lat: 59.95, lng: 30.33 }"
                  :defaultZoom="11"
                >
                  <any-react-component
                    :lat="59.955413"
                    :lng="30.337844"
                    text="My Marker"
                  />
                </google-map-react> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Contact Map Area -->

    <!-- Start Contact Area -->
    <div class="rn-contact-area pb--120 bg_color--5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title mb--30 text-center">
              <h2 class="title">Get In Touch</h2>
              <p class="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="contact-two mt--30">
              <ContactTwo />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Contact Area -->
    <!-- ADD BRAND PART HERE -->

    <Footer />

    
  </div>
</template>

<script>
import ContactTwo from '../components/ContactTwo.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Contact',
  components: {
    Footer,
    ContactTwo
  },
  data() {
    return {
      center: {
        lat: 59.95,
        lng: 30.33,
      },
      zoom: 11,
    };
  },
};
</script>
