<template>
  <!-- <div class="row">
    <div class="col-lg-2">
      <div class="row align-items-center">

        <div class="col-lg-6">
          <div class="rn-testimonial-content text-left">
                                            <div class="inner">
                                                <p>Jogn Due The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                            </div>
                                            <div class="author-info">
                                                <h6><span>Jogn Due </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                            </div>
                                        </div>
        </div>

        <div class="col-lg-6 mt_md--40 mt_sm--40">
          <div class="testimonial-thumb-wrapper">
            <div class="testimonial-thumbnai"   v-for="(testimonial, index) in testimonials" :key="index" @click="currentTab = index">
              <div class="thumb">{{ testimonial.name }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div> -->
  <div class="row">
                    <div class="col-lg-12">
                        <Tabs>
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <TabPanel>
                                        <div class="rn-testimonial-content text-left">
                                            <div class="inner">
                                                <p>Jogn Due The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                            </div>
                                            <div class="author-info">
                                                <h6><span>Jogn Due </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                            </div>
                                        </div>
                                    </TabPanel>

                                </div>
                                <div class="col-lg-6 mt_md--40 mt_sm--40">
                                    <TabList class="testimonial-thumb-wrapper">
                                        <Tab>
                                            <div class="testimonial-thumbnai">
                                                <div class="thumb">
                                                    <img src="/assets/images/client/testimonial-1.jpg" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                      
                                    </TabList>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0,
      testimonials: [
        { name: "Jogn Due", title: "COO, AMERIMAR ENTERPRISES, INC.", text: "John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original." },
        { name: "Fatima Asrafy", title: "COO, AMERIMAR ENTERPRISES, INC.", text: "Fatima Asrafy standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original." },
        { name: "Jannin Jow", title: "COO, AMERIMAR ENTERPRISES, INC.", text: "Jannin Jow The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original." }
      ]
    };
  }
};
</script>
