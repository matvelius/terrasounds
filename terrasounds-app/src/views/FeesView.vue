<script setup>
const inHomePricing = [
  { duration: '45 min', monthly: '$285/month', perLesson: '$66/lesson' },
  { duration: '60 min', monthly: '$350/month', perLesson: '$81/lesson' }
]

const onlinePricing = [
  { duration: '30 min*', monthly: '$175/month', perLesson: '$40/lesson' },
  { duration: '45 min*', monthly: '$225/month', perLesson: '$52/lesson' },
  { duration: '60 min*', monthly: '$275/month', perLesson: '$63/lesson' }
]

const terms = [
  'Consistent weekly time slot for up to 52 lessons/year',
  '4 lesson cancellations a year (with 2-week advance notice)',
  'Cancel subscription at any time (with 2-week advance notice)',
  'Subscription fee: $100 (refunded after 12 consecutive monthly payments)',
  'Recital fee: $20 (refunded after 3 consecutive monthly payments)',
  'Monthly subscription fee charged on the 1st of each month',
  '5% discount with 2+ subscriptions per household'
]
</script>

<template>
  <div>
    <!-- Hero Banner -->
    <v-img
      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600"
      height="300"
      cover
      class="d-flex align-center"
    >
      <v-container>
        <h1 class="text-h2 text-md-h1 font-rock-salt text-white text-center" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.7);">
          Fees & Terms
        </h1>
      </v-container>
    </v-img>

    <!-- Free Trial Callout -->
    <v-sheet color="primary" class="py-6">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" class="text-center">
            <v-icon icon="mdi-gift" size="32" color="white" class="mr-2" />
            <span class="text-h5 text-white font-weight-bold">
              FREE 15-minute one-on-one video lesson!
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Pricing Tables -->
    <v-container class="py-12">
      <v-row>
        <!-- In-Home Lessons -->
        <v-col cols="12" md="6">
          <v-card elevation="4" class="h-100">
            <v-card-title class="bg-grey-darken-3 text-white py-4">
              <v-icon icon="mdi-home" class="mr-2" />
              In-Home Lessons
            </v-card-title>
            <v-card-subtitle class="bg-grey-darken-3 text-grey-lighten-1 pb-4">
              Chicago Northshore Area
            </v-card-subtitle>
            <v-table>
              <thead>
                <tr>
                  <th>Duration</th>
                  <th>Monthly</th>
                  <th>Per Lesson</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in inHomePricing" :key="row.duration">
                  <td>{{ row.duration }}</td>
                  <td class="font-weight-bold text-primary">{{ row.monthly }}</td>
                  <td>{{ row.perLesson }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>

        <!-- Online Lessons -->
        <v-col cols="12" md="6">
          <v-card elevation="4" class="h-100">
            <v-card-title class="bg-primary text-white py-4">
              <v-icon icon="mdi-laptop" class="mr-2" />
              Online Lessons
            </v-card-title>
            <v-card-subtitle class="bg-primary text-orange-lighten-3 pb-4">
              Available Worldwide
            </v-card-subtitle>
            <v-table>
              <thead>
                <tr>
                  <th>Duration</th>
                  <th>Monthly</th>
                  <th>Per Lesson</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in onlinePricing" :key="row.duration">
                  <td>{{ row.duration }}</td>
                  <td class="font-weight-bold text-primary">{{ row.monthly }}</td>
                  <td>{{ row.perLesson }}</td>
                </tr>
              </tbody>
            </v-table>
            <v-card-text class="text-caption text-grey">
              *allowing a few minutes for connection and sound check
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Pay As You Go -->
      <v-row class="mt-8">
        <v-col cols="12">
          <v-alert type="info" variant="tonal" class="text-center">
            <strong>Pay As You Go</strong> option available at 20% premium over subscription rates
          </v-alert>
        </v-col>
      </v-row>
    </v-container>

    <!-- Terms & Conditions -->
    <v-sheet color="grey-lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="text-h4 text-center mb-8 font-rock-salt text-primary">Terms & Conditions</h2>
            <v-card elevation="2">
              <v-list>
                <v-list-item
                  v-for="(term, index) in terms"
                  :key="index"
                  :prepend-icon="'mdi-check-circle'"
                >
                  <v-list-item-title class="text-wrap">{{ term }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- CTA Section -->
    <v-container class="py-12 text-center">
      <h2 class="text-h5 mb-4">Ready to Get Started?</h2>
      <p class="text-body-1 mb-6">Fill out our contact form to schedule your free trial lesson.</p>
      <v-btn
        to="/contact"
        color="primary"
        size="x-large"
        class="text-none"
      >
        Contact Us
      </v-btn>
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
