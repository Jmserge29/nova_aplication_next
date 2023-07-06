function DetailsUser() {
  return (
    <div className="">
      <div className=" my-4 mx-2 py-3 shadow-sm rounded-md bg-gray-300 text-stone-950">
        <h4 className=" ml-8 mt-2 mb-5 text-lg leading-3 font-semibold lg:text-xl">
          Detalles
        </h4>
        <p className="text-center pb-6">
          {" "}
          ✨ 𝑰𝒏𝒈. 𝑺𝒊𝒔𝒕𝒆𝒎𝒂𝒔 ✨<br /> 𝑪𝒐𝒏𝒕𝒂𝒅𝒐𝒓 𝑷𝒖𝒃𝒍𝒊𝒄𝒐 <br /> 𝑪𝒊𝒆𝒏𝒕𝒊́𝒇𝒊𝒄𝒐
        </p>
      </div>
      <div>
        <div className="my-4 mx-2 py-6 shadow-sm rounded-md bg-gray-300 text-stone-950">
          <div className="grid xl:grid-cols-3 grid-cols-1">
            <div>
              <h4
                className=" ml-8 mt-2 mb-2 text-xl leading-3 font-semibold"
                style={{ display: "inline" }}
              >
                Amigos
              </h4>
            </div>
            <div className="ml-8 sm:ml-8 xl:text-right mr-7 col-span-1 sm:col-span-2 justify-center">
              <span className="  text-blue-500 cursor-pointer">
                Ver todos los amigos
              </span>
              <br />
            </div>
          </div>

          <span className="ml-8 text-base text-stone-500">1,224 Amigos</span>
          <div className="flex pt-2 px-2 sm:px-4 justify-around flex-wrap mx-auto">
            <div
              className="my-2 mx-2 rounded-lg w-20 sm:w-32 h-20 sm:h-32 bg-cover"
              style={{
                backgroundImage: `url("https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9")`,
              }}
            ></div>
            <div
              className="my-2 mx-2 rounded-lg w-20 sm:w-32 h-20 sm:h-32 bg-cover"
              style={{
                backgroundImage: `url("https://www.publimetro.com.mx/resizer/h2oY_HTQJ3DA3QeX4ij4qRuAt6E=/1024x1024/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/OC4NSXVPJ5E3RD4RU62UWWFJRI.png")`,
              }}
            ></div>
            <div
              className="my-2 mx-2 rounded-lg w-20 sm:w-32 h-20 sm:h-32 bg-cover"
              style={{
                backgroundImage: `url("https://yt3.googleusercontent.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj")`,
              }}
            ></div>
            <div
              className="my-2 mx-2 rounded-lg w-20 sm:w-32 h-20 sm:h-32 bg-cover"
              style={{
                backgroundImage: `url("https://i.scdn.co/image/ab6775700000ee8570dd928d108eab4eba7caf3b")`,
              }}
            ></div>
            <div
              className="my-2 mx-2 rounded-lg w-20 sm:w-32 h-20 sm:h-32 bg-cover"
              style={{
                backgroundImage: `url("https://i.scdn.co/image/ab6761610000e5ebbdd0ad2e600ed916df760703")`,
              }}
            ></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default DetailsUser;
