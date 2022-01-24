<template>
  <v-autocomplete
    v-model="data"
    :items="items"
    item-text="name"
    item-value="id"
    :dense="dense"
    :rounded="rounded"
    :filled="filled"
    @change="$emit('change', data)"
  ></v-autocomplete>
</template>

<script>
export default {
  data() {
    return {
      data: { ...this.item }
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    item: {
      type: Object,
      default: () => {}
    },
    dense: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    filled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.v-autocomplete::v-deep {
  .v-input__control {
    .v-input__slot {
      margin-bottom: 0px;
    }
    .v-text-field__details {
      min-height: 0px;
      height: 0px;
      margin-bottom: 0px;
    }
  }
}
</style>
