<template>
  <!-- Shpping bag contents, drawer is in layout default.vue -->
  <div class="cart-wrapper">
    <h2>{{ $t('header5') }}</h2>
    <v-list  class="cart-items">
       <v-list-item v-for="product in modelValue" :key="product" class="cart-items" >
           <v-list-item-avatar  style="height: 4em; width: 4em">
               <img :src="product.img" alt="product avatar" style="height: 7em; width: 5em"/>
           </v-list-item-avatar>
           <v-list-item-content>
               <v-list-item-title :v-text="product.name"></v-list-item-title>
           </v-list-item-content>
       </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],

//   computed: {
//     totalSum() {
//       /// Sums all the prices and returns a TOTAL price

//       let sum = 0

//       for (const product of this.modelValue) {
//         sum += product.price * product.amount
//       }

//       return sum
//     },
//   },

  methods: {
    removeFromCart(product) {
      // Looks for the item in the shopping cart array
      // Then, substracts one to the amount or removes it

      const shoppingCart = this.modelValue
      const productIndex = shoppingCart.findIndex(
        (item) => item.uuid === product.uuid
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
.cart-items{
    height: 7em;
}
</style>