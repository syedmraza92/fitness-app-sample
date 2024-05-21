import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function progress() {
  return (
    <div className="mt-5 bg-main-black w-[390px] p-4 rounded-xl">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-center text-gray-light">8</h3>
          <div className="bg-calender-gray rounded-xl text-sm pt-8 px-3 text-gray-light">
            cm
          </div>
          <p className="text-[10px] text-center text-gray-light">Biceps</p>
        </div>

        <div>
          <h3 className="text-center text-calender-orange">
            <ArrowUpwardIcon className="w-4" />
            16
          </h3>
          <div className="bg-calender-orange rounded-xl text-sm pt-16 px-3 text-gray-700">
            cm
          </div>
          <p className="text-[10px] text-center text-gray-light">Abs</p>
        </div>

        <div>
          <h3 className="text-center text-calender-orange">
            <ArrowUpwardIcon className="w-4" />
            14
          </h3>
          <div className="bg-calender-orange rounded-xl text-sm pt-14 px-3 text-gray-700">
            cm
          </div>
          <p className="text-[10px] text-center text-gray-light">waist</p>
        </div>

        <div>
          <h3 className="text-center text-gray-light">20</h3>
          <div className="bg-calender-gray rounded-xl text-sm pt-20 px-3 text-gray-light">
            cm
          </div>
          <p className="text-[10px] text-center text-gray-light">Chest</p>
        </div>

        <div>
          <h3 className="text-center text-calender-orange">
            <ArrowUpwardIcon className="w-4" />
            24
          </h3>
          <div className="bg-calender-orange rounded-xl text-sm pt-24 px-3 text-gray-700">
            cm
          </div>
          <p className="text-[10px] text-center text-gray-light">Shldrs</p>
        </div>

        <div>
          <h3 className="text-center text-gray-light">12</h3>
          <div className="bg-calender-gray rounded-xl text-sm pt-12 px-3 text-gray-light">
            cm
          </div>
          <p className="text-[10px] text-center text-gray-light">Thigh</p>
        </div>

        <div>
          <h3 className="text-center text-gray-light">10</h3>
          <div className="bg-calender-gray rounded-xl text-sm pt-10 px-3 text-gray-light">
            cm
          </div>
          <p className="text-[10px] text-center text-gray-light">Calf</p>
        </div>
      </div>
    </div>
  );
}

export default progress;
