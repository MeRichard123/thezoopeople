import Head from 'next/head';

const credits = () => {
    return (
        <div className="grid place-items-center align-center text-center m-2">
            <Head>
                <title>TheZooPeople | About</title>
            </Head>
            <h1 className="font-sora text-4xl my-7">About Us</h1>
            <h4 className="text-xl underline my-3">Writers</h4>
            <p>Oliver</p>
            <p>Louis</p>
            <h4 className="text-xl underline my-3">Sung By</h4>
            <p>Zack</p>
            <h4 className="text-xl underline my-3">A Big Thanks to Our Sponsors</h4>
            <p>Enrico</p>
            <h4 className="text-xl underline my-3">And Our Dancers</h4>
            <p>Eor12xp</p>
            <p>Taylorthechicken</p>
            <h4 className="text-xl underline my-3">Music</h4>
            <p>Matthew</p>
            <h4 className="text-xl underline my-3">Camera</h4>
            <p>Louis</p>
            <p>Matthew</p>
        </div>
    )
}

export default credits
