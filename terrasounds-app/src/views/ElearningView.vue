<script setup>
const benefits = [
  {
    icon: 'mdi-clock-check',
    title: 'Maximum Convenience',
    description: 'Learn from the comfort of your home without commuting'
  },
  {
    icon: 'mdi-calendar-clock',
    title: 'Flexible Scheduling',
    description: 'Book lessons that fit your schedule, any time zone'
  },
  {
    icon: 'mdi-comment-check',
    title: 'Personalized Feedback',
    description: 'Receive real-time guidance and corrections from your instructor'
  },
  {
    icon: 'mdi-monitor-share',
    title: 'Screen Sharing',
    description: 'View theory materials and exercises on your screen'
  }
]

const availableOnline = [
  {
    category: 'Music',
    items: ['Piano', 'Guitar', 'Drums', 'Violin', 'Voice', 'Music Theory'],
    icon: 'mdi-music'
  },
  {
    category: 'Languages',
    items: ['French', 'Italian', 'Russian', 'Ukrainian', 'English (ESL)', 'Spanish'],
    icon: 'mdi-translate'
  },
  {
    category: 'Art',
    items: ['Drawing', 'Sketching', 'Color Theory'],
    icon: 'mdi-palette'
  },
  {
    category: 'Production',
    items: ['Audio Recording', 'Music Arranging'],
    icon: 'mdi-mixing-console'
  }
]

const requirements = [
  { icon: 'mdi-laptop', text: 'Computer with webcam' },
  { icon: 'mdi-wifi', text: 'Stable internet connection (wired recommended)' },
  { icon: 'mdi-microphone', text: 'External USB microphone (optional but recommended)' },
  { icon: 'mdi-video', text: 'Zoom account (free)' }
]
</script>

<template>
  <div>
    <!-- Hero Banner -->
    <v-img
      src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1600"
      height="300"
      cover
      class="d-flex align-center"
    >
      <v-container>
        <div class="text-center">
          <h1 class="text-h2 text-md-h1 font-rock-salt text-white mb-2" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.7);">
            Online Learning
          </h1>
          <p class="text-h6 text-white" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.7);">
            Learn from anywhere
          </p>
        </div>
      </v-container>
    </v-img>

    <!-- Benefits Section -->
    <v-container class="py-12">
      <h2 class="text-h4 text-center mb-8 font-rock-salt text-primary">Why Learn Online?</h2>
      <v-row>
        <v-col
          v-for="benefit in benefits"
          :key="benefit.title"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card class="text-center pa-6 h-100" elevation="2">
            <v-icon :icon="benefit.icon" size="56" color="primary" class="mb-4" />
            <h3 class="text-h6 mb-2">{{ benefit.title }}</h3>
            <p class="text-body-2">{{ benefit.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- What's Available Online -->
    <v-sheet color="grey-lighten-4" class="py-12">
      <v-container>
        <h2 class="text-h4 text-center mb-8 font-rock-salt text-primary">What's Available Online</h2>
        <v-row justify="center">
          <v-col
            v-for="category in availableOnline"
            :key="category.category"
            cols="12"
            sm="6"
            md="3"
          >
            <v-card class="h-100" elevation="2">
              <v-card-item>
                <template #prepend>
                  <v-avatar color="primary" size="40">
                    <v-icon :icon="category.icon" color="white" size="20" />
                  </v-avatar>
                </template>
                <v-card-title>{{ category.category }}</v-card-title>
              </v-card-item>
              <v-card-text>
                <v-list density="compact" bg-color="transparent">
                  <v-list-item
                    v-for="item in category.items"
                    :key="item"
                    :title="item"
                    density="compact"
                  />
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Video Section -->
    <v-container class="py-12">
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card elevation="4">
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/l5IL3B6Ph8U"
                title="Terra Sounds Virtual Video Lessons"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Technical Requirements -->
    <v-sheet color="grey-lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="text-h4 text-center mb-8 font-rock-salt text-primary">What You'll Need</h2>
            <v-card elevation="2">
              <v-list>
                <v-list-item
                  v-for="req in requirements"
                  :key="req.text"
                  :prepend-icon="req.icon"
                  :title="req.text"
                />
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- CTA Section -->
    <v-sheet color="primary" class="py-12">
      <v-container class="text-center">
        <h2 class="text-h4 text-white mb-4">Ready to Try Online Learning?</h2>
        <p class="text-h6 text-white mb-6">Book your FREE 15-minute trial lesson today!</p>
        <v-btn
          to="/contact"
          color="white"
          size="x-large"
          class="text-none text-primary"
        >
          Book Your Free Online Trial
        </v-btn>
      </v-container>
    </v-sheet>
  </div>
</template>

<style scoped>
.font-rock-salt {
  font-family: 'Rock Salt', cursive !important;
}

.h-100 {
  height: 100%;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
