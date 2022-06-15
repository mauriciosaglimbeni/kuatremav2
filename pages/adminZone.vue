<template>
  <main>
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="5"
      :item-key="products.productName"
      class="elevation-1"
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        prevIcon: 'mdi-minus',
        nextIcon: 'mdi-plus',
      }"
    >
      <!-- Table top toolbar with add button -->
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title> Standard Products</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="addModal" max-width="65%">
            <template #activator="{ on, attrs }">
              <v-btn dark class="mb-2" v-bind="attrs" v-on="on">
                Add a new Product
              </v-btn>
            </template>
            <product-add></product-add>
            <!-- edit modal -->
          </v-dialog>
           <v-dialog v-model="editModal" max-width="65%">
            <product-update :product="selectedProduct"></product-update>
          </v-dialog>
        </v-toolbar>
        
      </template>
      <!-- table actions -->
      <template #[`item.actions`]="{item}">
        <v-icon small class="mr-2" @click="editModal = true; selectedProduct = item">mdi-pencil</v-icon>
      </template>
    </v-data-table>
  </main>
</template>
<script>
import ProductAdd from '../components/productAdd.vue'
import productUpdate from '../components/productUpdate.vue'
export default {
  name: 'AdminZone',
  components: { productUpdate, ProductAdd },
  path: '../adminzone',
  layout: 'AdminZone',
  selectedProduct: [],
  // variables
  data() {
    return {
      addModal: false,
      editModal: false,
      products: [],
      headers: [
        { text: '', value: 'actions', sortable: false },
        {
          text: 'Product Name',
          align: 'start',
          value: 'productName',
        },
        { text: 'Artist', value: 'artist' },
        { text: 'Category', value: 'category' },
        { text: 'Normal Price', value: 'price' },
        { text: 'Price in offer', value: 'offerPrice' },
        { text: 'Is clothing', value: 'isClothing' },
        { text: 'Sizes or quantities available', value: 'sizes' },
        { text: 'Is Offer', value: 'isOffer' },
        { text: 'Is Featured', value: 'isFeat' },
        { text: 'Main image 1 link', value: 'img1' },
        { text: 'Main image 4 link', value: 'img4' },
        { text: 'Secondary image 1 link', value: 'img2' },
        { text: 'Secondary image 2 link', value: 'img3' },
        { text: 'Main design link', value: 'design1' },
        { text: 'Secondary design link', value: 'design2' },
        { text: 'Base clothing link', value: 'base1' },
        { text: 'Base clothing link', value: 'base2' },
      ],
    }
  },
  // fetch product data from api
  async fetch() {
    this.productsLoading = true
    const data = await this.$axios.$get(`${process.env.apiUrl}/products`)
    this.products = data
    this.productsLoading = false
  },

}
</script>

<style scoped lang="scss">
main {
  margin-top: 5em;
  margin-inline: 1em;
}
.modal {
  width: 100%;
  height: 30em;
  background-color: lightgray;
}
</style>
