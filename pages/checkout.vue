<template>
  <div class="wrapper">
    <div class="data">
      <h2>{{ $t('customerData') }}</h2>
      <form name="order" action="" method="post">
        <div>
          <label class="form-label" for="name"> {{ $t('fullName') }}*: </label>
          <br />
          <input id="name" class="form-field" name="name" required />
        </div>
        <div>
          <label class="form-label" for="email"> {{ $t('email') }}*: </label>
          <br />
          <input id="email" class="form-field" name="email" />
        </div>
        <div>
          <label class="form-label" for="phone"> {{ $t('phone') }}: </label>
          <br />
          <input id="phone" class="form-field" name="phone" />
        </div>
        <div style="width: 100%">
          <label class="form-label" for="address"> {{ $t('address') }}* : </label>
          <br />
          <input style="width:100%" id="address" class="form-field" name="address" />
        </div>
      </form>
    </div>
    <!-- The next div shows the cart without the functionality -->
    <div class="details">
      <h2>{{ $t('orderDetails') }}</h2>
      <v-list class="cart-items">
        <v-list-item
          v-for="product in shoppingCart"
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
                x {{ product.amount }}
              </span>
            </v-list-item-title>
            <v-list-item-content>
              {{ product.price * product.amount }} $
            </v-list-item-content>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <p>{{ $t('shippingCost') }}: {{ shipping }} $</p>
      <h3>Total: {{ parseFloat(totalSum) + parseFloat(shipping) }} $</h3>
    </div>
  </div>
</template>

<script>
export default {
  path: '../checkout',
  name: 'CheckoutPage',

  data() {
    return {
      // cart
      shoppingCart: [],
      // shipping base cost
      shipping: 3,
      fastShipping: 8,
    }
  },
  computed: {
    totalSum() {
      /// Sums all the prices and returns a TOTAL price

      let sum = 0

      for (const product of this.shoppingCart) {
        sum += product.price * product.amount
      }

      return sum.toFixed(2)
    },
  },
  // gets the cart from localstorage
  watch: {
    shoppingCart: {
      handler(newValue) {
        localStorage.setItem('shoppingCart', JSON.stringify(newValue))
      },
    },
  },
  mounted() {
    this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || '[]')
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  margin-top: 1.5em;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  & > .data {
    width: 60%;
    @media screen and (max-width: 850px) {
      width: 92%;
    }
  }
  & > .details {
    width: 35%;
    position: relative;
    margin-bottom: 30em;
    @media screen and (max-width: 850px) {
      display: none;
    }
  }
}
form {
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  & div {
    width: 45%;
    margin: 0.5em;
  }
}
</style>