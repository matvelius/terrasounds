<script setup>
const languages = [
  { name: 'English (ESL)', flag: '🇺🇸' },
  { name: 'French', flag: '🇫🇷' },
  { name: 'Hebrew', flag: '🇮🇱' },
  { name: 'Italian', flag: '🇮🇹' },
  { name: 'Russian', flag: '🇷🇺' },
  { name: 'Spanish', flag: '🇪🇸' },
  { name: 'Ukrainian', flag: '🇺🇦' }
]
</script>

<template>
  <div>
    <!-- Hero Banner -->
    <v-img
      src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600"
      height="300"
      cover
      class="d-flex align-center"
    >
      <v-container>
        <div class="text-center">
          <h1 class="text-h2 text-md-h1 font-rock-salt text-white mb-2" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.7);">
            Language Classes
          </h1>
          <p class="text-h6 text-white" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.7);">
            Speaking, listening, reading, and writing
          </p>
        </div>
      </v-container>
    </v-img>

    <!-- Languages Grid -->
    <v-container class="py-12">
      <h2 class="text-h4 text-center mb-8 font-rock-salt text-primary">Languages We Teach</h2>
      <v-row justify="center">
        <v-col
          v-for="language in languages"
          :key="language.name"
          cols="6"
          sm="4"
          md="3"
        >
          <v-card class="text-center pa-6 h-100" elevation="2" hover>
            <span class="text-h2 mb-3 d-block">{{ language.flag }}</span>
            <v-card-title class="text-body-1">{{ language.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Methodology Section -->
    <v-sheet color="grey-lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="text-h4 text-center mb-8 font-rock-salt text-primary">Our Teaching Method</h2>
            <v-row>
              <v-col cols="12" md="4">
                <v-card class="pa-4 text-center h-100" elevation="0" color="white">
                  <v-icon icon="mdi-puzzle" size="48" color="primary" class="mb-3" />
                  <h3 class="text-h6 mb-2">Eclectic Approach</h3>
                  <p class="text-body-2">We combine the best methods from various teaching philosophies to create a personalized learning experience.</p>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card class="pa-4 text-center h-100" elevation="0" color="white">
                  <v-icon icon="mdi-tune" size="48" color="primary" class="mb-3" />
                  <h3 class="text-h6 mb-2">Adaptive Learning</h3>
                  <p class="text-body-2">Our instructors adapt to your learning style, pace, and goals to maximize your progress.</p>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card class="pa-4 text-center h-100" elevation="0" color="white">
                  <v-icon icon="mdi-account-group" size="48" color="primary" class="mb-3" />
                  <h3 class="text-h6 mb-2">All Skill Levels</h3>
                  <p class="text-body-2">Whether you're a complete beginner or advanced speaker, we have the right program for you.</p>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Cross-links and CTAs -->
    <v-container class="py-12">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h2 class="text-h5 mb-4">Explore Other Programs</h2>
          <v-btn to="/music" variant="outlined" color="primary" class="ma-2 text-none">
            Music Classes
          </v-btn>
          <v-btn to="/art" variant="outlined" color="primary" class="ma-2 text-none">
            Art Classes
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-8">
        <v-col cols="12" class="text-center">
          <h2 class="text-h5 mb-4">Ready to Get Started?</h2>
          <v-btn to="/fees" color="secondary" class="ma-2 text-none" size="large">
            View Pricing
          </v-btn>
          <v-btn to="/contact" color="primary" class="ma-2 text-none" size="large">
            Contact Us
          </v-btn>
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
</style>
