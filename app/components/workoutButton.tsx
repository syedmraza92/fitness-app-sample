function workoutButton() {
  return (
    <div className="flex justify-center -mt-3 relative">
      <div className="absolute inset-0 flex justify-center items-center">
        <button className="w-11/12 bg-[#46EB9D] rounded-full text-black p-3 font-normal text-md">
          Start workout
        </button>
      </div>
    </div>
  );
}

export default workoutButton;
