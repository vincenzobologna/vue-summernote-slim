# vue-summernote-slim

after install use it with those params (many others in summernote documentation):

<vue-summernote-slim
    :ref="name"
    :name="name"
    :placeholder="placeholder"
    :height="height"
    :minHeight="minHeight"
    :maxHeight="maxHeight"
    :focus="focus"
    :class="classes"
></vue-summernote-slim>

remember to setup props, watch (to get starting value on edit form), and on mounted to get content typed, for example:

this.summernote.$on('onChange', function (contents) {
  this.$emit('input', contents)
})
