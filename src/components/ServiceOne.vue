<template>
    <div class="row row--25">
      <div
        class="col-lg-4 col-md-6 col-sm-6 col-12"
        v-for="(service, i) in serviceList"
        :key="i"
      >
        <div class="service service__style--1">
          <div class="icon">
            <component :is="service.icon" />
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
  import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
  export default {
    name: "ServiceOne",
    components: {
    DocumentationIcon,
    ToolingIcon,
    EcosystemIcon,
    CommunityIcon,
    SupportIcon
  },
    data() {
      return {
        serviceList: [
          {
            icon: 'DocumentationIcon',
            title: "Products",
            description:
              "SaasLay offers a range of innovative and scalable SaaS products that help businesses streamline operations, enhance productivity, and drive growth.",
          },
          {
            icon: 'EcosystemIcon',
            title: "Product Development",
            description:
              "Our holistic process spans product lifecycle—from ideation to deployment. We understand client needs, creating innovative, user-friendly products. ",
          },
          {
            icon: 'SupportIcon',
            title: "Technology Consulting",
            description:
              " SaasLay's tech consulting helps businesses navigate complexities for growth & efficiency. We offer tailored strategic guidance & practical solutions.",
          },
        ],
      };
    },
  };
  </script>
  