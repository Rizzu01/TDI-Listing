import hero from "../assets/images/hero.png";

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gray-700 uppercase tracking-wide mb-3">
            Find The Best
          </p>
<h1 className="text-5xl lg:text-6xl font-bold leading-[1.15] mb-6 bg-gradient-to-r from-[#ff7a00]  to-white bg-clip-text text-transparent pb-2 ">
  SOFTWARE &
  <br/>
  IT COMPANY
</h1>

          <p className="text-lg text-gray-700 mb-6">
            For your business needs
          </p>

          <div className="flex max-w-xl border border-orange-300 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search Softwares or Companies"
              className="flex-1 px-5 py-3 outline-none text-sm"
            />

            <a href="#" className="bg-orange-500 text-white px-8 py-3 text-sm rounded-full m-[10px] border border-orange-500 hover:text-orange-500 hover:border hover:border-orange-500 hover:bg-transparent transition-all duration-300">
              Search
            </a>
          </div>
        </div>

        <div className="flex justify-center">
        


         <img src={hero} alt="Hero" className="w-full hero-float" />
        </div>
      </div>
    </section>
  );
}

export default Hero;