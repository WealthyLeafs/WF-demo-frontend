import { Header } from '@/components/Header'
import { ModeToggle } from '@/components/custom/ModeToggle'
import Image from 'next/image'

export default function Home() {
  return (
    <Header className=''>
      <div className='w-2/5'>
        <Image alt="wealthyLeafs "src="/logo3.png" width={200} height={200} />

      </div>
      <nav className='w-2/5'>
        <ul className='flex flex-row'>
          <li >First</li>
          <li>Second</li>
          <li>Third</li>
          <li>Fourth</li>
        </ul>
      </nav>
      <div className='w-2/5'>
        <ModeToggle />
      </div>
    </Header>
  )
}
