<template>
    <footer class="footer-area footer-style-01 bg_color--6">
      <!-- Start Call to Action Area  -->
      <div class="im-call-to-action-area ptb--70 im-separator">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8 col-xl-6 col-md-12 col-sm-12 col-12">
              <div class="inner">
                <h2 class="text-white mb--0">Enough Talk, Let's Build Something Together</h2>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 offset-xl-2 col-md-12 col-sm-12 col-12">
              <div class="call-to-cation-tbn text-left text-lg-right mt_md--20 mt_sm--20">
                <a class="btn-default btn-large btn-border btn-opacity" href="#button">Read Out Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Call to Action Area  -->
  
      <!-- Start Footer Area  -->
      <div class="footer-wrapper ptb--70">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="ft-text">
                <div class="logo">
                  <router-link to="/">
                    <img src="/assets/images/logo/SaasLay.png" alt="SaasLay" />
                  </router-link>
                </div>
                <p>Copyright © 2022 <router-link to="/">SaasLay</router-link>. We redefine what's possible. All rights reserved. </p>
              </div>
            </div>
            
            <div class="col-lg-2 col-xl-2 offset-xl-1 col-md-6 col-sm-6 col-12 mt_mobile--40">
              <div class="footer-link">
                <h4>Quick Link</h4>
                <ul class="ft-list">
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/about">About</router-link></li>
                  <li><router-link to="/service">Our Services</router-link></li>
                  <li><router-link to="/contact">Contact</router-link></li>
                </ul>
              </div>
            </div>
  
            <div class="col-lg-2 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                <div class="footer-link">
                    <h4>Company</h4>
                    <ul class="ft-link">
                        <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/about">About</router-link></li>
                  <li><router-link to="/service">Our Services</router-link></li>
                  <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                <div class="footer-link">
                    <h4>Say Hello</h4>
                    <ul class="ft-link">
                        <li>Email: <a href="mailto:sales@saaslay.com">sales@saaslay.com</a></li>
                        <li>Email: <a href="mailto:sales@saaslay.com">sales@saaslay.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
    <!-- End Footer Area  -->
  </footer>
</template>

<script>

export default {
  name: "Footer",
};
</script>

  