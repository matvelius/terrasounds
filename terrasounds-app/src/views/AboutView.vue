<script setup>
</script>

<template>
  <div>
    <!-- Hero Banner -->
    <v-img
      src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1600"
      height="300"
      cover
      class="d-flex align-center"
    >
      <v-container>
        <h1 class="text-h2 text-md-h1 font-rock-salt text-white text-center" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.7);">
          About Us
        </h1>
      </v-container>
    </v-img>

    <!-- Our Story -->
    <v-container class="py-12">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <h2 class="text-h4 font-rock-salt text-primary mb-6">Our Story</h2>
          <p class="text-body-1 mb-4">
            Terra Sounds was established in 2011 in Glenview, IL with a simple mission: to bring high-quality music and arts education directly to students in the comfort of their own homes.
          </p>
          <p class="text-body-1 mb-4">
            What started as a small group of passionate instructors has grown into a thriving community of educators, students, and families united by a love of creative expression. Today, we serve students throughout the Chicago Northshore area and beyond through our online learning programs.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- YouTube Video -->
    <v-sheet color="grey-lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-card elevation="4">
              <div class="video-container">
                <iframe
                  src="https://www.youtube.com/embed/ijE7PRpSJq4"
                  title="Why choose Terra Sounds?"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Our Philosophy -->
    <v-container class="py-12">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <h2 class="text-h4 font-rock-salt text-primary mb-6">Our Philosophy</h2>
          <p class="text-body-1 mb-4">
            At Terra Sounds, we believe that everyone has creative potential waiting to be unlocked. We call our school a "creative playground" because learning should be joyful, exploratory, and fun.
          </p>
          <p class="text-body-1 mb-4">
            Whether you're a child picking up an instrument for the first time or an adult returning to a passion you set aside years ago, we create a supportive environment where you can grow at your own pace.
          </p>
          <v-alert
            type="info"
            variant="tonal"
            class="mt-6"
          >
            <p class="text-body-1 font-italic mb-0">
              "Music and art are not just skills to be learned—they're languages that allow us to express what words cannot."
            </p>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>

    <!-- Our Standards -->
    <v-sheet color="grey-lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <h2 class="text-h4 font-rock-salt text-primary mb-6">Our Standards</h2>
            <p class="text-body-1 mb-6">
              Every Terra Sounds instructor is carefully selected for their expertise, teaching ability, and passion for their craft. Our instructors include:
            </p>
            <v-list bg-color="transparent">
              <v-list-item prepend-icon="mdi-check-circle" class="mb-2">
                <v-list-item-title>Professional musicians and artists with performance experience</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-check-circle" class="mb-2">
                <v-list-item-title>Graduates from top music conservatories and art schools</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-check-circle" class="mb-2">
                <v-list-item-title>Educators with years of teaching experience across all age groups</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-check-circle" class="mb-2">
                <v-list-item-title>Background-checked and committed to creating safe learning environments</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- CTA Section -->
    <v-container class="py-12 text-center">
      <h2 class="text-h5 mb-4">Ready to Start Your Creative Journey?</h2>
      <p class="text-body-1 mb-6">Contact us today to schedule your free trial lesson.</p>
      <v-btn
        to="/contact"
        color="primary"
        size="x-large"
        class="text-none"
      >
        Get Started
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
