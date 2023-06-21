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
                  <router-link to="/portfolio-details">
                    <img v-bind:src="item.image" alt="React Creative Agency" />
                  </router-link>
                </div>
              </div>
              <div class="content">
                <div class="inner">
                  <div class="portfolio_heading">
                    <div class="category_list">
                      <router-link :to="'/portfolio-details'">{{ item.category }}</router-link>
                    </div>
                    <h4 class="title">
                      <router-link :to="'/portfolio-details'">{{ item.title }}</router-link>
                    </h4>
                  </div>
                  <div class="portfolio_hover">
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <router-link class="transparent_link" :to="'/portfolio-details'"></router-link>
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
      title: "Some of our Recent Works",
      description:
        "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
      portfolioList: [
        {
          image: "/assets/images/portfolio/portfolio-8.jpg",
          category: "Application",
          title: "SlayHub",
          description: "SlayHub helps your customer facing teams of Zendesk to connect with your product repositories of Azure DevOps or GitHub. This helps your avoid any enhance tracking the inflow of requests, issues or bugs thus helping you serve your customers better.",
        },
        {
          image: "/assets/images/portfolio/portfolio-9.jpg",
          category: "Application",
          title: "KnowL",
          description: "Built a cloud-based Custom Knowledge Base solution for a leading HRMS Solution provider to help their customers understand and leverage their product offerings.",
        },
        {
          image: "/assets/images/portfolio/portfolio-10.jpg",
          category: "Application",
          title: "LoopO",
          description: "As a chrome extension it helps users leverage the power of ChatGPT to create engaging and tailored comments/posts for LinkedIn effortlessly.",
        },
      ],
    };
  },
};
</script>
