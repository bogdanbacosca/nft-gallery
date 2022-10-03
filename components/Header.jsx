import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className='bg-slate-900 text-gray-100 shadow-xl w-full sticky top-0 font-medium'>
            
            
            
            <div className='container mx-auto my-0 p-5 flex flex-wrap items-center flex-col md:flex-row'>

                <Link href='/'>
                <a className='flex items-center md:w-1/5 md:justify-start mb-2 md:mb-0'>
                        <Image src='/images/poker.png' width={120} height={42} alt='logo'></Image>
                    </a>
                </Link>

                <nav className='flex flex-wrap w-4/5 items-center justify-center md:justify-end m-0 p-0 text-sm'>
                    <Link href='/'>
                        <a className='px-0 hover:text-blue-400'>
                            Home
                        </a>
                    </Link>
                    <Link href='/marketplace'>
                        <a className='px-2 hover:text-blue-400'>
                            Marketplace
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a className='hover:text-blue-400'>
                            About
                        </a>
                    </Link>
                </nav>

            </div>
        </header>
    )
}