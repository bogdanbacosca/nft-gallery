import Layout from "../components/Layout"

export default function AboutPage() {
    return(
        <Layout title='About'>
            <div className="flex w-full flex-col justify-start">
            <h1 className="p-3 text-3xl font-medium">
                About
            </h1>
                <div className="text-white border-l-4 border-blue-400 m-3 px-5">
                    <h2 className="text-2xl font-medium">Test site</h2>  
                    <p className="text-gray-100 text-base">
                    Under construction<br></br>
                    </p>
                    <p className="text-sm text-gray-300">
                    v1.0 coming soon
                    </p>
                </div>
                </div>
        </Layout>
    )
}