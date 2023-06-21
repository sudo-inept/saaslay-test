<template>
    <div class="about-wrapper">
      <div class="container">
        <div class="row row--35 align-items-center">
          <div class="col-lg-5 col-md-12">
            <div class="thumbnail">
              <img class="w-100" src="/assets/images/about/about-1.png" alt="About Images"/>
            </div>
          </div>
          <div class="col-lg-7 col-md-12">
            <div class="about-inner inner">
              <div class="section-title">
                <div class="icon">
                  <p>senbdivonc</p>
                </div>
                <h2 class="title">{{ title }}</h2>
                <p class="description">{{ description }}</p>
                <p class="description">{{ description2 }}</p>
                <p class="description">{{ description3 }}</p>
                <p class="description">{{ description4 }}</p>
                <p class="description">{{ description5 }}</p>
                <div class="purchase-btn">
                  <router-link class="btn-transparent" to="/">SAASLAY</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        title: 'Refreshingly Unique About SaasLay.',
        description: 'We help businesses thrive in the digital age with our expertise in product development, SaaS products, and technology consulting.',
        description2: 'We use the latest technologies and best practices to create solutions that help businesses grow and become more efficient.',
        description3: 'We provide comprehensive services that cover the entire product development lifecycle, from conceptualization to deployment.',
        description4: 'We have a proven track record of success, with satisfied clients who have seen their businesses grow and improve as a result of our services.',
        description5: 'We tailor our services to meet the specific needs and goals of each business.',
      };
    },

  };
  </script>