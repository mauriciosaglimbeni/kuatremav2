<template>
  <section>
    <h2>{{ $t('register') }}</h2>
    <v-form ref="form" lazy-validation @submit.prevent="register">
      <v-text-field
        v-model="registerData.email"
        label="E-mail"
        required
        type="email"
        class="field"
      ></v-text-field>

      <v-text-field
        v-model="registerData.password"
        :label="$t('password')"
        required
        type="password"
        class="field"
      ></v-text-field>
      <v-text-field
        v-model="registerData.repeatPassword"
        :label="$t('repeatPassword')"
        required
        type="password"
        class="field"
      ></v-text-field>

      <v-btn type="submit"> {{ $t('register') }}</v-btn>
      <!-- If passwords dont match -->
      <v-alert
        v-if="matchPas === false"
        type="error"
        dismissible
        style="width: fit-content; margin: 1em"
      >
        {{ $t('matchPassword') }}
      </v-alert>
    </v-form>
  </section>
</template>

  <script>
export default {
  data() {
    return {
      registerData: {
        email: '',
        password: '',
        repeatPassword: '',
      },
      loginData: {
        email: '',
        password: '',
      },
      matchPas: Boolean,
    }
  },
  methods: {
    async register() {
      if (this.registerData.password === this.registerData.repeatPassword) {
        try {
          const user = await this.$axios.$post(`${process.env.apiUrl}/users/register`, {
            fullname: this.registerData.fullname,
            email: this.registerData.email,
            password: this.registerData.password,
          })
          console.log(user)
          this.login()
        } catch (err) {
          console.log(err)
        }
      } else {
        this.matchPas = false
      }
    },
    async login() {
      this.loginData.email = this.registerData.email
      this.loginData.password = this.registerData.password
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.loginData,
        })
        this.$router.push('/')
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="scss" src="../assets/css/userOptions.scss">
</style>