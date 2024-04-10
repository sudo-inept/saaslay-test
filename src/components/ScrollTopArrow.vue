<template>
  <button v-if="isVisible" @click="scrollToTop" class="scroll-to-top">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 100; // Show button after 100px scroll
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #343333;
  border: none;
  padding: 10px;
  border-radius: 999px;
  box-shadow: darkgray;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.scroll-to-top:hover {
  opacity: 1;
}

.fas.fa-arrow-up {
  font-size: 20px;
}
</style>
