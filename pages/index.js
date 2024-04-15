import styles from '@/styles/Home.module.css'
import VerticalBar from '@/components/VerticalBar'
import HorizontalChart from '@/components/HorizontalChart'
import PieChart from '@/components/PieChart/Index'

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <VerticalBar />
        <PieChart />
        <HorizontalChart />
      </main>
    </>
  )
}
