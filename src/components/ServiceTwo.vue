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
            v-for="(val, i) in serviceList"
            :key="i"
          >
            <a href="/service-details">
              <div class="service service__style--2 text-left">
                <div class="icon">{{ val.icon }}</div>
                <div class="content">
                  <h3 class="title">{{ val.title }}</h3>
                  <p style="overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;">{{ val.description }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconTooling from './icons/IconTooling.vue';
import IconEcosystem from './icons/IconEcosystem.vue';
import IconSupport from './icons/IconSupport.vue';

export default {
  name: "ServiceTwo",
  components : {
    IconTooling,
    IconEcosystem,
    IconSupport
  },
  data() {
    return {
      title: "Our products and services",
      description:
        "SaasLay is a technology company that is passionate about using technology to drive innovation and empower businesses. We have years of experience and a team of dedicated professionals who are experts in product development, SaaS products, and technology consulting. We are committed to providing our clients with the highest quality services and solutions that help them achieve their business goals",
      subtitle: "What we can do for you",
      serviceList: [
        {
          icon: "IconSupport",
          title: "Software Architecture",
          description:
            "SaasLay is your one-stop shop for software architecture and development consulting. We help you build the software you need to succeed, from ideation to deployment. Our expert consultants have deep industry knowledge and technical expertise to guide you through the entire process, ensuring that your systems are designed and implemented to meet your unique business needs. ",
          path: ""
        },
        {
          icon: "IconSupport",
          title: "Digital transformation consulting ",
          description:
            "SaasLay is your digital transformation partner. We help you harness the power of technology to transform your business and achieve your goals. Our expert consultants have a deep understanding of the latest technologies and trends, and we work with you to develop a customized transformation plan that meets your specific needs.  ",
          path: ""
        },
        {
          icon: "IconSupport",
          title: "Marketing & Reporting",
          description:
            "SaasLay is your digital transformation partner. We help you harness the power of technology to transform your business and achieve your goals. Our expert consultants have a deep understanding of the latest technologies and trends, and we work with you to develop a customized transformation plan that meets your specific needs.",
          path: ""
        },
        {
          icon: "IconSupport",
          title: "IT Project Management",
          description:
            "SaasLay is a trusted partner for IT project management. We help businesses of all sizes successfully plan, execute, and deliver IT projects on time, within budget, and to the highest quality standards. Our experienced project managers combine technical expertise with proven project management methodologies to drive successful outcomes for your organization. ",
          path: ""

        },
        {
          icon: "IconSupport",
          title: "Cloud Computing and Infrastructure Optimization",
          description:
            "SaasLay is a trusted partner for cloud computing and infrastructure optimization. We help businesses of all sizes leverage the power of the cloud to improve scalability, flexibility, and cost-efficiency. Our expert consultants use their deep expertise in cloud technologies and infrastructure management to guide you through the process of optimizing your infrastructure for maximum performance and ROI. ",
          path: ""

        },
        {
          icon: "IconSupport",
          title: "Cybersecurity and Data Privacy",
          description:
            "SaasLay is your trusted partner for cybersecurity and data privacy. In today's digital world, protecting your sensitive data and systems is more important than ever. We help businesses of all sizes safeguard their data and systems from evolving threats by providing comprehensive cybersecurity solutions that meet their specific needs and requirements. Contact us today to learn more. ",
          path: ""

        }
      ]
    };
  }
};
</script>