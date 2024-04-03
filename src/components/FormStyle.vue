<template>
    <div class="form-wrapper">
      <form @submit.prevent="sendEmail">
        <div class="rn-form-group">
          <input 
            type="text"
            name="fullname"
            placeholder="Your Name"
            required
          />
        </div>
  
        <div class="rn-form-group">
          <input 
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
  
        <div class="rn-form-group">
          <input 
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
          />
        </div>
  
        <div class="rn-form-group">
          <input 
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
        
        <div class="rn-form-group">
          <textarea 
            name="message"
            placeholder="Your Message"
            required
          >
          </textarea>
        </div>
  
        <div class="rn-form-group">
          <button class="btn-default" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
        </div> 
  
        <div class="rn-form-group">
          <p v-if="showResult" class="success-message">Your Message has been successfully sent. I will contact you soon.</p>
        </div> 
      </form>
    </div>
  </template>
  
<script>
  import emailjs from '@emailjs/browser';
  
  export default {
    data() {
      return {
        showResult: false
      }
    },
    methods: {
      async sendEmail(e) {
        try {
          await emailjs.sendForm(
            'service_p4x3hv8', 
            'template_jgfr42f', 
            e.target, 
            'user_jrfTH2e0Ely35ZCVFdT9S'
          )
          console.log('Email sent!')
          this.showResult = true
          e.target.reset()
          setTimeout(() => {
            this.showResult = false
          }, 5000)
        } catch (error) {
          console.log('Error:', error)
        }
      }
    }
  }
  </script>
  