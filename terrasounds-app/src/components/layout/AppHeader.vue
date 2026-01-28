<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import logoImage from '@/assets/Terra_Sounds_School_of_Music_and_Arts_horizontal_on_transparent_for_bright.png'

const display = useDisplay()
const drawer = ref(false)
const whatWeDoMenu = ref(false)

const navItems = [
  { title: 'Home', to: '/' },
  { title: 'eLearning', to: '/elearning' },
  { title: 'Fees & Terms', to: '/fees' },
  { title: 'Contact Us', to: '/contact' },
  { title: 'Referral Program', to: '/referral' },
]

const whatWeDoItems = [
  { title: 'About Us', to: '/about' },
  { title: 'Music Classes', to: '/music' },
  { title: 'Art Classes', to: '/art' },
  { title: 'Language Classes', to: '/languages' },
]
</script>

<template>
  <!-- Desktop/Tablet Navigation -->
  <v-app-bar color="white" elevation="2" class="px-2" height="72">
    <!-- Mobile hamburger menu button -->
    <v-app-bar-nav-icon
      v-if="display.smAndDown.value"
      @click="drawer = !drawer"
      aria-label="Toggle navigation menu"
    />

    <!-- Logo -->
    <router-link to="/" class="d-flex align-center text-decoration-none">
      <img
        :src="logoImage"
        alt="Terra Sounds School of Music & Arts"
        class="logo-img"
      />
    </router-link>

    <v-spacer />

    <!-- Desktop navigation -->
    <template v-if="display.mdAndUp.value">
      <v-btn
        to="/"
        variant="text"
        class="text-none"
      >
        Home
      </v-btn>

      <!-- What We Do dropdown -->
      <v-menu v-model="whatWeDoMenu" open-on-hover>
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            variant="text"
            class="text-none"
            append-icon="mdi-chevron-down"
          >
            What We Do
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="item in whatWeDoItems"
            :key="item.to"
            :to="item.to"
            :title="item.title"
          />
        </v-list>
      </v-menu>

      <v-btn
        v-for="item in navItems.slice(1)"
        :key="item.to"
        :to="item.to"
        variant="text"
        class="text-none"
      >
        {{ item.title }}
      </v-btn>
    </template>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list nav>
      <v-list-item
        to="/"
        title="Home"
        prepend-icon="mdi-home"
        @click="drawer = false"
      />

      <!-- What We Do section -->
      <v-list-group value="What We Do">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            title="What We Do"
            prepend-icon="mdi-information"
          />
        </template>
        <v-list-item
          v-for="item in whatWeDoItems"
          :key="item.to"
          :to="item.to"
          :title="item.title"
          @click="drawer = false"
        />
      </v-list-group>

      <v-list-item
        to="/elearning"
        title="eLearning"
        prepend-icon="mdi-laptop"
        @click="drawer = false"
      />
      <v-list-item
        to="/fees"
        title="Fees & Terms"
        prepend-icon="mdi-currency-usd"
        @click="drawer = false"
      />
      <v-list-item
        to="/contact"
        title="Contact Us"
        prepend-icon="mdi-email"
        @click="drawer = false"
      />
      <v-list-item
        to="/referral"
        title="Referral Program"
        prepend-icon="mdi-account-multiple-plus"
        @click="drawer = false"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.logo-img {
  height: 60px;
  width: auto;
}

@media (max-width: 600px) {
  .logo-img {
    height: 48px;
  }
}
</style>
