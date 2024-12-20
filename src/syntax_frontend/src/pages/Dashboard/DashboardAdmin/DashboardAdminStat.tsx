const DashboardAdminStat = () => {
  return (
    <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-[#E1E0F3] h-[9.94rem]">
        <div className="flex items-center gap-4 mb-2">
          <p className="font-bold text-[2.5rem] leading-[3rem]">10,542</p>
        </div>
        <p className="text-[1.34rem]  leading-[1.68rem] ">Total Users</p>
      </div>

      <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
        <div className="flex items-center gap-4 mb-2">
          <p className="font-bold text-[2.5rem] leading-[3rem]">7,654</p>
        </div>
        <p className="text-[1.34rem]  leading-[1.68rem] ">Active Users</p>
      </div>
      <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
        <div className="flex items-center gap-4 mb-2">
          <p className="font-bold text-[2.5rem] leading-[3rem]">2,888</p>
        </div>
        <p className="text-[1.34rem]  leading-[1.68rem] ">Inactive Users</p>
      </div>
      <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
        <div className="flex items-center gap-4 mb-2">
          <p className="font-bold text-[2.5rem] leading-[3rem]">25,642</p>
        </div>
        <p className="text-[1.34rem]  leading-[1.68rem] ">Templates Created</p>
      </div>
      <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
        <div className="flex items-center gap-4 mb-2">
          <p className="font-bold text-[2.5rem] leading-[3rem]">4,320,000</p>
        </div>
        <p className="text-[1.34rem]  leading-[1.68rem] ">Last Updated CV</p>
      </div>
    </div>
  );
};

export default DashboardAdminStat;
