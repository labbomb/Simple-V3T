import { defineComponent, PropType } from 'vue'
import styles from './index.module.scss'

const props = {
  msg: {
    type: String as PropType<string>,
    default: ''
  }
}
export default defineComponent({
  name: 'Home',
  props,
  setup() {
  },
  render() {
    return (
      <div class={styles.container}>
        <div>{this.msg}</div>
        <p>
          Recommended IDE setup:
          <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
          +
          <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        </p>
        <p>
          <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Documentation
          </a>
          |
          <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
        </p>
      </div>
    )
  }
})