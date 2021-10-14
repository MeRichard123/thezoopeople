import Head from 'next/head';

const tours = () => {
    return (
        <div className="grid place-items-center align-center text-center m-2">
            <Head>
                <title>TheZooPeople | Tours</title>
            </Head>
            <h1 className="font-sora text-4xl my-7">Tours</h1>
            <p className="text-xl underline">All our tours are currently <span className="text-red-600">Sold Out</span></p>
            <p className="text-xl">Feel Free to Click  the button to be notified when a tour is available.</p>
            <button className="m-3 py-2 px-7 border-2 border-black mt-6 btn font-bold min-w-max sub"
                onClick={() => alert("Notified")}>
                Notify Me
            </button>
        </div>
   )
}

export default tours
