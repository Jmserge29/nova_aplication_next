import { CheckBadgeIcon } from "@heroicons/react/24/outline";
function ProfileCard() {
  return (
    <>
      {/* Portada y Photo */}

      <div>
        <div
          className="absolute border-zinc-800 border-2 rounded-full my-60 mx-6 sm:my-60 bg-cover bg-slate-50 md:mx-16 bg-center sm:h-32 h-28 sm:w-32 w-28"
          style={{
            backgroundImage: `url("https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9")`,
          }}
        ></div>
        <div className="absolute justify-center ml-40 mt-72 pt-7 md:ml-56 text-center sm:mt-72 sm:pt-4">
          <h2 className="text-center text-3xl md:text-5xl font-bold leading-3 text-slate-300">@MoraPr </h2>
        </div>
      </div>
      <div className="flex h-72 rounded-t-lg bg-cover bg-center shadow-2xl" style={{
            backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5ca8d816e666691f0629165e/1560289587421-PX1IHY12Y1GSLDAZ2GBM/08-UNINORTE.jpg?format=1500w")`,

          }}>
      </div>
      <div className="flex items-center justify-center h-24 sm:h-28  mb-4 rounded-b-lg bg-zinc-800 shadow-2xl">
      </div>

    </>
  );
}

export default ProfileCard;
