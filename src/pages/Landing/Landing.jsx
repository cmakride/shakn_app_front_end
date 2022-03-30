import styles from './Landing.module.css'

const Landing = ({ user, profile}) => {
  return (
    <main className={styles.container}>
      <h1>Welcome {user ? 'back, ' + profile.name + '!' : 'to Shakn 🍸'}</h1>
    </main>
  )
}

export default Landing
