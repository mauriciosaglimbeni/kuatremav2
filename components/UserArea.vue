<template>
  <section>
    <div v-if="!$store.state.auth.loggedIn" class="forms-wrapper">
      <div v-if="login" class="form-div">
        <user-login></user-login>
        <p class="switch-link" @click="login = !login">{{ $t('noAccount') }}</p>
      </div>
      <div v-else class="form-div">
        <user-register></user-register>
        <p class="switch-link" @click="login = !login">
          {{ $t('hasAccount') }}
        </p>
      </div>
    </div>
    <div v-else class="options-wrapper">
      <h2 >{{ $t('yourProfile') }}</h2>
      <v-list dense>
        <v-list-item v-if="admin === $store.state.auth.user.email" class="drawer-item">
          <nuxt-link :to="localePath('/adminzone')">
            <v-list-item-content>
              ADMIN-ZONE
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
        <v-list-item class="drawer-item">
          <nuxt-link :to="localePath('/orders')">
            <v-list-item-content>
              {{ $t('orders') }}
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
        <v-list-item class="drawer-item">
          <nuxt-link :to="localePath('/wishlist')"
            ><v-list-item-content>
              {{ $t('wishlist') }}
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
        <v-list-item class="drawer-item">
          <nuxt-link :to="localePath('/point-shop')"
            ><v-list-item-content>
              {{ $t('pointShop') }}
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
        <v-list-item class="drawer-item" @click="logout">
          <v-list-item-avatar rounded="0">
            <font-awesome-icon icon="fa-solid fa-door-open" />
          </v-list-item-avatar>
          <v-list-item-content>
            {{ $t('logout') }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </section>
</template>

<script>
import UserLogin from './UserLogin.vue'
import UserRegister from './UserRegister.vue'
export default {
  components: { UserLogin, UserRegister },
  data() {
    return {
      login: false,
      admin: "kuatremadmin@gmail.com"
    }
  },
  methods: {
     // this method will logout the user  on the local storage of the  browser and redirect them to home
    async logout() {  
      await this.$auth.logout()
        this.$router.push("/")
        // this.$emit("updateLogged", false)
   
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  padding-top: 4em;
  width: 25em;
}
.options-wrapper {
  padding-top: 4em;
  color: white;
  margin-inline: 1em;
}
.form-div {
  color: white;
  z-index: 5;
  margin-inline: 1em;
}

.switch-link {
  margin-top: 1em;
  color: white;
  text-decoration: underline;
  font-size: 14px;
  margin-inline: 2em;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
}
</style>