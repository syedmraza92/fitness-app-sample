import Image from "next/image";
import workout from "../../public/assets/workout.jpg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function centerNavbar() {
  return (
    <div className=" relative h-[45%] ">
    <div className="absolute top-16 left-0 right-0 flex justify-between items-center px-4 z-10">
      <ArrowCircleLeftIcon sx={{ color: "gray" }} className="w-14 h-14" />
      <div className="flex space-x-4">
        <div className="bg-black rounded-full">
          <BookmarkIcon sx={{ color: "gray" }} className="w-12 h-12" />
        </div>

        <div className="bg-black rounded-full">
          <MoreHorizIcon sx={{ color: "gray" }} className="w-12 h-12" />
        </div>
      </div>
    </div>

    <Image
      src={workout}
      alt="workoutimage"
      layout="fill"
      objectFit="cover"
    />
  </div>
  )
}

export default centerNavbar
