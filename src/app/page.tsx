export default function Home() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-950">
      <div className="relative text-center after:absolute after:h-px after:bg-gray-500 after:w-10 after:-bottom-px after:left-1/2 after:-translate-x-1/2 h-22">
        <div className="font-bold text-[56px] sm:text-[80px] leading-[80px] mb-5 text-white text-shadow-lg">
          {"nqh."}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {"docs"}
          </span>
        </div>
        <div className="text-xs sm:text-sm text-gray-400 text-shadow-lg">
          store all documents for&nbsp;<span className="font-bold">nqh</span>
          &nbsp;app
        </div>
      </div>
    </section>
  );
}
