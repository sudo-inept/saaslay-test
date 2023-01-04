<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle">{{ subtitle }}</span>
            <h2 class="title">{{ title }}</h2>
            <p class="description" v-html="description"></p>
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-lg-12 col-12 mt--30">
          <div class="row service-main-wrapper">
            <div
              class="col-lg-4 col-md-6 col-sm-6 col-12"
              v-for="(service, i) in serviceList"
              :key="i"
            >
              <router-link>
                <div class="service service__style--2 text-left">
                  <div class="icon">
                    {{ service.icon }}
                  </div>
                  <div class="content">
                    <h3 class="title">{{ service.title }}</h3>
                    <p>{{ service.description }}</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
  name: "ServiceTwo",
  data() {
    return {
      title: "Services provide for you.",
      subtitle: "What we can do for you",
      description:
        "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.",
      serviceList: [
        {
          icon: "FiCast",
          title: "Business Stratagy",
          description:
            "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.",
        },
        {
          icon: "FiLayers",
          title: "Website Development",
          description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
          icon: "FiUsers",
          title: "Marketing & Reporting",
          description:
            "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.",
        },
        {
          icon: "FiMonitor",
          title: "Mobile Development",
          description:
            "Desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          icon: "FiMail",
          title: "Email Marketing",
          description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
        },
        {
          icon: "FiCopy",
          title: "Copywriting",
          description:
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for.",
        },
      ],
    };
  },
};
</script>
  