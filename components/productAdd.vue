<template>
  <section>
    <h4>Add Product</h4>
    <v-form method="post" @submit.prevent="submitForm()">
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="productName"
              label="Product name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="artist"
              label="Artist"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="price"
              label="Main price"
              required
              type="number"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="offerPrice"
              label="Price in offer"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-checkbox v-model="isClothing" label="Is Clothing"></v-checkbox>
          </v-col>
          <v-col cols="4">
            <v-checkbox v-model="isOffer" label="Is Offer"></v-checkbox>
          </v-col>
          <v-col cols="4">
            <v-checkbox v-model="isFeat" label="Is Featured"></v-checkbox>
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="category"
              :items="categories"
              label="Category"
              outlined
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="sizes"
              label=" Sizes or quantity (Unchangeable for now)"
              :value="sizes"
              disabled
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="img1"
              label=" First display image"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="img4"
              label=" Second display image"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="img2"
              label=" First artistic image"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="img3"
              label=" Second artistic image"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="design1"
              label=" First design"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="design2"
              label=" Second design"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="base1"
              label=" First empty mock "
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="base2"
              label=" Second empty mock"
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-btn type="submit" dark> Add product</v-btn>
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
      Add Succesful
    </v-alert>
    <v-alert
      v-if="correct === 'false'"
      type="error"
      dismissible
      style="width: fit-content; margin: 1em"
    >
      Add Unsuccesful
    </v-alert>
  </section>
</template>

<script>
export default {
  data() {
    return {
      correct: '',
      productName: null,
      artist: null,
      price: null,
      offerPrice: null,
      isClothing: null,
      category: null,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isOffer: null,
      isFeat: null,
      img1: null,
      img2: null,
      img3: null,
      img4: null,
      design1: null,
      design2: null,
      base1: null,
      base2: null,
      errors: null,
      categories: ['tshirt', 'sweat', 'acc'],
    }
  },
  methods: {
    submitForm() {
      this.$axios
        .post(`${process.env.apiUrl}/products`, {
          productName: this.productName,
          artist: this.artist,
          price: this.price,
          offerPrice: this.offerPrice,
          isClothing: this.isClothing,
          category: this.category,
          sizes: this.sizes,
          isOffer: this.isOffer,
          isFeat: this.isFeat,
          img1: this.img1,
          img2: this.img2,
          img3: this.img3,
          img4: this.img4,
          design1: this.design1,
          design2: this.design2,
          base1: this.base1,
          base2: this.base2,
        })
        .then((response) => {
          console.log(response)
          if (response.data._id) {
            console.log(response)
            this.correct = 'true'
          }
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