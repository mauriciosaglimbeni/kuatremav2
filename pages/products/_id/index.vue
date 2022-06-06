<template>
  <section class="main-container">
    <div class="image-showcase">
      <div
        :style="{ backgroundImage: 'url(' + product.img1 + ')' }"
        style="background-size: cover; height: auto"
      ></div>
      <div
        :style="{ backgroundImage: 'url(' + product.img2 + ')' }"
        style="background-size: cover; height: auto"
      ></div>
      <div
        :style="{ backgroundImage: 'url(' + product.img3 + ')' }"
        style="background-size: cover; height: auto"
      ></div>
      <div
        :style="{ backgroundImage: 'url(' + product.img4 + ')' }"
        style="background-size: cover; height: auto"
      ></div>
    </div>
    <div class="information">
      <!-- go to products link -->
      <nuxt-link
        :to="localePath('/products')"
        style="font-size: 14px; color: gray; cursor: pointer"
        >{{ $t('return') }}
      </nuxt-link>
      <h1 class="product-name">{{ product.productName }}</h1>
      <h2 class="artist-name">by {{ product.artist }}</h2>
      <!-- Checks if the product is in offer and prints someting -->
      <h2 v-if="product.isOffer">
        <span class="old-price"> {{ product.price }} $</span>
        <span class="offer-price">{{ product.offerPrice }} $ </span>
      </h2>
      <h2 v-else class="price">{{ product.price }} $</h2>
      <!-- buttons for sizes or quantity -->
      <h2 v-if="!product.isClothing" class="artist-name">
        {{ $t('qtyChoose') }} :
      </h2>
      <h2 v-else class="artist-name">{{ $t('sizeChoose') }} :</h2>

      <div class="button-holder">
        <button
          v-for="(size, index) in product.sizes"
          :key="index"
          class="size-button"
          @click="selectedSize = size"
        >
          {{ size }}
        </button>
      </div>
      <!--  edit button with its modal -->

      <v-dialog v-model="dialog" dark width="fit-content">
        <template #activator="{ on, attrs }">
          <button
            v-if="product.isClothing"
            class="edit-button"
            v-bind="attrs"
            v-on="on"
          >
            {{ $t('edit') }}
          </button>
        </template>
        <!-- This is the edit modal -->
        <customize-product :name="product.productName" :img1="product.img1" :img4="product.img4"></customize-product>
      </v-dialog>

      <button class="buy-button" @click="addToCart(product)">
        {{ $t('addToCart') }}
      </button>
      <!-- If no selected size this appears as in the addToCart method -->
      <v-alert
        v-if="alert === true"
        type="error"
        dismissible
        style="width: fit-content; margin-inline: auto"
      >
        {{ $t('sizeAlert') }}
      </v-alert>
    </div>
  </section>
</template>

<script>
export default {
  path: '/',
  name: 'ProductPage',
  // fetch data from api

  async asyncData(context) {
    const { data } = await context.$axios.get(
      `${process.env.apiUrl}/products/${context.route.params.id}`
    )
    return {
      product: data,
    }
  },
  data() {
    return {
      // finalprice
      finalPrice: 0,
      // size picker
      selectedSize: '',
      alert: false,
      // cart array
      shoppingCart: [],
      editModal: false,
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
    this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || '[]')
  },
  methods: {
    //  add element to cart
    addToCart(product) {
      //  sets the alert to false so it resets
      this.alert = false
      //  if a size has been chosen
      if (this.selectedSize !== '') {
        let exists = false
        // sets the final product price checking if it is an offer
        if (this.isOffer) {
          this.finalPrice = product.offerPrice
        } else {
          this.finalPrice = product.price
        }
        // checks if item is already in the cart, if it is updates amount otherwise, adds it to the array
        for (const cartItem of this.shoppingCart) {
          if (
            cartItem.product === product._id &&
            cartItem.size === this.selectedSize
          ) {
            cartItem.amount = cartItem.amount + 1
            exists = true
            break
          }
        }
        if (!exists) {
          this.shoppingCart.push({
            product: product._id,
            name: product.productName,
            amount: 1,
            price: this.finalPrice,
            img: product.img1,
            size: this.selectedSize,
          })
        }
      } else {
        this.alert = true
      }
    },
  },
}
</script>

<style lang="scss" scoped src="../../../assets/css/product.scss">
</style>