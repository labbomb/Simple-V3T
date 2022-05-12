import { useRouter } from 'vue-router'
import type { Router } from 'vue-router'

export function useLogin() {
  const router: Router = useRouter()

  const handleLogin = () => {
    router.push({ path: 'home' })
  }

  return {
    handleLogin
  }
}
