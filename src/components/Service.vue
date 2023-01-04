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
            <a href="/service-details">
              <div class="service service__style--2 text-left">
                <div class="icon"><DocumentationIcon /></div>
                <div class="content">
                  <h3 class="title">{{ val.title }}</h3>
                  <p>{{ val.description }}</p>
                </div>
              </div>
            </a>
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
            <a href="/service-details">
              <div class="service service__style--2 text-left">
                <div class="icon"><DocumentationIcon /></div>
                <div class="content">
                  <h3 class="title">{{ val.title }}</h3>
                  <p>{{ val.description }}</p>
                </div>
              </div>
            </a>
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
          icon: DocumentationIcon,
          title: "Business Stratagy",
          description:
            "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.",
        },
        {
          icon: DocumentationIcon,
          title: "Website Development",
          description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
          icon: DocumentationIcon,
          title: "Marketing & Reporting",
          description:
            "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.",
        },
        {
          icon: DocumentationIcon,
          title: "Mobile Development",
          description:
            "Desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          icon: DocumentationIcon,
          title: "Email Marketing",
          description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
        },
        {
          icon: DocumentationIcon,
          title: "Copywriting",
          description:
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for.",
        },
      ],
    };
  },
};
</script>

