<template>
  <v-row class="d-flex flex-wrap justify-center">
    <OrderCard
      v-for="order in orders"
      :key="order.id"
      :order="order"
      :statuses="statuses"
      :products="products"
    />
  </v-row>
</template>

<script>
import OrderCard from '@/components/home/OrderCard.vue'
export default {
  props: {
    orders: {
      type: Array,
      default: () => []
    },
    statuses: {
      type: Array,
      default: () => []
    },
    products: {
      type: Array,
      default: () => []
    }
  },
  components: {
    OrderCard
  }
}
</script>

<style scoped></style>
