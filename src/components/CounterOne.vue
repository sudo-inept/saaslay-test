<template>
    <div class="row mt--30">
      <div
        v-for="(value, index) in Data"
        :key="index"
        class="im_single_counterup col-lg-3 col-md-4 col-sm-6 col-12"
      >
        <div class="im_counterup">
          <div class="inner">
            <div class="icon">
              <component :is="value.icon" />
            </div>
            <h2 class="counter">
              <CountUp :end="didViewCountUp ? value.countNum : 0" />
            </h2>
            <p class="description">{{ value.countTitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CountUp from 'react-countup';
  
  export default {
    name: 'CounterOne',
    components: {
      CountUp,
      VisibilitySensor,
      FiHeart,
      FiClock,
      FiCheckCircle,
      FiAward,
    },
    data() {
      return {
        didViewCountUp: false,
        Data: [
          {
            icon: 'FiHeart',
            countNum: 199,
            countTitle: 'Staticfied Customers',
          },
          {
            icon: 'FiClock',
            countNum: 575,
            countTitle: 'Days Of Operation',
          },
          {
            icon: 'FiCheckCircle',
            countNum: 49,
            countTitle: 'Complete Project',
          },
          {
            icon: 'FiAward',
            countNum: 55,
            countTitle: 'Win Awards',
          },
        ],
      };
    },
    methods: {
      onVisibilityChange(isVisible) {
        if (isVisible) {
          this.didViewCountUp = true;
        }
      },
    },
  };
  </script>
  