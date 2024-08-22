import XPost from "./Xposts";

export default function Grid() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <div className="h-auto max-w-full rounded-lg" />
            <XPost posturl="https://x.com/urAvgKarthik/status/1826669425011163518" />
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
