<template>
  <section>
    <div class="wrapper">
      <div class="editor">
        <vue-draggable-resizable
          :w="100"
          :h="100"
          :parent="true"
          class="design"
          :style="design1"
        >
        </vue-draggable-resizable>
        <vue-draggable-resizable
          :w="100"
          :h="100"
          :parent="true"
          class="design design2"
          :style="design2"
        >
        </vue-draggable-resizable>
        <div
          class="mock"
          style="
            background-image: url('https://kuatrema.sirv.com/white-sw-2.png');
          "
        ></div>
        <div
          class="mock"
          style="
            background-image: url('https://kuatrema.sirv.com/white-sw-1.png');
          "
        ></div>
      </div>

      <div class="options">
        <p style="color: red; font-size: 12px">*{{ $t('designWarn') }}</p>
        <h3>{{ $t('editProduct') }}</h3>
        <h5>ORIGINAL</h5>
        <div class="original">
          <img :src="img1" alt="Original product image 1" />
          <img :src="img4" alt="Original product image 2" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['img1', 'img4', 'des1', 'des2'],
  data() {
    return {
      viewModel: true,
      design1: "background-image: url("+this.des1+")",
      design2: "background-image: url("+this.des2+")"
    }
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
  background: rgba(124, 239, 243, 0.444) center / contain no-repeat;
  height: 30em;
  width: 65em;
  margin-right: 1em;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  & .mock {
    height: 100%;
    width: 50%;
    background: center / contain no-repeat;
  }
  @media screen and (max-width: 960px) {
    height: 20em;
    background: rgba(124, 239, 243, 0.444) center / contain no-repeat;
  }
}
.design {
  position: absolute;
  border: none;
  z-index: 8;
  background: center / contain no-repeat;
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
</style>