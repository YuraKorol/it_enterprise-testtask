<template>
  <v-dialog v-model="isOpenCreateModal" persistent max-width="400">
    <v-card>
      <div class="title-container d-flex justify-center">
        <v-card-title>Создайте новый заказ!</v-card-title>
      </div>
      <v-form @submit.prevent="sendForm">
        <div class="create-modal__form-item">
          <small>Товар</small>
          <AutoComplete
            :items="products"
            @change="val => (newOrder.productId = val)"
          />
        </div>
        <div class="create-modal__form-item">
          <small>Количество</small>
          <v-text-field
            v-model="newOrder.count"
            width
            suffix="шт."
            type="number"
          ></v-text-field>
        </div>
        <div class="d-flex justify-space-around">
          <v-btn type="submit" color="green accent-4" class="white--text">
            Создать
          </v-btn>
          <v-btn @click="closeModal" color="red accent-4" class="white--text">
            Отменить
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AutoComplete from '@/components/home/card/AutoComplete'

export default {
  data() {
    return {
      newOrder: {
        productId: null,
        count: null
      }
    }
  },
  computed: {
    ...mapGetters('modal', ['isOpenCreateModal']),
    ...mapGetters('products', ['products'])
  },
  methods: {
    ...mapActions('modal', ['CLOSE_MODAL_CREATE_ORDER']),
    ...mapActions('orders', ['CREATE_ORDER']),
    closeModal() {
      this.newOrder.productId = this.newOrder.count = null
      this.CLOSE_MODAL_CREATE_ORDER()
    },
    async sendForm() {
      await this.CREATE_ORDER({
        productId: Number(this.newOrder.productId),
        count: Number(this.newOrder.count)
      })
      this.closeModal()
    }
  },
  components: {
    AutoComplete
  }
}
</script>

<style lang="scss" scoped>
.v-form {
  padding: 0px 20px 25px 20px;
}
.create-modal__form-item {
  margin-top: 15px;
  .v-text-field::v-deep {
    margin: 0;
    padding: 0;
    .v-input__control {
      .v-input__slot {
        .v-text-field__slot {
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }
        }
      }
    }
  }
}
</style>
