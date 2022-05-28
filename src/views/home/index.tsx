import { defineComponent } from 'vue'
import styles from './index.module.scss'

export default defineComponent({
  name: 'Home',
  setup() {
  },
  render() {
    return (
      <div class={styles.container}>
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