import React from "react";

function HeaderMessages() {
  return (
    <div className="bg-indigo-400 h-36 rounded-md grid grid-cols-4">
      <div className=" col-span-1 flex justify-center my-4">
        <img
          className=" border-2 border-white rounded-full w-28 h-28 bg-cover"
          src="https://elcomercio.pe/resizer/yQQK9CX0TjhVLI_xLSYJi06rH1c=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/JYNDHPFUXFFYHPCHFBDHJJ5NTQ.jpg"
          alt="AA"
        />
      </div>
      <div className="text-6xl text-white font-black items-center  flex">
        Saiko
      </div>
    </div>
  );
}

export default HeaderMessages;
