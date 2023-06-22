<template>
    <div class="row row--25">
      <div
        class="col-lg-4 col-md-6 col-sm-6 col-12"
        v-for="(service, i) in serviceList"
        :key="i"
      >
        <div class="service service__style--1">
          <div class="icon">
            {{ service.icon }}
          </div>
          <div class="content">
            <h4 class="title">{{ service.title }}</h4>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ServiceOne",
    data() {
      return {
        serviceList: [
          {
            icon: "FiActivity",
            title: "Products",
            description:
              "SaasLay offers a range of innovative and scalable SaaS products that help businesses streamline operations, enhance productivity, and drive growth.",
          },
          {
            icon: "FiCast",
            title: "Product Development",
            description:
              "Our holistic process spans product lifecycle—from ideation to deployment. We understand client needs, creating innovative, user-friendly products. ",
          },
          {
            icon: "FiMap",
            title: "Technology Consulting",
            description:
              " SaasLay's tech consulting helps businesses navigate complexities for growth & efficiency. We offer tailored strategic guidance & practical solutions.",
          },
        ],
      };
    },
  };
  </script>
  