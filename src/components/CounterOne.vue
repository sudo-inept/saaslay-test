<template>
   <div class="row mt--30">
                        <div class="im_single_counterup col-lg-3 col-md-4 col-sm-6 col-12" >
                            <div class="im_counterup">
                                <div class="inner">
                                    <div class="icon">
                                      <IconEcosystem/>
                                    </div>
                                    <h2 class="counter">
                                        199
                                    </h2>
                                    <p class="description">Statisfied Customers</p>
                                </div>
                            </div>
                        </div>
                        <div class="im_single_counterup col-lg-3 col-md-4 col-sm-6 col-12" >
                            <div class="im_counterup">
                                <div class="inner">
                                    <div class="icon">
                                      <IconEcosystem/>
                                    </div>
                                    <h2 class="counter">
                                        575
                                    </h2>
                                    <p class="description">Days Of Operation</p>
                                </div>
                            </div>
                        </div>
                        <div class="im_single_counterup col-lg-3 col-md-4 col-sm-6 col-12" >
                            <div class="im_counterup">
                                <div class="inner">
                                    <div class="icon">
                                      <IconEcosystem/>
                                    </div>
                                    <h2 class="counter">
                                        49
                                    </h2>
                                    <p class="description">Complete Project</p>
                                </div>
                            </div>
                        </div>
                        <div class="im_single_counterup col-lg-3 col-md-4 col-sm-6 col-12" >
                            <div class="im_counterup">
                                <div class="inner">
                                    <div class="icon">
                                      <IconEcosystem/>
                                    </div>
                                    <h2 class="counter">
                                       55
                                    </h2>
                                    <p class="description">Win Awards</p>
                                </div>
                            </div>
                        </div>
                </div>
</template>

<script>
import IconEcosystem from './icons/IconEcosystem.vue';
export default {
  components : IconEcosystem,
  data() {
    return {
      data: [
        {
          icon: 'fi-heart',
          countNum: 199,
          countTitle: 'Staticfied Customers',
        },
        {
          icon: 'fi-clock',
          countNum: 575,
          countTitle: 'Days Of Operation',
        },
        {
          icon: 'fi-check-circle',
          countNum: 49,
          countTitle: 'Complete Project',
        },
        {
          icon: 'fi-award',
          countNum: 55,
          countTitle: 'Win Awards',
        },
      ],
    };
  },

};
</script>
