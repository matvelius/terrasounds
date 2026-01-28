<script setup>
const enrollmentSteps = [
  {
    number: 1,
    text: 'Tell us about your interests and goals in music, arts, languages or recording'
  },
  {
    number: 2,
    text: "We'll arrange a sample lesson with the right teacher"
  },
  {
    number: 3,
    text: 'Choose a convenient schedule and become a part of our creative playground'
  }
]

const youtubeVideos = [
  {
    title: 'How to Sign Up for Lessons?',
    id: '6oRTPv3ayBE'
  },
  {
    title: 'Why choose Terra Sounds?',
    id: 'ijE7PRpSJq4'
  },
  {
    title: 'Terra Sounds Virtual Video Lessons',
    id: 'l5IL3B6Ph8U'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <v-img
      src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1600"
      height="400"
      cover
      class="d-flex align-center"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="text-h2 text-md-h1 font-weight-bold text-white mb-4" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
              TERRA SOUNDS
            </h1>
            <p class="text-h5 text-md-h4 font-rock-salt text-primary" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
              CREATIVE PLAYGROUND
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-img>

    <!-- Welcome Banner -->
    <v-sheet color="grey-lighten-3" class="py-8">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8" class="text-center">
            <p class="text-h6 text-primary font-weight-bold mb-4">
              New to Terra Sounds? Sign up for in-home and online video lessons today!
            </p>
            <p class="text-body-1">
              Terra Sounds is a creative playground for kids and adults who learn, perform, and grow together through music and arts.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- CTA Buttons -->
    <v-container class="py-8">
      <v-row justify="center">
        <v-col cols="12" sm="4" class="d-flex justify-center">
          <v-btn
            to="/contact"
            size="x-large"
            color="primary"
            class="font-rock-salt text-none px-8"
            elevation="4"
          >
            start here
          </v-btn>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-center">
          <v-btn
            to="/referral"
            size="x-large"
            color="primary"
            class="font-rock-salt text-none px-8"
            elevation="4"
          >
            refer a friend
          </v-btn>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-center">
          <v-btn
            href="https://www.giftfly.com/shop/terra-sounds"
            target="_blank"
            size="x-large"
            color="primary"
            class="font-rock-salt text-none px-8"
            elevation="4"
          >
            buy a gift card
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- 3-Step Enrollment -->
    <v-sheet color="white" class="py-12">
      <v-container>
        <h2 class="text-h4 text-center mb-8 font-rock-salt text-primary">
          Getting Started is Easy
        </h2>
        <v-row justify="center">
          <v-col
            v-for="step in enrollmentSteps"
            :key="step.number"
            cols="12"
            md="4"
            class="text-center"
          >
            <v-avatar color="primary" size="64" class="mb-4">
              <span class="text-h4 text-white font-weight-bold">{{ step.number }}</span>
            </v-avatar>
            <p class="text-body-1 px-4">{{ step.text }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- YouTube Videos Section -->
    <v-sheet color="grey-lighten-4" class="py-12">
      <v-container>
        <h2 class="text-h4 text-center mb-8 font-rock-salt text-primary">
          Learn More About Us
        </h2>
        <v-row>
          <v-col
            v-for="video in youtubeVideos"
            :key="video.id"
            cols="12"
            md="4"
          >
            <v-card elevation="2">
              <div class="video-container">
                <iframe
                  :src="`https://www.youtube.com/embed/${video.id}`"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <v-card-title class="text-center text-body-1">
                {{ video.title }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Mailing List CTA -->
    <v-container class="py-12 text-center">
      <v-icon icon="mdi-email-newsletter" size="48" color="primary" class="mb-4" />
      <h2 class="text-h5 mb-4">Stay Connected</h2>
      <v-btn
        href="https://lp.constantcontactpages.com/su/TEraPOV/terrasounds"
        target="_blank"
        variant="outlined"
        color="primary"
        size="large"
        class="text-none"
      >
        Join Our Mailing List
      </v-btn>
    </v-container>
  </div>
</template>

<style scoped>
.font-rock-salt {
  font-family: 'Rock Salt', cursive !important;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
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
