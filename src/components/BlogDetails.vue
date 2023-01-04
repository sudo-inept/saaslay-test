<template>
    <div>
  
      <div class="rn-page-title-area pt--120 pb--190 bg_image bg_image--27" :data-black-overlay="blackOverlay">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="blog-single-page-title text-center pt--100">
                <h2 class="title theme-gradient">{{ pageTitle }}</h2>
                <ul class="blog-meta d-flex justify-content-center align-items-center">
                  <li>{{ date }}</li>
                  <li>{{ author }}</li>
                  <li>{{ comments }} Comments</li>
                  <li>Like</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="rn-blog-details pt--110 pb--70 bg_color--1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="inner-wrapper">
                <div class="inner">
                  <p>{{ body }}</p>
                  <div class="thumbnail">
                    <img :src="imageUrl" :alt="imageAlt" />
                  </div>
                  <p class="mt--40">{{ body }}</p>
                  <p>{{ body }}</p>
                  <blockquote>{{ quote }}</blockquote>
                  <p>{{ body }}</p>
                  <div class="blog-details-btn mt--40">
                    <modal-video ref="modalVideo" :channel="videoChannel" :video-id="videoId" />
                    <button class="rn-btn" @click="openModal">
                      <span>Play Video</span>
                    </button>
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
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'BlogDetails',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isOpen: false,
      pageTitle: 'Blog Details',
      headerTransparent: 'header--transparent',
      colorBlack: 'color--black',
      logoName: 'logo.png',
      blackOverlay: '7',
      date: 'May 18, 2021',
      author: 'Fatima Asrafi',
      comments: 15,
      body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.',
      imageUrl: '/assets/images/blog/bl-big-01.jpg',
      imageAlt: 'Blog Images',
      quote: 'Necessary, making this the first true generator on the Internet. It re are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedeed eedhumour, or randomised words which don\'t look even slightly believable.',
      videoChannel: 'youtube',
      videoId: '_ysd-zHamjk'
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
      this.$refs.modalVideo.openModal();
    }
  }
};
</script>
