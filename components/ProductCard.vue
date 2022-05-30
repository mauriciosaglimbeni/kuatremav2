<template>
  <v-hover v-slot="{ hover }">
    <v-card
      elevation="0"
      class="card"
      @mouseover="hovered = true"
      @mouseout="hovered = false"
    >
      <nuxt-link :to="localePath('/products/' + productId)">
        <v-img
          v-if="hovered"
          contain
          class="white--text responsive-img"
          :src="productImg2"
        />

        <v-img
          v-else
          contain
          class="white--text responsive-img"
          :src="productImg1"
        />
      </nuxt-link>
      <div class="card-info-1">
        <span class="boldish"> {{ productName }} </span>
        <br />
        <!-- Shows a different span if product is in offer  -->
        <span v-if="isOffer">
          <span style="text-decoration: line-through; color: gray">
            {{ productPrice }} $</span
          >
          {{ productPrice2 }} $
        </span>
        <span v-else class="">{{ productPrice }} $</span>
      </div>

      <v-fade-transition>
        <v-overlay
          v-if="hover"
          class="overlay"
          absolute
          opacity="0"
          z-index="8"
          @mouseover="hovered = true"
          @mouseout="hovered = false"
        >
          <div class="button-holder">
            <button
              v-for="size in sizes"
              :key="size"
              class="size-button"
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
          <div class="button-holder">
            <button class="add-button" @click="addToCart(productId)">
              {{ $t('addToCart') }}
            </button>
          </div>
        </v-overlay>
      </v-fade-transition>
    </v-card>
  </v-hover>
  
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: [
    'productId',
    'productName',
    'productPrice',
    'productImg1',
    'productImg2',
    'isOffer',
    'productPrice2',
    'productCat',
    'sizes',
  ],
  data() {
    return {
      hovered: false,
      // finalprice
      finalPrice: 0,
      // size picker
      selectedSize: String,
      // cart array
      shoppingCart: [],
    }
  },
  // saves the cart to localstorage to have it persist in the page
  watch: {
    shoppingCart: {
      handler(newValue) {
        localStorage.setItem('shoppingCart', JSON.stringify(newValue))
      },
      deep: true,
    },
  },
  mounted() {
    this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || "[]")
  },
  methods: {
    //  add element to cart
    addToCart(product) {
      let exists = false
      // sets the final product price checking if it is an offer
      if(this.isOffer){
        this.finalPrice = this.productPrice2
      }else{
        this.finalPrice = this.productPrice
      }
      // checks if item is already in the cart, if it is updates amount otherwise, adds it to the array
      for (const cartItem of this.shoppingCart) {
        if (cartItem.product === product && cartItem.size === this.selectedSize) {
          cartItem.amount = cartItem.amount + 1
          exists = true
          break
        }
      }
      if (!exists) {
        this.shoppingCart.push({
          product,
          amount: 1,
          price: this.finalPrice,
          img: this.productImg1,
          size: this.selectedSize,
          name: this.productName
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped src="../assets/css/productCard.scss">
