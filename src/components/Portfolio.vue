<template>
    <div class="portfolio-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Our project</span>
              <h2 class="title">{{ title }}</h2>
              <p class="description" v-html="description"></p>
            </div>
          </div>
        </div>
        <div class="row mt--30">
          <div
            class="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
            v-for="(item, index) in portfolioList"
            :key="index"
          >
            <div class="im_portfolio">
              <div class="thumbnail_inner">
                <div class="thumbnail">
                  <router-link :to="item.path">
                    <img v-bind:src="item.image" alt="React Creative Agency" />
                  </router-link>
                </div>
              </div>
              <div class="content">
                <div class="inner">
                  <div class="portfolio_heading">
                    <div class="category_list">
                      <router-link :to="item.path">{{ item.category }}</router-link>
                    </div>
                    <h4 class="title">
                      <router-link :to="item.path">{{ item.title }}</router-link>
                    </h4>
                  </div>
                  <div class="portfolio_hover">
                    <p class="">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <router-link class="transparent_link" :to="item.path"></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
  name: "Portfolio",
  data() {
    return {
      title: "Some of our recent products",
      description:
        "Tech-driven innovation firm, committed to empowering businesses with quality solutions",
      portfolioList: [
        {
          image: "/assets/images/portfolio/portfolio-8.webp",
          category: "Application",
          title: "SlayHub",
          description: "Bridging Zendesk and Azure/GitHub for efficient tracking & superior customer service",
          path: "/slayhub",
        },
        {
          image: "/assets/images/portfolio/portfolio-9.jpg",
          category: "Application",
          title: "KnowL",
          description: "Created cloud-based Knowledge Base for a top HRMS provider, enhancing product understanding",
          path: "/knowl",
        },
        {
          image: "/assets/images/portfolio/portfolio-10.jpg",
          category: "Application",
          title: "LoopO",
          description: "Chrome extension uses ChatGPT for crafting engaging, tailored LinkedIn comments/posts.",
          path: "/loopo",
        },
        {
          image: "/assets/images/portfolio/portfolio-10.png",
          category: "Web-Platform",
          title: "Benchmark",
          description: "Navigate the AI Revolution: Find the Perfect Software with Ease.Making AI Software Selection Simple, Efficient, and Reliable.",
          path: "/benchmark",
        },
      ],
    };
  },

};
</script>
