import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
       <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
     
        <nav className="flex justify-center space-x-6 pt-4 align-middle">
          <Link href="/" className="hover:underline">home</Link>
          <Link href="/about" className="hover:underline">about</Link>
          <Link href="/apply" className="bg-black text-white px-4 py-2 rounded-full">+ Add image</Link>
          <Link href="/donate" className="hover:underline">github</Link>
          <Link href="/twitter" className="hover:underline">twitter</Link>
        </nav>

     
        <div className=" p-16 mb-8">
          <h1 className="text-3xl font-light mb-2">the autos of bengaluru</h1>
          <p className="text-5xl italic font-light mb-2"> get free gyaan </p>
          <h2 className="text-6xl font-bold"> from the philosphers </h2>
        </div>
      
      
    
      </div>
   
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/blrauto.jpg"
            alt="Image 1"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/blrauto.jpg"
            alt="Image 2"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/blrauto.jpg"
            alt="Image 3"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/blrauto.jpg"
            alt="Image 4"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/blrauto.jpg"
            alt="Image 5"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/blrauto.jpg"
            alt="Image 6"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/blrauto.jpg"
            alt="Image 7"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/blrauto.jpg"
            alt="Image 8"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/blrauto.jpg"
            alt="Image 9"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/blrauto.jpg"
            alt="Image 10"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/blrauto.jpg"
            alt="Image 11"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/blrauto.jpg"
            alt="Image 12"
          />
        </div>
      </div>
    </div>

    </>
  );
}
