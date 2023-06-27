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
                  <DocumentationIcon />
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
  import DocumentationIcon from "./icons/IconDocumentation.vue";
  
  export default {
    components: {
    DocumentationIcon,
  },
    data() {
      return {
        title: 'Our Approach ',
        description: 'Utilizing the newest tech & best practices, we provide holistic services—from concept to deployment—for business growth & efficiency. Our track record boasts satisfied clients with enhanced businesses due to our custom-tailored solutions. We specialize in targeted growth strategies for each unique business.',
        description2: '',
        description3: '',
        description4: '',
        description5: '',
      };
    },

  };
  </script>