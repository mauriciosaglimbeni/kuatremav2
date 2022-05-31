<template>
  <!-- Shpping bag contents, drawer is in layout default.vue -->
  <div class="cart-wrapper">
    <h2>{{ $t('header5') }}</h2>
    <v-list class="cart-items">
      <v-list-item
        v-for="product in modelValue"
        :key="product"
        class="cart-items"
      >
        <v-list-item-avatar style="height: 4em; width: 4em">
          <img
            :src="product.img"
            alt="product avatar"
            style="height: 7em; width: 5em"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ product.name }} - {{ product.size }}
            <span style="float: right; margin-right: 2px; margin-top: 5px">
              {{ product.amount }}
              <v-btn
                icon
                style="font-size: 24px; position: relative; bottom: 4px"
                @click="removeFromCart(product)"
              >
                -
              </v-btn>
            </span>
          </v-list-item-title>
          <v-list-item-content>
            {{ product.price * product.amount }} $
          </v-list-item-content>
        </v-list-item-content>
      </v-list-item>
      <!-- If your cart has items, shows you the total and checkout buttons , else it shows you a message-->
      <div v-if="modelValue.length > 0" style="margin-left: 1.5em">
        <h3>Total: {{ totalSum }} $</h3>
        <br />
        <nuxt-link :to="localePath('/checkout')">
          <v-btn> {{ $t('checkout') }}</v-btn>
        </nuxt-link>
      </div>
      <v-list-item v-else>
        <p>{{ $t('emptyCart') }}</p>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],

  computed: {
    totalSum() {
      /// Sums all the prices and returns a TOTAL price

      let sum = 0

      for (const product of this.modelValue) {
        sum += product.price * product.amount
      }

      return sum.toFixed(2)
    },
  },

  methods: {
    removeFromCart(product) {
      // Looks for the item in the shopping cart array
      // Then, substracts one to the amount or removes it

      const shoppingCart = this.modelValue
      const productIndex = shoppingCart.findIndex(
        (item) => item.product === product.product
      )

      shoppingCart[productIndex].amount -= 1

      if (shoppingCart[productIndex].amount < 1) {
        shoppingCart.splice(productIndex, 1)
      }

      this.$emit('update:modelValue', shoppingCart)
    },
  },
}
</script>

<style lang="scss" scoped>
.cart-wrapper {
  width: 100%;
  position: relative;
  top: 7em;
  color: white;
  margin: 0.75em;
}
.cart-items {
  height: 7em;
}
</style>