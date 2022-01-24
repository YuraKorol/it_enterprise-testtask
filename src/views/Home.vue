<template>
  <div>
    <OrderList :orders="orders" :statuses="statuses" :products="products" />
    <v-fab-transition>
      <v-btn
        @click="OPEN_MODAL_CREATE_ORDER"
        color="primary"
        dark
        fixed
        bottom
        right
        fab
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import OrderList from '@/components/home/OrderList.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      fab: true,
      data: []
    }
  },
  async mounted() {
    await this.GET_ALL_ORDERS()
    await this.GET_ALL_STATUSES()
    await this.GET_ALL_PRODUCTS()
    this.orderFormation()
    // console.log(this.orderFormation())
  },
  computed: {
    ...mapGetters('orders', ['orders']),
    ...mapGetters('statuses', ['statuses']),
    ...mapGetters('products', ['products'])
  },
  methods: {
    ...mapActions('products', ['GET_ALL_PRODUCTS']),
    ...mapActions('orders', ['GET_ALL_ORDERS', 'DELETE_ORDER']),
    ...mapActions('statuses', ['GET_ALL_STATUSES']),
    ...mapActions('modal', ['OPEN_MODAL_CREATE_ORDER']),
    orderFormation() {
      this.data = this.orders.map(order => {
        const status = this.statuses.find(e => e.id === order.statusId)
        const product = this.products.find(e => e.id === order.productId)
        return {
          id: order.id,
          count: order.count,
          product,
          status
        }
      })
    }
  },
  components: {
    OrderList
  }
}
</script>
