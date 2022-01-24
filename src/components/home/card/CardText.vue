<template>
  <v-card-text class="d-flex justify-space-around">
    <div class="price-container">
      <div>Цена</div>
      <b>${{ price }}</b>
    </div>
    <div class="count-container">
      <div>Количество</div>
      <b v-if="!isEdit">{{ count }} шт.</b>
      <v-text-field
        v-if="isEdit"
        v-model="newCount"
        @input="$emit('input', Number(newCount))"
        suffix="шт."
        outlined
        type="number"
      ></v-text-field>
    </div>
    <div>
      <div>Сума</div>
      <b>${{ calculateSum }}</b>
    </div>
  </v-card-text>
</template>

<script>
export default {
  data() {
    return {
      newCount: this.count
    }
  },
  props: {
    count: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    calculateSum() {
      return this.count * this.price
    }
  }
}
</script>

<style lang="scss" scoped>
.price-container,
.count-container {
  max-width: 33%;

  .v-text-field::v-deep {
    padding: 0;
    margin: 0;
    .v-input__control {
      .v-input__slot {
        margin: 0;
        min-height: 10px;
        fieldset {
          // border: none;
        }
        .v-text-field__slot {
          input {
            max-height: 24px;
          }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }
        }
      }
      .v-text-field__details {
        height: 0px;
        min-height: 0px;
        margin: 0px;
        padding: 0;
      }
    }
  }
}
</style>
