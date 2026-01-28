<script setup>
const contactInfo = {
  address: '111 North Wabash Ave. #1305, Chicago, IL 60602',
  phone: '+1.847.737.1850',
  email: 'info@terrasounds.com',
}

const socialLinks = [
  { icon: 'mdi-facebook', url: 'https://facebook.com/terrasounds', label: 'Facebook' },
  { icon: 'mdi-instagram', url: 'https://instagram.com/terrasounds', label: 'Instagram' },
  { icon: 'mdi-youtube', url: 'https://youtube.com/terrasounds', label: 'YouTube' },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <v-footer class="bg-grey-darken-4 text-white py-6">
    <v-container>
      <v-row justify="center" align="center">
        <!-- Contact Information -->
        <v-col cols="12" md="4" class="text-center text-md-left">
          <p class="mb-2">
            <v-icon icon="mdi-map-marker" size="small" class="mr-1" />
            {{ contactInfo.address }}
          </p>
          <p class="mb-2">
            <v-icon icon="mdi-phone" size="small" class="mr-1" />
            <a :href="`tel:${contactInfo.phone}`" class="text-white text-decoration-none">
              {{ contactInfo.phone }}
            </a>
          </p>
          <p class="mb-0">
            <v-icon icon="mdi-email" size="small" class="mr-1" />
            <a :href="`mailto:${contactInfo.email}`" class="text-white text-decoration-none">
              {{ contactInfo.email }}
            </a>
          </p>
        </v-col>

        <!-- Social Links -->
        <v-col cols="12" md="4" class="text-center my-4 my-md-0">
          <v-btn
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            icon
            variant="text"
            class="mx-1"
          >
            <v-icon :icon="social.icon" size="24" />
          </v-btn>
        </v-col>

        <!-- Copyright -->
        <v-col cols="12" md="4" class="text-center text-md-right">
          <p class="mb-0 text-caption">
            &copy; {{ currentYear }} Terra Sounds School of Music & Arts
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
a:hover {
  text-decoration: underline !important;
}
</style>
