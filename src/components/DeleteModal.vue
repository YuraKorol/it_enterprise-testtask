<template>
  <v-dialog v-model="isOpen" persistent max-width="400">
    <v-card>
      <v-card-title class="text-center">
        Хотите удалить заказ №{{ order.id }} ?
      </v-card-title>
      <div class="title-container d-flex justify-center">
        <v-card-title>{{ order.name }}</v-card-title>
      </div>

      <v-card-text class="d-flex justify-space-around">
        <div class="price-container">
          <div>Цена</div>
          <b>${{ order.price }}</b>
        </div>
        <div class="count-container">
          <div>Количество</div>
          <b>{{ order.count }} шт.</b>
        </div>
        <div>
          <div>Сума</div>
          <b>${{ order.sum }}</b>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red accent-4" text @click="CLOSE_MODAL_DELETE_ORDER">
          Отменить
        </v-btn>
        <v-btn color="green accent-4" text @click="deleteOrder">
          Удалить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('modal', ['isOpen', 'order'])
  },
  methods: {
    ...mapActions('modal', ['CLOSE_MODAL_DELETE_ORDER']),
    ...mapActions('orders', ['DELETE_ORDER']),
    deleteOrder() {
      this.DELETE_ORDER(this.order.id)
      this.CLOSE_MODAL_DELETE_ORDER()
    }
  }
}
</script>

<style lang="scss" scoped></style>
