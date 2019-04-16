var $ = require('jquery')
var summernote = require('summernote/dist/summernote-lite.js')
require('summernote/dist/summernote-lite.css')
require('./index.css')

export default {
  install (Vue, options) {
    Vue.component('vue-summernote-slim', {
      render (createElement) {
        return createElement('div')
      },
      computed: {
        summernote () {
          return $(this.$el)
        }
      },
      mounted () {
        //$(this.$el).summernote()

        var self = this
        var initOptions = {
          lang: 'it-IT',
          placeholder: self.placeholder,
          height: self.height,
          minHeight: self.minHeight,
          maxHeight: self.maxHeight,
          focus: self.focus,
          callbacks: {
            onInit: function () {
              self.$emit('onInit')
            },
            onEnter: function () {
              self.$emit('onEnter')
            },
            onFocus: function () {
              self.$emit('onFocus')
            },
            onBlur: function () {
              self.$emit('onBlur')
            },
            onKeyup: function (e) {
              self.$emit('onKeyup', e)
            },
            onKeydown: function (e) {
              self.$emit('onKeydown', e)
            },
            onPaste: function (e) {
              self.$emit('onPaste', e)
            },
            onImageUpload: function (files) {
              self.$emit('onImageUpload', files)
            },
            onChange: function (contents) {
              self.$emit('onChange', contents)
            }
          }
        }
        var params = Object.assign({}, initOptions, options)
        $(this.$el).summernote(params)
      },
      created () {
        $(this.$el).summernote()
      },
      methods: {
        getVal () {
          var data  = $(this.$el).summernote('code')
          return data
        },
        run (code, value) {
          if (value == undefined) {
            $(this.$el).summernote(code)
          } else {
            $(this.$el).summernote(code, value)
          }
        }
      }
    })
  }
}