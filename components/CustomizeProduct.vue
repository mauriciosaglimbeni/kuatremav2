<template>
  <section>
    <div class="wrapper">
      <div ref="editor" class="editor">
        <vue-draggable-resizable
          :w="100"
          :h="100"
          :parent="true"
          class="design"
        >
          <img :src="product.des1" style="width: 100%; height: 100%" />
        </vue-draggable-resizable>

        <vue-draggable-resizable
          :w="100"
          :h="100"
          :parent="true"
          class="design design2"
        >
          <img :src="product.des2" style="width: 100%; height: 100%" />
        </vue-draggable-resizable>

        <div class="mock">
          <img
            src="https://kuatrema.sirv.com/white-sw-1.png"
            style="width: 90%; height: auto"
          />
        </div>
        <div class="mock">
          <img
            src="https://kuatrema.sirv.com/white-sw-2.png"
            style="width: 90%; height: auto"
          />
        </div>
      </div>

      <div class="options">
        <p style="color: red; font-size: 12px">*{{ $t('designWarn') }}</p>
        <h3>{{ $t('editProduct') }}</h3>
        <h5>ORIGINAL</h5>
        <div class="original">
          <img :src="product.img1" alt="Original product image 1" />
          <img :src="product.img4" alt="Original product image 2" />
        </div>
        <div v-if="captured">
          <h5>{{ $t('edited') }}</h5>
          <div ref="edited" style="height: 12em; margin-bottom: 5em">
            <img
              :src="imgData"
              alt="edited image goes here"
              style="height: 12em; width: 100%"
            />
            <p>{{ $t('editFee') }} <b> 3$</b></p>

            <p v-if="product.isOffer">
              {{ $t('price') + ':' }} <b>{{ product.offerPrice + 3 }} $</b>
            </p>
            <p v-else>
              {{ $t('price') + ':' }} <b>{{ product.price + 3 }} $</b>
            </p>
          </div>
        </div>
        <div class="button-holder">
          <button :disabled="capturing" @click="createImage()">
            {{ $t('confirmEdit') }}
          </button>
          <button v-if="captured" @click="createImage()">
            {{ $t('addToCart') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['product'],
  data() {
    return {
      viewModel: true,
      capturing: false,
      captured: false,
      imgData: '',
    }
  },

  methods: {
    // create the image of the edited product with dom to image more
    createImage() {
      this.captured = true
      this.capturing = true
      // get DOM element with refs value, see editor html to see ref name
      const editedProduct = this.$refs.editor
      //  using the domtoimage that we get from the plugin to transform our edit section into an image
      this.$domtoimage
        .toPng(editedProduct)
        .then((dataUrl) => {
          this.imgData = dataUrl
          this.capturing = false
        })
        .catch((error) => {
          this.capturing = false
          this.captured = false
          console.error('Oops, something went wrong!', error)
        })
      return this.imgData
    },
  },
}
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 0.5em;
}
h5 {
  font-weight: 400;
  text-align: center;
}
.wrapper {
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  background: white;
  @media screen and (max-width: 962px) {
    margin: auto;
    align-content: center;
  }
}
.editor {
  border: rgba(0, 0, 0, 0.263) 3px solid;
  background-color: rgba(179, 238, 246, 0.464);
  height: 30em;
  width: 65em;
  margin-right: 1em;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  & .mock {
    height: 100%;
    width: 50%;
    background: center / contain no-repeat;
  }
  @media screen and (max-width: 960px) {
    height: 20em;
  }
}
.design {
  border: none;
}
.options {
  width: auto;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
}
.original {
  height: 12em;
  display: flex;
  justify-content: space-around;
}

.button-holder {
  display: flex;
  gap: 1em;
  justify-content: center;
}
button {
  font-size: 18px;
  text-align: center;
  display: block;
  padding: 6px;
  height: 2.6em;
  border-radius: 5px;

  background-color: rgb(29, 21, 21);
  color: white;
  &:hover {
    background-color: black;
  }
}
</style>