<template>
  <section>
    <h2>{{ $t('login') }}</h2>
    <v-form ref="form"  lazy-validation @submit.prevent="login">
      <v-text-field
        v-model="loginData.email"
        label="E-mail"
        required
        class="field"
        type="email"
      ></v-text-field>

      <v-text-field
        v-model="loginData.password"
        :label="$t('password')"
        required
        class="field"
        type="password"
      ></v-text-field>

      <v-btn type="submit" > {{ $t('login') }}</v-btn>
    </v-form>
  </section>
</template>

<script>
export default {
     data() {
    return {
      loginData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$auth.loginWith("local", {
          data: this.loginData
        });
        this.$router.push("/");
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style lang="scss" src="../assets/css/userOptions.scss">
</style>