export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      required: false,
      default: 'No name given'
    },
    pic: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  data() {
    return {
      selected: false
    }
  },
  methods: {
    setSelected() {
      this.selected = !this.selected
    }
  }
}
