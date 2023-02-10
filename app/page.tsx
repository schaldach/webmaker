import { Inter } from '@next/font/google'
import styles from './page.module.scss'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className='text-3xl font-bold underline'>webmaker</div>
      <Link href='/signup'>criar uma conta</Link>
    </div>
  )
}
