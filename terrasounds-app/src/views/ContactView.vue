<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  contactMethod: 'email',
  message: ''
})

const formSubmitted = ref(false)
const formError = ref(false)

const contactMethods = [
  { value: 'call', label: 'Call/SMS me (I allow Terra Sounds to Call and SMS me)' },
  { value: 'email', label: 'Email me (I allow Terra Sounds to Email me)' }
]

const contactInfo = {
  phone: '+1.847.737.1850',
  customerEmail: 'customerservice@terrasounds.com',
  generalEmail: 'info@terrasounds.com',
  address: ['111 North Wabash Ave. #1305', 'Chicago, IL 60602']
}

const socialLinks = [
  { icon: 'mdi-facebook', url: 'https://facebook.com/terrasounds', label: 'Facebook' },
  { icon: 'mdi-instagram', url: 'https://instagram.com/terrasounds', label: 'Instagram' },
  { icon: 'mdi-youtube', url: 'https://youtube.com/terrasounds', label: 'YouTube' }
]

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const submitForm = async () => {
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...form.value
      })
    })
    formSubmitted.value = true
    formError.value = false
  } catch (error) {
    formError.value = true
  }
}
</script>

<template>
  <div>
    <!-- Hero Banner -->
    <v-img
      src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600"
      height="250"
      cover
      class="d-flex align-center"
    >
      <v-container>
        <h1 class="text-h2 text-md-h1 font-rock-salt text-white text-center" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.7);">
          Contact Us
        </h1>
      </v-container>
    </v-img>

    <v-container class="py-12">
      <v-row>
        <!-- Contact Form -->
        <v-col cols="12" md="7">
          <p class="text-body-1 mb-6">
            To start, please tell us about your interests and goals in music, arts, and languages by filling out the form below. Our program coordinators will be glad to match you with a great instructor and work out a convenient schedule for you!
          </p>

          <!-- Success Message -->
          <v-alert v-if="formSubmitted" type="success" class="mb-6">
            Thank you for contacting us! We'll be in touch soon.
          </v-alert>

          <!-- Error Message -->
          <v-alert v-if="formError" type="error" class="mb-6">
            There was an error submitting the form. Please try again or contact us directly.
          </v-alert>

          <!-- Netlify Form -->
          <v-card v-if="!formSubmitted" elevation="2" class="pa-6">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              @submit.prevent="submitForm"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p class="d-none">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              <v-text-field
                v-model="form.name"
                label="Name"
                name="name"
                required
                class="mb-4"
              />

              <v-text-field
                v-model="form.email"
                label="Email"
                name="email"
                type="email"
                required
                class="mb-4"
              />

              <v-text-field
                v-model="form.phone"
                label="Phone Number"
                name="phone"
                type="tel"
                required
                class="mb-4"
              />

              <v-radio-group
                v-model="form.contactMethod"
                label="What is the best way to reach you?"
                class="mb-4"
              >
                <v-radio
                  v-for="method in contactMethods"
                  :key="method.value"
                  :label="method.label"
                  :value="method.value"
                  name="contactMethod"
                />
              </v-radio-group>

              <v-textarea
                v-model="form.message"
                label="Message"
                name="message"
                hint="We offer a FREE 15-minute one-on-one video lesson! If you are interested, what could we cover? (e.g., 'I'd like my 7 year old daughter to try violin and drawing lessons. She's available on Mondays and Thursdays between 5-7pm.')"
                persistent-hint
                rows="5"
                class="mb-6"
              />

              <v-btn
                type="submit"
                color="primary"
                size="large"
                block
                class="text-none"
              >
                Submit
              </v-btn>
            </form>
          </v-card>
        </v-col>

        <!-- Contact Information -->
        <v-col cols="12" md="5">
          <v-card elevation="2" class="pa-6">
            <h2 class="text-h5 mb-4 font-rock-salt text-primary">Other Ways to Reach Us</h2>

            <v-list bg-color="transparent">
              <v-list-item prepend-icon="mdi-phone">
                <v-list-item-title>
                  <a :href="`tel:${contactInfo.phone}`" class="text-decoration-none text-primary">
                    {{ contactInfo.phone }}
                  </a>
                </v-list-item-title>
              </v-list-item>

              <v-list-item prepend-icon="mdi-email">
                <v-list-item-title>Customer Services</v-list-item-title>
                <v-list-item-subtitle>
                  <a :href="`mailto:${contactInfo.customerEmail}`" class="text-decoration-none text-primary">
                    {{ contactInfo.customerEmail }}
                  </a>
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item prepend-icon="mdi-email-outline">
                <v-list-item-title>General Inquiries</v-list-item-title>
                <v-list-item-subtitle>
                  <a :href="`mailto:${contactInfo.generalEmail}`" class="text-decoration-none text-primary">
                    {{ contactInfo.generalEmail }}
                  </a>
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item prepend-icon="mdi-map-marker">
                <v-list-item-title>Mailing Address</v-list-item-title>
                <v-list-item-subtitle>
                  <div v-for="line in contactInfo.address" :key="line">{{ line }}</div>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>

            <v-divider class="my-4" />

            <h3 class="text-h6 mb-3">Follow Us</h3>
            <div>
              <v-btn
                v-for="social in socialLinks"
                :key="social.label"
                :href="social.url"
                target="_blank"
                :aria-label="social.label"
                icon
                variant="text"
                color="primary"
                class="mr-2"
              >
                <v-icon :icon="social.icon" />
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.font-rock-salt {
  font-family: 'Rock Salt', cursive !important;
}

.d-none {
  display: none;
}
</style>
