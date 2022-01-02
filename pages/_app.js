import 'tailwindcss/tailwind.css'
import Link from "next/link"
import './styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <main className="flex flex-col min-h-screen">
     <header className="flex flex-col w-full text-center bg-secondary text-white py-8 border-b-4 border-accent">
        <h1 className="font-zoo sm:text-6xl text-3xl">TheZooPeople</h1>
        <nav className="mt-4 mb-4">
          <ul className="flex flex-wrap w-full align-bottom font-bold uppercase justify-center mt-4">
            <li className="mx-4 font-sora"><Link href="/">Home</Link></li>
            <li className="mx-4 font-sora"><Link href="/about">About</Link></li>
            <li className="mx-4 font-sora"><Link href="/tours">Tours</Link></li>
            <li className="mx-4 font-sora"><Link href="/albums">Albums</Link></li>
          </ul>
        </nav>
      </header>
      <div className="move">
      <Component {...pageProps} />
      </div>
      <footer className="mt-5 flex flex-col w-full text-center bg-secondary text-white py-8 border-t-4 border-accent justify-center items-center">
        <a
          href="https://www.youtube.com/channel/UCbfLtSXTrTEEJzc8LtEut3A"
          target="_blank"
          rel="noopener noreferrer"
          className="m-3 py-2 px-7 border-2 border-black mt-6 btn font-bold text-xl">
          Subscribe On Youtube
        </a>
        <p className="font-bold tracking-widest text-xl mt-4">&copy; TheZooPeople | {new Date().getFullYear()}</p>
        <p>Web Design Heavily Inspired by WhiteP4nth3r</p>
      </footer>
  </main>
  );
}

export default MyApp
