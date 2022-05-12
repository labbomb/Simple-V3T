import { defineComponent } from 'vue'
import styles from './index.module.scss'

const Content = defineComponent({
  name: 'Content',
  setup() {
    return {}
  },
  render() {
    return (
      <div>
        <div class={styles.container}>this is header</div>
        <router-view />
      </div>
      
    )
  }
})

export default Content