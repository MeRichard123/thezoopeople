import Head from 'next/head';
                    
const albums = () => {
    return (
        <div className="grid place-items-center align-center">
            <Head>
                <title>TheZooPeople | Albums</title>
            </Head>
            <h1 className="font-sora text-4xl mt-7">Our Albums</h1>
            <div className="sm:w-1/2-screen sm:mt-5 mt-1 mx-1 sm:mx-5 w-screen">
                <div className="video-container border-2 border-tertiary">
                    <iframe
                        className="video"
                        src="https://www.youtube.com/embed/JOYtipQCfhk" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; cppboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default albums
