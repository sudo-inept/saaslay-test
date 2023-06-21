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
            title: "SlayHub",
            description:
              "SlayHub helps your customer facing teams of Zendesk to connect with your product repositories of Azure DevOps or GitHub. This helps your avoid any enhance tracking the inflow of requests, issues or bugs thus helping you serve your customers better.",
          },
          {
            icon: "FiCast",
            title: "KnowL",
            description:
              "Passages there are many variations variations of of Lorem Ipsum available, but the majority have suffered.",
          },
          {
            icon: "FiMap",
            title: "App Development",
            description:
              "Variations There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          },
        ],
      };
    },
  };
  </script>
  