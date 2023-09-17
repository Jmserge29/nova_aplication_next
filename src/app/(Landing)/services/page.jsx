import Card from "@/components/CardServices/Card";
import NavBar from "@/components/NavBar/NavBar";

export const metadata = {
  title: "Services",
};

function Page() {
  return (
    <>
      <NavBar />
      {/* background Gradient Start */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      {/* Content */}

      <div className="isolate pt-48 px-8">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-5xl text-stone-900 font-bold tracking-tight">
            Services <span className="text-cyan-400">API</span>
          </h2>
          <p className=" text-lg pb-12 pt-6 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem possimus aliquam itaque alias officia, fuga odio ab dolor ullam quibusdam aliquid maxime. Atque, veniam! Harum, eligendi doloremque. Eum, impedit!
          </p>
        </div>
        <hr data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className=" my-8 sm:mx-96 border-solid border-4 rounded-lg border-cyan-400" />
        <div className="mx-auto mt-8 flex flex-wrap container justify-around px-5">
          
          <div className="my-4" data-aos="zoom-out-up">
            <Card/>
          </div>
          <div className="my-4" data-aos="zoom-out-up">
            <Card />
          </div>
          <div className="my-4" data-aos="zoom-out-up">
            <Card/>
          </div>
          <div className="my-4" data-aos="zoom-out-up">
            <Card/>
          </div>
          <div className="my-4" data-aos="zoom-out-up">
            <Card/>
          </div>
          <div className="my-4" data-aos="zoom-out-up">
            <Card/>
          </div>
          <div className="my-4" data-aos="zoom-out-up">
            <Card/>
          </div>
          <div className="my-4" data-aos="zoom-out-up">
            <Card/>
          </div>
          <div className="my-4" data-aos="zoom-out-up">
            <Card/>
          </div>
          <div className="my-4" data-aos="zoom-out-up">
            <Card/>
          </div>

          {/* <div className="my-2">
            <Card/>
          </div> */}
        </div>
      </div>

      {/* background Gradient End */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      
    </>
  );
}

export default Page;
