<template>
    <div>
      <Breadcrumb title="Blog List" />

      <div class="rn-blog-area ptb--120 bg_color--1">
          <div class="container">
              <BlogList />
          </div>
      </div>

      <div className="backto-top">
        <ScrollTopArrow />
      </div>

      <Footer />

    </div>
</template>

  
<script>
import Breadcrumb from './Breadcrumb.vue';
import BlogContent from './BlogContent';
import BlogList from './BlogList.vue';
import Footer from './Footer.vue';
import ScrollTopArrow from './ScrollTopArrow.vue';

export default {
  components : {
    Breadcrumb,
    BlogContent,
    BlogList,
    Footer,
    ScrollTopArrow
  }
}
</script>
  