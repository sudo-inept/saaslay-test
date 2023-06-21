<template>
    <header class="header-area header--fixed formobile-menu header--transparent" :class="color">
      <div class="header-wrapper" id="header-wrapper">
        <div class="header-left">
          <div class="logo">
            <a href="/">
              <img :src="logoUrl" alt="Digital Agency" />
            </a>
          </div>
        </div>
        <div class="header-right">
          <nav class="mainmenunav d-lg-block">
            <ul class="mainmenu">
              <li><router-link to="/">Home</router-link>
              </li>
              <li class="has-droupdown"><router-link to="/service">Service</router-link>
                <ul class="submenu">
                  <li><router-link to="/service">Service</router-link></li>
                  <li><router-link to="/service-details">Service Details</router-link></li>
                </ul>
              </li>
              <li><router-link to="/about">About</router-link></li>
              <li class="has-droupdown"><router-link to="/blog">Pages</router-link>
                <ul class="submenu">
                  <li><router-link to="/blog">Blog List</router-link></li>
                  <li><router-link to="/blog-details">Blog Details</router-link></li>
                </ul>
              </li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </nav>
          <div class="header-btn">
            <a class="btn-default btn-border btn-signin" @click="showSigninModal = true">Sign In</a>
          </div>
          <div class="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
          <span class="mmenutrigger text-white" @click="menuTrigger">
            <img src="../../public/assets/images/logo/menu.png" alt="Digital Agency" />
             </span>
          </div>
          <div class="close-menu d-block d-lg-none">
              <span class="closeTrigger" @click="CLoseMenuTrigger"><img src="../../public/assets/images/logo/menu.png" alt="Digital Agency" /></span>
          </div>
        </div>
      </div>
      <modal v-if="showSigninModal" @close="showSigninModal = false">
        <!-- Sign In Form Goes Here -->
      </modal>
    </header>
  </template>
  
  <script>
  import IconTool from './icons/IconTooling.vue';
  export default {
    name: 'Header',
    components : { IconTool },
    props: {
      logo: String,
      color: {
        type: String,
        default: 'default-color'
      }
    },
    data() {
      return {
        showSigninModal: false
      }
    },
    computed: {
      logoUrl() {
        if (this.logo === 'light') {
          return '../../public/assets/images/logo/SaasLay.png';
        } else if (this.logo === 'dark') {
          return '../../public/assets/images/logo/SaasLay.png';
        } else if (this.logo === 'symbol-dark') {
          return '../../public/assets/images/logo/SaasLay.png';
        } else if (this.logo === 'symbol-light') {
          return '../../public/assets/images/logo/SaasLay.png';
        } else {
          return '../../public/assets/images/logo/SaasLay.png';
        }
      }
    },
    methods: {
      menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
      },
      CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
      }
    },
    mounted() {
      const elements = document.querySelectorAll('.has-droupdown > a');
      for (const element of elements) {
        element.addEventListener('click', () => {
          element.parentElement.querySelector('.submenu').classList.toggle('active');
          element.classList.toggle('open');
        });
      }
    }
  }
  </script>