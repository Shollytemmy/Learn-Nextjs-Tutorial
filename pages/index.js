import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <>
      <div>
       <h1> Home Page</h1>
       <button onClick={() => router.push("/gadgets")} className={styles.product}>Go to product page</button>
      

      </div>
    </>
  )
}
