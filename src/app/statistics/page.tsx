export default function Statistics() {
  return (
    <div className="flex gap-10 h-full w-screen px-10">
      <div className="bg-black flex-initial w-1/4 rounded-[20px]"></div>
      <div className="flex flex-col gap-10 grow">
        <div className="flex flex-row gap-10 flex-initial h-[30vh]">
          <div className="bg-black grow rounded-[20px]">Record Activity</div>
          <div className="invisible flex-initial w-[30vh]" />
        </div>
        <div className="bg-black grow rounded-[20px]">Two Week Overview</div>
      </div>
    </div>
  );
}
