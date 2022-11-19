import Image from "next/image";
import SkyBorderBlack from "../../assets/img/nuage-cyan-border-black.png";
import SkyFormBorder from "../../assets/img/forme-border-nuage.png";

export const MotionSky = () => {
  return (
    <>
      <div className="-mt-4 flex">
        <Image height="150px" width="150px" src={SkyFormBorder} />
        <div className="px-8">
          <Image height="150px" width="150px" src={SkyFormBorder} />
        </div>
        <div>
          <Image height="150px" width="150px" src={SkyFormBorder} />
        </div>
      </div>
    </>
  );
};
