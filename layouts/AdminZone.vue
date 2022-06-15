<template>
  <v-app>
    <v-app-bar fixed class="navbar">
      <v-toolbar-title class="title "><b> KUATREMA - Administration</b></v-toolbar-title>
      <!-- <v-toolbar-title class="link"> Products </v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-toolbar-item class="link">
        <nuxt-link :to="localePath('/')"> Return </nuxt-link>
      </v-toolbar-item>
    </v-app-bar>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  name: 'AdminZone',
  layout: 'empty',
  beforeMount() {
    const admin = 'kuatremadmin@gmail.com'
    if (admin !== this.$store.state.auth.user.email) {
      this.$router.push('/')
    }
  },
}
</script>

<style scoped lang="scss">
.navbar {
  background-color: rgb(20, 117, 108);
}
.title{
  margin-right: 2em;
}
.link{
  cursor: pointer;
  &:hover{
    color: gray;
  }
}
</style>
