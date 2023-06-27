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
            <router-link :to="{path:'/service-details',query:{title:val.title}}">
              <div class="service service__style--2 text-left">
                <div class="icon"><component :is="val.icons" /></div>
                <div class="content">
                  <h3 class="title">{{ val.title }}</h3>
                  <p >{{ val.description }}</p>
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
        "SaasLay empowers businesses with innovative tech solutions. Our expert team is committed to achieving your goals with quality service.",
      subtitle: "What we can do for you",
      serviceList: [
        {
          icons: 'IconTooling',
          title: "Software development consulting",
          description:
            "We assess needs, design custom strategies, assist implementation, and provide ongoing support for your business success.",
          path: ""
        },
        {
          icons: 'IconEcosystem',
          title: "Digital transformation consulting",
          description:
            "Tailored digital strategy, technology planning, process automation, cultural transformation, data insights, and customer experience enhancement ",
          path: ""
        },
        {
          icons: 'IconSupport',
          title: "Cloud and Infrastructure Optimization",
          description:
            "Comprehensive infrastructure analysis, tailored cloud strategy, seamless migration/deployment, and optimization for performance and cost",
          path: ""
        },
        {
          icons: 'IconEcosystem',
          title: "Cybersecurity and Data Privacy",
          description:
            "We assess threats, develop tailored security strategies, implement robust architectures, manage incidents, and train for cyber awareness.",
          path: ""

        },
        {
          icons: 'IconTooling',
          title: "IT Project Management",
          description:
            "Collaborative project definition, meticulous planning, resource & risk management, effective communication, and stringent quality assurance",
          path: ""

        },
        {
          icons: 'IconSupport',
          title: "Product Development",
          description:
            "A holistic approach covering product lifecycle. We tailor innovative, user-friendly solutions to meet client needs and goals",
          path: ""

        }
      ]
    };
  }
};
</script>