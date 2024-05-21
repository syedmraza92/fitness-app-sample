import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function leftNavbar() {
  return (
    <div className="flex justify-between items-center px-4 mt-16">
      <AccountCircleIcon sx={{ color: "gray" }} className="w-12 h-12" />
      <div className="mr-36">
        <h1>Welcome</h1>
        <p className="text-lg">Syed</p>
      </div>

      <div className="flex space-x-4">
        <div>
          <CircleNotificationsIcon
            sx={{ color: "gray" }}
            className="w-12 h-12"
          />
        </div>

        <div>
          <CalendarMonthIcon sx={{ color: "gray" }} className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
}

export default leftNavbar;
