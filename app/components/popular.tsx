import Image from "next/image";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";
import workout1 from "../../public/assets/workout1.jpeg";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import workout2 from "../../public/assets/workout2.webp";

function popular() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="relative">
        <Image src={workout1} alt="workout" className="rounded-lg" />
        <BookmarkIcon className="absolute top-1 right-0" />
        <div className="absolute bottom-0 mx-2">
          <h1 className="text-lg">Superset</h1>
          <div className="flex items-center">
            <FitnessCenterIcon className="w-3 mr-1" />
            <p className="text-xs mr-2">3x12</p>
            <StarIcon className="w-3 mr-1" />
            <p className="text-xs">5.0 (128)</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <Image src={workout2} alt="workout" className="rounded-lg" />
        <BookmarkIcon
          sx={{ color: "orange" }}
          className="absolute top-1 right-0"
        />
        <div className="absolute bottom-0 mx-2">
          <h1 className="text-lg text-gray-500">Giant Set</h1>
          <div className="flex items-center">
            <FitnessCenterIcon sx={{ color: "gray" }} className="w-3 mr-1" />
            <p className="text-xs mr-2 text-gray-500">3x12</p>
            <StarIcon sx={{ color: "gray" }} className="w-3 mr-1" />
            <p className="text-xs text-gray-500">5.0 (128)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default popular;
