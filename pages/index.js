import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-full">
      <Head>
        <title>TheZooPeople</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <section className="grid place-items-center text-center mt-6">
        <div className="leading-5 mx-3">
          <p className="text-3xl m-3 uppercase font-bold">Hi, We are The Zoo People.</p>
          <p className="text-xl leading-10">A group of young artists trying to make it big in Japan.</p>
          <p className="text-xl leading-10">We once featured in a twitch affiliates  stream TWICE. We&#39;re global baby.</p>
        </div>
      </section>
    </div>
  )
}
