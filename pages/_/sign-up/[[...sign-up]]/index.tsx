import { SignUp } from '@clerk/nextjs'
import styles from '../../../assets/Auth.module.css'

export default function Page() {
  return (
    <div className={styles.auth}>
      <SignUp />
    </div>
  )
}
