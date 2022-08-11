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
      <div class={styles.container}>
        <div class={styles.card}>
          <div class={styles.logo}>Simple-V3T</div>
          <div class={styles.login} onClick={this.handleLogin}>LOGIN</div>
        </div>
      </div>
    )
  }
})

export default login
