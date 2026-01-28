<script setup>
const categories = [
  {
    title: 'Strings',
    icon: 'mdi-violin',
    items: ['Guitar', 'Bass', 'Violin', 'Viola']
  },
  {
    title: 'Piano & Keyboard',
    icon: 'mdi-piano',
    items: ['Piano']
  },
  {
    title: 'Winds',
    icon: 'mdi-trumpet',
    items: ['Flute', 'Clarinet', 'Saxophone', 'Trumpet/Brass']
  },
  {
    title: 'Percussion',
    icon: 'mdi-drum',
    items: ['Drums', 'Percussion']
  },
  {
    title: 'Voice',
    icon: 'mdi-microphone',
    items: ['Vocal Lessons']
  },
  {
    title: 'Theory',
    icon: 'mdi-music-clef-treble',
    items: ['Solfeggio', 'Music Theory', 'Improvisation']
  },
  {
    title: 'Production',
    icon: 'mdi-mixing-console',
    items: ['Arranging', 'Audio Recording']
  }
]
</script>

<template>
  <div>
    <!-- Hero Banner -->
    <v-img
      src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1600"
      height="300"
      cover
      class="d-flex align-center"
    >
      <v-container>
        <div class="text-center">
          <h1 class="text-h2 text-md-h1 font-rock-salt text-white mb-2" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.7);">
            Music Classes
          </h1>
          <p class="text-h6 text-white" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.7);">
            Private lessons and group classes
          </p>
        </div>
      </v-container>
    </v-img>

    <!-- Instrument Grid -->
    <v-container class="py-12">
      <v-row>
        <v-col
          v-for="category in categories"
          :key="category.title"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="h-100" elevation="2">
            <v-card-item>
              <template #prepend>
                <v-avatar color="primary" size="48">
                  <v-icon :icon="category.icon" color="white" />
                </v-avatar>
              </template>
              <v-card-title>{{ category.title }}</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-chip
                v-for="item in category.items"
                :key="item"
                class="ma-1"
                color="grey-lighten-2"
              >
                {{ item }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Lesson Format Info -->
    <v-sheet color="grey-lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="text-h5 mb-6">Flexible Learning Options</h2>
            <v-row>
              <v-col cols="12" sm="6">
                <v-card class="pa-4" elevation="0" color="white">
                  <v-icon icon="mdi-home" size="48" color="primary" class="mb-2" />
                  <h3 class="text-h6">In-Home Lessons</h3>
                  <p class="text-body-2">Our instructors come to you in the Chicago Northshore area</p>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card class="pa-4" elevation="0" color="white">
                  <v-icon icon="mdi-laptop" size="48" color="primary" class="mb-2" />
                  <h3 class="text-h6">Online Lessons</h3>
                  <p class="text-body-2">Learn from anywhere via video conferencing</p>
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
          <v-btn to="/art" variant="outlined" color="primary" class="ma-2 text-none">
            Art Classes
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
