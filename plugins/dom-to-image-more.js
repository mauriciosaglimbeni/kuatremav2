import domtoimage from 'dom-to-image-more'
// import Vue from 'vue'

export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('domtoimage',  domtoimage)
  }