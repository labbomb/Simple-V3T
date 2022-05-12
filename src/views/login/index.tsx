import { defineComponent } from 'vue'
import { useLogin } from './use-login'
import styles from './index.module.scss'

const login = defineComponent({
  name: 'login',
  setup() {
    const { handleLogin } = useLogin()
    return { handleLogin }
  },
  render() {
    return (
      <div onClick={this.handleLogin} class={styles.container}>login</div>
    )
  }
})

export default login
