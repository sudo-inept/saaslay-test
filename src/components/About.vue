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
                <div class="purchase-btn">
                  <router-link class="btn-transparent" to="/">PURCHASE IMROZ</router-link>
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
        title: 'Refreshingly Unique Company About.',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        description2: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences',
      };
    },

  };
  </script>