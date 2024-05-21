import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function leftFooter() {
  return (
    <div className="flex justify-center">
      <button className="w-11/12 bg-mild-black rounded-full text-gray font-normal text-md flex justify-around items-center">
        <p className="flex items-center bg-[#46EB9D] text-black p-3 rounded-full">
          <HomeIcon />
          Home
        </p>
        <SearchIcon />
        <FitnessCenterIcon />
        <AccountCircleIcon />
      </button>
    </div>
  );
}

export default leftFooter;
