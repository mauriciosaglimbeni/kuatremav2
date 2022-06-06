<template>
  <section>
    <div class="wrapper">
      <div class="editor" 
      style="background-image: url('https://kuatrema.sirv.com/white-sw-2.png')">

      </div>
      <div class="options">
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
  props: ['img1', 'img4', 'name'],
}
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 1em;
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
    justify-content: center;
  }
}
.editor {
  border: rgba(0, 0, 0, 0.263) 3px solid;
  background: rgba(124, 239, 243, 0.444) center / contain no-repeat;
  height: 40em;
  width: 30em;
  margin-right: 1em;
  @media screen and (max-width: 960px) {
    height: 20em;
    background: rgba(124, 239, 243, 0.444) center / contain no-repeat;
  }
}
.options {
  width: min-content;
  @media screen and (max-width: 960px) {
    width: 80%;
  }
}
.original {
  height: 12em;
  display: flex;
  justify-content: space-around;
  & img {
    width: 10em;
  }
}
</style>