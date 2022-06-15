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
          <v-dialog v-model="addModal" max-width="50%">
            <template #activator="{ on, attrs }">
              <v-btn dark class="mb-2" v-bind="attrs" v-on="on">
                Add a new Product
              </v-btn>
            </template>
            <section class="modal">load the add component here</section>
          </v-dialog>
          <!-- Dialog delete -->
          <v-dialog v-model="deleteModal" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this product?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <!-- table actions -->
      <template #[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </main>
</template>
<script>
export default {
  path: '../adminzone',
  name: 'AdminZone',
  layout: 'AdminZone',
  // variables
  data() {
    return {
      addModal: false,
      deleteModal: false,
      products: [],
      headers: [
        { text: 'Actions', value: 'actions', sortable: false },
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
  methods: {
    editItem(item) {
      return item
    },
    // item deleting methods
    deleteItem(item) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.deleteModal = true
    },

    deleteItemConfirm() {
      this.products.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    closeDelete() {
      this.deleteModal = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
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
