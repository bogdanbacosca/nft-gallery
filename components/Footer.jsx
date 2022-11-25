import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='bg-slate-900 text-gray-100 w-full'>
            <div className='container flex flex-wrap p-5 flex-col items-center my-0'>
                <a href='/'>
                <span className='text-sm'>Copyright ©</span>
                </a>
                <Link href='/'>
                    <a>
                        <Image src='/images/poker.png' width={120} height={42} alt='logo'></Image>
                    </a>
                </Link>

            </div>
        </footer>
    )
}