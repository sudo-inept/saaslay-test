<template>
  <div>
    <Breadcrumb title="Service" />

    <div class="service-area ptb--120 bg_color--5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center mb--30">
              <span class="subtitle">Our Marketing</span>
              <h2>Digital Marketing</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
        <div class="row service-main-wrapper">
          <div
            class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
            v-for="(val, i) in serviceList"
            :key="i"
          >
            <router-link :to="{path:'/service-details',query:{title:val.title}}">
              <div class="service service__style--2 text-left">
                <div class="icon"><DocumentationIcon /></div>
                <div class="content">
                  <h3 class="title">{{ val.title }}</h3>
                  <p>{{ val.description }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="service-area ptb--120 bg_color--1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center mb--30">
              <span class="subtitle">Our Marketing</span>
              <h2>Digital Marketing</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
        <div class="row service-main-wrapper">
          <div
            class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
            v-for="(val, i) in serviceList"
            :key="i"
          >
            <router-link :to="{path:'/service-details',query:{title:val.title}}">
              <div class="service service__style--2 text-left">
                <div class="icon"><DocumentationIcon /></div>
                <div class="content">
                  <h3 class="title">{{ val.title }}</h3>
                  <p>{{ val.description }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
import Footer from "../components/Footer.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";

export default {
  name: "Service",

  components: {
    Breadcrumb,
    Footer,
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
          title: "Software development consulting",
          description:
            "We assess needs, design custom strategies, assist implementation, and provide ongoing support for your business success.",
        },
        {
          title: "Digital transformation consulting",
          description:
            "Tailored digital strategy, technology planning, process automation, cultural transformation, data insights, and customer experience enhancement ",
        },
        {
          title: "Cloud and Infrastructure Optimization",
          description:
            "Comprehensive infrastructure analysis, tailored cloud strategy, seamless migration/deployment, and optimization for performance and cost",
        },
        {
          title: "Cybersecurity and Data Privacy",
          description:
            "We assess threats, develop tailored security strategies, implement robust architectures, manage incidents, and train for cyber awareness.",

        },
        {
          title: "IT Project Management",
          description:
            "Collaborative project definition, meticulous planning, resource & risk management, effective communication, and stringent quality assurance",

        },
        {
          title: "Product Development",
          description:
            "A holistic approach covering product lifecycle. We tailor innovative, user-friendly solutions to meet client needs and goals",
        }
      ]
    };
  },
};
</script>

