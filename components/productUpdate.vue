<template>
  <section>
    <h4>Update Product</h4>
    <v-form method="post" @submit.prevent="submitForm()">
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field
              :v-model="product.productName"
              label="Product name"
              required
              :value="product.productName"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              :v-model="product.artist"
              label="Artist"
              required
              :value="product.artist"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              :v-model="product.price"
              label="Main price"
              required
              :value="product.price"
              type="number"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              :v-model="product.offerPrice"
              label="Price in offer"
              required
              :value="product.offerPrice"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-checkbox v-model="checkIsOffer" label="Is Offer"></v-checkbox>
          </v-col>
          <v-col cols="6">
            <v-checkbox v-model="checkIsFeat" label="Is Featured"></v-checkbox>
          </v-col>
          <v-col cols="6">
            <v-text-field
              :v-model="product.img2"
              label=" First artistic image"
              :value="product.img2"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              :v-model="product.img3"
              label=" Second artistic image"
              :value="product.img3"
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-btn type="submit" dark> Update product</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-alert
      v-if="correct === 'true'"
      type="success"
      dismissible
      style="width: fit-content; margin: 1em"
    >
      Update Succesful
    </v-alert>
    <v-alert
      v-if="correct === 'false'"
      type="error"
      dismissible
      style="width: fit-content; margin: 1em"
    >
      Update Unsuccesful
    </v-alert>
  </section>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      checkIsOffer: this.product.isOffer,
      checkIsFeat: this.product.isFeat,
      productId: this.product._id,
      correct: '',
      errors:null,
    }
  },
  methods: {
    async submitForm() {

      await this.$axios
        .$put(`${process.env.apiUrl}/products/${this.productId}`, {
          productName: this.product.productName,
          artist: this.product.artist,
          price: this.product.price,
          offerPrice: this.product.offerPrice,
          isOffer: this.checkIsOffer,
          isFeat: this.checkIsFeat,
          img3: this.product.img3,
          img4: this.product.img4,
        })
        .then((response) => {
          console.log(response)
          this.correct = 'true'
        })
        .catch((error) => {
          console.log(error)
          this.correct = 'false'
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 1em;
}
</style>