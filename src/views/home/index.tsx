import styles from './index.module.scss'

export default defineComponent({
  name: 'Home',
  setup() {
  },
  render() {
    return (
      <div class={styles.container}>
        <h1>Home</h1>
      </div>
    )
  }
})