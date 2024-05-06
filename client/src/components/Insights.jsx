function Insights() {
  return (
    <div className="bg-green-500 w-auto h-30 px-3 py-4 m-5 rounded-2xl flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl">Insights</div>
        <div>Today</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <img className="w-6 h-6 mr-2" src="src\assets\Books Logo.png" alt="Books icon" />
          <span>Books</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="w-7 h-7 mr-1" src="src\assets\Clock Logo.png" alt="Clock icon" />
            <span>Time</span>
          </div>
          <div className="rounded-2xl bg-[#218D7D] text-white px-2 py-1">Recent Book</div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
