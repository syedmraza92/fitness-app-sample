import Image from "next/image";
import workout1 from "../../public/assets/workout1.jpeg";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

function recommendation() {
  return (
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
  );
}

export default recommendation;
