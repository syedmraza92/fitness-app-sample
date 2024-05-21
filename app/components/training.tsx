import Image from "next/image";
import workout1 from "../../public/assets/workout1.jpeg";
import workout2 from "../../public/assets/workout2.webp";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

function training() {
  return (
    <div className="grid grid-rows-2 gap-y-3">
      <div className="bg-mild-black rounded-lg flex items-center justify-between">
        <div className=" flex items-center">
          <Image
            src={workout1}
            alt="small workout"
            className="rounded-lg overflow-hidden h-16 w-16 my-1 mr-3"
          />

          <div>
            <h1 className="text-lg">Reverse Curl Slepet</h1>
            <div className="flex items-center text-gray-light">
              <FitnessCenterIcon className="w-3 mr-1" />
              <p className="text-xs mr-2">3x12</p>
              <WatchLaterIcon className="w-3 mr-1" />
              <p className="text-xs">8 Minutes</p>
            </div>
          </div>
        </div>

        <div className="bg-[#303030] rounded-full px-3 py-2 mr-2">
          <p className="text-xs">Biceps</p>
        </div>
      </div>

      <div className="bg-mild-black rounded-lg flex items-center justify-between opacity-50 relative">
        <div className=" flex items-center">
          <Image
            src={workout2}
            alt="small workout"
            className="rounded-lg overflow-hidden h-16 w-16 my-1 mr-3"
          />

          <div>
            <h1 className="text-lg">Tarik Tali Slepet</h1>
            <div className="flex items-center text-gray-light">
              <FitnessCenterIcon className="w-3 mr-1" />
              <p className="text-xs mr-2">8x14</p>
              <WatchLaterIcon className="w-3 mr-1" />
              <p className="text-xs">12 Minutes</p>
            </div>
          </div>
        </div>

        <div className="bg-[#303030] rounded-full px-3 py-2 mr-2">
          <p className="text-xs">Dada Kiri</p>
        </div>
      </div>
    </div>
  );
}

export default training;
