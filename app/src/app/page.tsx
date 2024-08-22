import Image from "next/image";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
