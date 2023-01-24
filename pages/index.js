import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Wears } from '@/Components/Wears'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
       <h1> Home Page</h1>
       <Link href="/about">Go to about page</Link>
       <Wears />

      </div>
    </>
  )
}
