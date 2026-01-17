type location = {
  videoUrl: string;
}

export default function Video({videoUrl}: location) {
  return (
    <div>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
