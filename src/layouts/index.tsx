import styles from './index.module.scss'

const Content = defineComponent({
  name: 'Content',
  setup() {
    return {}
  },
  render() {
    return (
      <div class={styles.container}>
        <router-view />
      </div>
      
    )
  }
})

export default Content