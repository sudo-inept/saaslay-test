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
                  <li><router-link :to="{path:'/service-details',query:{title:'Software development consulting'}}">Software development consulting</router-link></li>
                  <li><router-link :to="{path:'/service-details',query:{title:'Digital transformation consulting'}}">Digital transformation consulting</router-link></li>
                  <li><router-link :to="{path:'/service-details',query:{title:'Cloud and Infrastructure Optimization'}}">Cloud and Infrastructure Optimization</router-link></li>
                  <li><router-link :to="{path:'/service-details',query:{title:'Cybersecurity and Data Privacy'}}">Cybersecurity and Data Privacy</router-link></li>
                  <li><router-link :to="{path:'/service-details',query:{title:'IT Project Management'}}">IT Project Management</router-link></li>
                  <li><router-link :to="{path:'/service-details',query:{title:'Product Development'}}">Product Development</router-link></li>
                  <!-- <li><router-link to="/service-detail">Service Details</router-link></li> -->
                </ul>
              </li>
              <li><router-link to="/about">About</router-link></li>
              <!-- <li class="has-droupdown"><router-link to="/blog">Pages</router-link>
                <ul class="submenu">
                  <li><router-link to="/blog">Blog List</router-link></li>
                  <li><router-link to="/blog-details">Blog Details</router-link></li>
                </ul>
              </li> -->
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </nav>
          <div class="header-btn">
            <a class="btn-default btn-border btn-signin">Sign In</a>
          </div>
          <div class="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
          <span class="mmenutrigger text-white" @click="menuTrigger">
            <img src="/assets/images/logo/menu.png" alt="Digital Agency" />
             </span>
          </div>
          <div class="close-menu d-block d-lg-none">
              <span class="closeTrigger" @click="CLoseMenuTrigger"><img src="/assets/images/logo/menu.png" alt="Digital Agency" /></span>
          </div>
        </div>
      </div>
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
          return '/assets/images/logo/SaasLay.png';
        } else if (this.logo === 'dark') {
          return '/assets/images/logo/SaasLay.png';
        } else if (this.logo === 'symbol-dark') {
          return '/assets/images/logo/SaasLay.png';
        } else if (this.logo === 'symbol-light') {
          return '/assets/images/logo/SaasLay.png';
        } else {
          return '/assets/images/logo/SaasLay.png';
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