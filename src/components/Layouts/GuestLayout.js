import Head from 'next/head'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="font-sans text-gray-900 antialiased bg-blue-600">
                {children}
            </div>
        </div>
    )
}

export default GuestLayout
