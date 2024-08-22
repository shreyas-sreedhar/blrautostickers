import Grid from "@/components/grid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <nav className="flex justify-center space-x-6 pt-4 align-middle">
          <Link href="/" className="hover:underline">
            home
          </Link>
          <Link href="/about" className="hover:underline">
            about
          </Link>
          <Link
            href="/apply"
            className="bg-black text-white px-4 py-2 rounded-full"
          >
            + Add image
          </Link>
          <Link
            href="https://www.github.com/shreyas-sreedhar/blrautostickers"
            className="hover:underline"
          >
            github
          </Link>
          <Link href="https://twitter.com" className="hover:underline">
            twitter
          </Link>
        </nav>

        <div className="p-16 mb-8">
          <h1 className="text-3xl font-light mb-2">Subltting of bengaluru</h1>
          <p className="text-5xl italic font-light mb-2"> get free gyaan </p>
          <h2 className="text-6xl font-bold"> Bengaluru Auto ಕವಿತೆ </h2>
        </div>
      </div>
      <div className="p-8"> 
      <Grid />
      </div>
    </>
  );
}
