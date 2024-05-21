import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarIcon from "@mui/icons-material/Star";

function superSet() {
  return (
    <div className="grid grid-cols-3 gap-3 mt-5">
      <div className="bg-mild-black rounded-xl p-2">
        <div className="flex flex-row justify-between items-center">
          <div className="text-xs text-gray-light">Excercise</div>
          <FitnessCenterIcon color="primary" className="w-4" />
        </div>
        <p className="mt-4 font-semibold">12</p>
      </div>

      <div className="bg-mild-black rounded-xl p-2">
        <div className="flex flex-row justify-between items-center">
          <div className="text-xs text-gray-light">Schedule</div>
          <CalendarMonthIcon color="success" className="w-4" />
        </div>
        <p className="mt-4 font-semibold">3x1 week</p>
      </div>

      <div className="bg-mild-black rounded-xl p-2">
        <div className="flex flex-row justify-between items-center">
          <div className="text-xs text-gray-light">Rating</div>
          <StarIcon color="warning" className="w-4" />
        </div>
        <p className="mt-4 font-semibold">
          4.8
          <span className="text-xs font-normal text-gray-light">(128)</span>
        </p>
      </div>
    </div>
  );
}

export default superSet;
