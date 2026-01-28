<script setup>
import { ref } from 'vue'

const form = ref({
  referralName: '',
  referralPhone: '',
  referralEmail: '',
  message: '',
  yourName: '',
  yourPhone: '',
  yourEmail: ''
})

const formSubmitted = ref(false)
const formError = ref(false)

const terms = [
  'Referrals must be new clients from a household other than yours',
  'Referral credit is non-transferable and cannot be combined with other offers',
  'One referral bonus per household',
  'Other restrictions may apply'
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
        'form-name': 'referral',
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
      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600"
      height="300"
      cover
      class="d-flex align-center"
    >
      <v-container>
        <h1 class="text-h3 text-md-h2 font-rock-salt text-white text-center" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.7);">
          Terra $50/$50 Student Referral Program
        </h1>
      </v-container>
    </v-img>

    <!-- Program Description -->
    <v-sheet color="primary" class="py-8">
      <v-container>
        <p class="text-h5 text-white text-center mb-0">
          Refer a new student to Terra Sounds and split $100 towards your monthly subscription purchases!
        </p>
      </v-container>
    </v-sheet>

    <!-- How It Works -->
    <v-container class="py-12">
      <h2 class="text-h4 text-center mb-8 font-rock-salt text-primary">How It Works</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-card elevation="2" class="h-100">
            <v-card-title class="bg-grey-darken-3 text-white">
              <v-icon icon="mdi-account" class="mr-2" />
              For You
            </v-card-title>
            <v-card-text class="pa-6">
              <v-list bg-color="transparent">
                <v-list-item prepend-icon="mdi-numeric-1-circle" class="mb-2">
                  <v-list-item-title class="text-wrap">
                    Refer a student by filling out the form below or talking with a Terra Sounds administrator
                  </v-list-item-title>
                </v-list-item>
                <v-list-item prepend-icon="mdi-numeric-2-circle">
                  <v-list-item-title class="text-wrap">
                    Once your referral subscribes, you get <strong class="text-primary">$50 discount</strong> on your next subscription payment
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card elevation="2" class="h-100">
            <v-card-title class="bg-primary text-white">
              <v-icon icon="mdi-account-plus" class="mr-2" />
              For Your Referral
            </v-card-title>
            <v-card-text class="pa-6">
              <v-list bg-color="transparent">
                <v-list-item prepend-icon="mdi-numeric-1-circle" class="mb-2">
                  <v-list-item-title class="text-wrap">
                    Gets contacted by Terra Sounds to schedule lessons
                  </v-list-item-title>
                </v-list-item>
                <v-list-item prepend-icon="mdi-numeric-2-circle">
                  <v-list-item-title class="text-wrap">
                    Gets <strong class="text-primary">$50 discount</strong> towards their first monthly subscription
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Referral Form -->
    <v-sheet color="grey-lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="text-h4 text-center mb-8 font-rock-salt text-primary">Tell Us About Your Referral</h2>

            <!-- Success Message -->
            <v-alert v-if="formSubmitted" type="success" class="mb-6">
              Thank you for your referral! We'll be in touch with them soon.
            </v-alert>

            <!-- Error Message -->
            <v-alert v-if="formError" type="error" class="mb-6">
              There was an error submitting the form. Please try again.
            </v-alert>

            <v-card v-if="!formSubmitted" elevation="2" class="pa-6">
              <form
                name="referral"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                @submit.prevent="submitForm"
              >
                <input type="hidden" name="form-name" value="referral" />
                <p class="d-none">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <h3 class="text-h6 mb-4">Referral Information</h3>

                <v-text-field
                  v-model="form.referralName"
                  label="Referral's Name"
                  name="referralName"
                  required
                  class="mb-4"
                />

                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.referralPhone"
                      label="Referral's Phone"
                      name="referralPhone"
                      type="tel"
                      required
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.referralEmail"
                      label="Referral's Email"
                      name="referralEmail"
                      type="email"
                      required
                    />
                  </v-col>
                </v-row>

                <v-textarea
                  v-model="form.message"
                  label="Message (optional)"
                  name="message"
                  hint="Any additional information about your referral"
                  rows="3"
                  class="mb-6"
                />

                <v-divider class="mb-6" />

                <h3 class="text-h6 mb-4">Your Information</h3>

                <v-text-field
                  v-model="form.yourName"
                  label="Your Name"
                  name="yourName"
                  required
                  class="mb-4"
                />

                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.yourPhone"
                      label="Your Phone"
                      name="yourPhone"
                      type="tel"
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.yourEmail"
                      label="Your Email"
                      name="yourEmail"
                      type="email"
                    />
                  </v-col>
                </v-row>

                <v-btn
                  type="submit"
                  color="primary"
                  size="large"
                  block
                  class="text-none mt-4"
                >
                  Submit Referral
                </v-btn>
              </form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Terms -->
    <v-container class="py-12">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h2 class="text-h5 text-center mb-6">Terms & Conditions</h2>
          <v-list bg-color="transparent">
            <v-list-item
              v-for="(term, index) in terms"
              :key="index"
              prepend-icon="mdi-information"
              class="text-body-2"
            >
              <v-list-item-title class="text-wrap">{{ term }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.font-rock-salt {
  font-family: 'Rock Salt', cursive !important;
}

.h-100 {
  height: 100%;
}

.d-none {
  display: none;
}
</style>
