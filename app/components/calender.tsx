function calender() {
  return (
    <div className="m-5">
      <div className="mt-5 bg-main-black w-[390px] p-4 rounded-xl">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-center text-gray-light text-xs mb-1">Mon</h3>
            <div className="bg-calender-gray rounded-full text-sm p-3 text-calender-orange">
              12
            </div>
          </div>

          <div>
            <h3 className="text-center text-gray-light text-xs mb-1">Tue</h3>
            <div className="bg-calender-gray rounded-full text-sm p-3 text-gray-light">
              13
            </div>
          </div>

          <div>
            <h3 className="text-center text-gray-light text-xs mb-1">Wed</h3>
            <div className="bg-calender-gray rounded-full text-sm p-3 text-calender-orange">
              14
            </div>
          </div>
          <div>
            <h3 className="text-center text-gray-light text-xs mb-1">Thu</h3>
            <div className="bg-calender-gray rounded-full text-sm p-3 text-calender-orange">
              15
            </div>
          </div>
          <div>
            <h3 className="text-center text-calender-orange text-xs mb-1">Fri</h3>
            <div className="bg-calender-gray rounded-full text-sm p-3 text-calender-orange">
              16
            </div>
          </div>
          <div>
            <h3 className="text-center text-gray-light text-xs mb-1">Sat</h3>
            <div className="bg-calender-gray rounded-full text-sm p-3 text-gray-light">
              17
            </div>
          </div>
          <div>
            <h3 className="text-center text-gray-light text-xs mb-1">Sun</h3>
            <div className="bg-calender-gray rounded-full text-sm p-3 text-gray-light">
              18
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default calender;
