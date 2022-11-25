import Layout from "../components/Layout"
import Link from "next/link"
import Image from "next/image"

export default function Marketplace() {
    return (
<Layout title='Page under construction'>
    <div className="flex flex-col w-full rounded-lg m-0 py-2 px-0 bg-slate-600 justify-center items-center text-white">
    <h1 className="text-lg font-medium">Marketplace under construction</h1>
    <Link href='/'>
    <a className='pb-1 text-gray-200 hover:text-blue-400'>
    Go back
    </a>
    </Link>
    <Image className="rounded" src='/images/meme.png' width={280} height={280} />
    </div>

</Layout>
    )
}