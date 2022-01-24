<template>
  <v-card class="ma-4" width="350">
    <v-img contain max-height="250" :src="photoUrl">
      <v-card :color="colorStatus" class="status-container">
        <v-card-text class="text-right white--text" v-if="!isEdit">{{
          statusName
        }}</v-card-text>
        <AutoComplete
          v-if="isEdit"
          :items="statuses"
          :item="itStatus"
          rounded
          filled
          @change="val => (editOrder.statusId = val)"
        ></AutoComplete>
      </v-card>
    </v-img>

    <div class="title-container d-flex justify-center">
      <v-card-title v-if="!isEdit">{{ productName }}</v-card-title>
      <AutoComplete
        dense
        v-if="isEdit"
        :items="products"
        :item="itProduct"
        @change="val => (editOrder.productId = val)"
      />
    </div>

    <CardText
      :price="price"
      :count="count"
      :isEdit="isEdit"
      @input="val => (editOrder.count = val)"
    />

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="d-flex justify-space-around">
      <v-btn
        color="light-blue accent-3"
        text
        @click="isEdit = true"
        v-if="!isEdit"
      >
        Изменить
      </v-btn>
      <v-btn color="green accent-4" text v-if="isEdit" @click="saveEdit">
        Сохранить
      </v-btn>
      <v-btn color="orange darken-3" text @click="cancelEdit" v-if="isEdit">
        Отменить
      </v-btn>
      <v-btn color="red accent-4" text @click="deleteOrder"> Удалить </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import CardText from '@/components/home/card/CardText.vue'
import AutoComplete from '@/components/home/card/AutoComplete.vue'

import { copyObj } from '@/utils/helpers'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      isEdit: false,
      editOrder: {}
    }
  },
  props: {
    order: {
      type: Object,
      default: () => {}
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
  computed: {
    photoUrl() {
      return this.itProduct?.photoUrl
    },
    productName() {
      return this.itProduct?.name
    },
    statusName() {
      return this.itStatus?.name
    },
    price() {
      return this.itProduct?.price
    },
    count() {
      return this.order?.count
    },
    itStatus() {
      return this.statuses.find(status => status?.id === this.order?.statusId)
    },
    itProduct() {
      return this.products.find(
        product => product?.id === this.order?.productId
      )
    },
    colorStatus() {
      if (this.editOrder?.statusId === 1) {
        return 'green accent-4'
      }
      if (this.editOrder?.statusId === 2) {
        return 'lime accent-4'
      }
      if (this.editOrder?.statusId === 3) {
        return 'purple accent-4'
      }
      if (this.editOrder?.statusId === 4) {
        return 'red accent-4'
      }
      if (this.editOrder?.statusId === 5) {
        return 'orange darken-3'
      }
      if (this.editOrder?.statusId === 6) {
        return 'light-blue accent-3'
      }
      return 'blue-grey darken-3'
    }
  },
  methods: {
    ...mapActions('modal', ['OPEN_MODAL_DELETE_ORDER']),
    ...mapActions('orders', ['EDIT_ORDER']),
    cancelEdit() {
      this.editOrder = copyObj(this.order)
      this.isEdit = false
    },
    saveEdit() {
      this.EDIT_ORDER(this.editOrder)
      this.isEdit = false
      this.editOrder = copyObj(this.order)
    },
    deleteOrder() {
      this.OPEN_MODAL_DELETE_ORDER({
        id: this.order.id,
        price: this.price,
        count: this.count,
        sum: this.price * this.count
      })
    }
  },
  mounted() {
    this.editOrder = copyObj(this.order)
  },
  components: {
    CardText,
    AutoComplete
  }
}
</script>

<style lang="scss" scoped>
// autocomplete
.title-container {
  .v-input::v-deep {
    padding: 17px 16px;
  }
}

.status-container {
  float: right;
  width: max-content;
  .v-input::v-deep {
    .v-input__control {
      .v-input__slot {
        input {
          color: white;
        }
      }
    }
  }
}

// text input
</style>
