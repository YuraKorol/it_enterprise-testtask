<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      class="d-flex align-center justify-center"
    >
      <div class="">Order list</div>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <DeleteModal />
    <CreateModal />
  </v-app>
</template>

<script>
import DeleteModal from '@/components/DeleteModal.vue'
import CreateModal from '@/components/CreateModal.vue'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    DeleteModal,
    CreateModal
  }
}
</script>
