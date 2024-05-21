import CenterNavbar from "../components/centerNavbar";
import SuperSet from "../components/superSet";
import Training from "../components/training";
import WorkoutButton from "../components/workoutButton";

function Center() {
  return (
    <div className="limited-container bg-main-black">
      {/* Top Section */}
      <CenterNavbar />

      {/* Center Section */}
      <div className="m-5">
        <h1 className="text-xl font-semibold mb-3">Superset</h1>
        <p className="text-gray-light mb-3 text-sm">
          Supersets are a form of strength training where you perform an
          excersice from the first moment to the second movement without rest.
          Typically, you <span className="text-[#FFB88C]">See all</span>...
        </p>
        <SuperSet />
      </div>

      {/* Bottom Section */}
      <div className="m-5">
        <div className="mb-5">
          <h1 className="text-xl">Training</h1>
        </div>
        <Training />
      </div>

      {/* Button */}
      <WorkoutButton />
    </div>
  );
}

export default Center;
