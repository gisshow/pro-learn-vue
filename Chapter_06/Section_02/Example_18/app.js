var app = new Vue({
  el: '#app',
  data: {
    fontSize: 0,
    selected: 'dark',
    fontSizeObject: { fontSize: '0px' },
    fontColorObject: { color: 'red' }
  },
  watch: {
    fontSize: function() {
      this.fontSizeObject.fontSize = this.fontSize + 'px';
    }
  },
});
