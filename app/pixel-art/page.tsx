export default function Page() {
  return (
    <>
      <h1 className="text-4xl font-bold">
        Welcome to Collaborative Pixel Art!
      </h1>
      <section className="flex-1 flex flex-col gap-2">
        <h3 className="text-xl">Draw something</h3>
        <canvas
          id="pixel"
          className="bg-white border border-slate-300 rounded-md w-[95%]"
        >
          Your browser does not support canvas.
        </canvas>
      </section>
    </>
  );
}
