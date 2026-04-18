import heroo from "../assets/hreoo.png";
export default function FeaturedProducts() {
  return (
    <div>
      <section className=" flex justify-center mt-6 p-4 border-b-2 border-black/15">
        <div className="container flex flex-col gap-14 mb-6">
          <div className="flex justify-between items-center p-2 lg:pr-6 ">
            <h1 className=" text-[20px] lg:text-[30px] font-bold">
              {" "}
              Featured Products
            </h1>
            <button className="bg-blue-700 px-3 py-2 p-2 text-white rounded-[10px] font-semibold text-[13px] lg:text-[14px] hover:bg-white hover:text-black hover:border hover:border-black/20 transition duration-300   ">
              View All Product
            </button>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-4 gap-15 lg:gap-6">
            <div class="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-gray-400 hover:shadow-gray-700 transition duration-300">
              <div
                class="relative h-65 mx-4 -mt-6  overflow-hidden rounded-xl bg-clip-border shadow-md shadow-gray-400"
                style={{ backgroundImage: `url(${heroo})` }}
              ></div>
              <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Product 1
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
              <div class="p-6 pt-0 flex justify-between items-center">
                <button
                  data-ripple-light="true"
                  type="button"
                  class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  View
                </button>
                <span className="font-bold text-[25px] text-blue-500">
                  350$
                </span>
              </div>
            </div>
            <div class="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-gray-400 hover:shadow-gray-700 transition duration-300">
              <div
                class="relative h-65 mx-4 -mt-6  overflow-hidden rounded-xl bg-clip-border shadow-md shadow-gray-400"
                // style={{ backgroundImage: `url(${heroo})` }}
              ></div>
              <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Product 2
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
              <div class="p-6 pt-0 flex justify-between items-center">
                <button
                  data-ripple-light="true"
                  type="button"
                  class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold . text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  View
                </button>
                <span className="font-bold text-[25px] text-blue-500">
                  350$
                </span>
              </div>
            </div>
            <div class="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-gray-400 hover:shadow-gray-700 transition duration-300">
              <div
                class="relative h-65 mx-4 -mt-6  overflow-hidden rounded-xl bg-clip-border shadow-md shadow-gray-400"
                // style={{ backgroundImage: `url(${heroo})` }}
              ></div>
              <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Product 3
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
              <div class="p-6 pt-0 flex justify-between items-center">
                <button
                  data-ripple-light="true"
                  type="button"
                  class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold View text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  View
                </button>
                <span className="font-bold text-[25px] text-blue-500">
                  350$
                </span>
              </div>
            </div>
            <div class="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-gray-400 hover:shadow-gray-700 transition duration-300">
              <div
                class="relative h-65 mx-4 -mt-6  overflow-hidden rounded-xl bg-clip-border shadow-md shadow-gray-400"
                style={{ backgroundImage: `url(${heroo})` }}
              ></div>
              <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Product 4
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
              <div class="p-6 pt-0 flex justify-between items-center">
                <button
                  data-ripple-light="true"
                  type="button"
                  class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  View
                </button>
                <span className="font-bold text-[25px] text-blue-500">
                  350$
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
