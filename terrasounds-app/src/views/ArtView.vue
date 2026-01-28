<script setup>
const disciplines = [
  { name: 'Drawing & Sketching', icon: 'mdi-pencil' },
  { name: 'Pencil Drawing', icon: 'mdi-lead-pencil' },
  { name: 'Acrylic Painting', icon: 'mdi-palette' },
  { name: 'Oil Painting', icon: 'mdi-brush' },
  { name: 'Watercolors', icon: 'mdi-water' },
  { name: 'Painting to Music', icon: 'mdi-music-note' },
  { name: 'Color Theory', icon: 'mdi-palette-swatch' },
  { name: 'Photography', icon: 'mdi-camera' },
  { name: 'Sculpture', icon: 'mdi-cube-outline' },
  { name: 'Acting', icon: 'mdi-drama-masks' }
]
</script>

<template>
  <div>
    <!-- Hero Banner -->
    <v-img
      src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1600"
      height="300"
      cover
      class="d-flex align-center"
    >
      <v-container>
        <div class="text-center">
          <h1 class="text-h2 text-md-h1 font-rock-salt text-white mb-2" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.7);">
            Art Classes
          </h1>
          <p class="text-h6 text-white" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.7);">
            Explore your creative potential
          </p>
        </div>
      </v-container>
    </v-img>

    <!-- Disciplines Grid -->
    <v-container class="py-12">
      <h2 class="text-h4 text-center mb-8 font-rock-salt text-primary">What We Offer</h2>
      <v-row>
        <v-col
          v-for="discipline in disciplines"
          :key="discipline.name"
          cols="6"
          sm="4"
          md="3"
        >
          <v-card class="text-center pa-4 h-100" elevation="2" hover>
            <v-icon :icon="discipline.icon" size="48" color="primary" class="mb-3" />
            <v-card-title class="text-body-1">{{ discipline.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Info Section -->
    <v-sheet color="grey-lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="text-h5 mb-4">Unleash Your Inner Artist</h2>
            <p class="text-body-1 mb-6">
              Our art classes are designed for students of all ages and skill levels. Whether you're a complete beginner or looking to refine your technique, our experienced instructors will guide you on your creative journey.
            </p>
            <v-row>
              <v-col cols="12" sm="6">
                <v-card class="pa-4" elevation="0" color="white">
                  <v-icon icon="mdi-home" size="48" color="primary" class="mb-2" />
                  <h3 class="text-h6">In-Home Lessons</h3>
                  <p class="text-body-2">Learn in the comfort of your own space</p>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card class="pa-4" elevation="0" color="white">
                  <v-icon icon="mdi-laptop" size="48" color="primary" class="mb-2" />
                  <h3 class="text-h6">Online Lessons</h3>
                  <p class="text-body-2">Connect with instructors virtually</p>
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
          <v-btn to="/languages" variant="outlined" color="primary" class="ma-2 text-none">
            Language Classes
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
