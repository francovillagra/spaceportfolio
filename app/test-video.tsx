// app/test-video/page.tsx (App Router)
export default function TestVideoPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <video 
        src="/encryption.webm"
        loop
        muted
        autoPlay
        playsInline
        className="w-1/2 h-auto"
      />
    </div>
  );
}
