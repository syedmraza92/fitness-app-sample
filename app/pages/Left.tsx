import Progress from "../components/progress";
import Calender from "../components/calender";
import LeftFooter from "../components/leftFooter";
import Recommendation from "../components/recommendation";
import Popular from "../components/popular";
import LeftNavbar from "../components/leftNavbar";

function Left() {
  return (
    <div className="limited-container bg-main-black">
      {/* Nav Bar*/}
      <LeftNavbar />

      {/* Calender */}
      <Calender />

      {/* Today Activity */}
      <div className="m-5">
        <div className="flex justify-between items-center ">
          <h1>Today Activity</h1>
          <p className="text-xs text-gray-light">See All</p>
        </div>
        <Progress />
      </div>

      {/* Popular Method */}
      <div className="m-5">
        <div className="flex justify-between items-center ">
          <h1>Popular Method</h1>
          <p className="text-xs text-gray-light">See All</p>
        </div>
        <Popular />
      </div>

      {/* Recommendation Training */}
      <div className="m-5">
        <div className="flex justify-between items-center ">
          <h1>Recommendation Training</h1>
          <h2 className="text-xs text-gray-light">See All</h2>
        </div>
        <Recommendation />
      </div>

      {/* Footer */}
      <LeftFooter />
    </div>
  );
}

export default Left;
