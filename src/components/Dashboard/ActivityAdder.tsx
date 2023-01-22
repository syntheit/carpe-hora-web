//Next.js component dropdown menu for adding activities to the dashboard
export default function ActivityAdder(props: { setEvents: (events: Event[]) => void, events: Event[] }) {
    return (
        <div className="flex flex-col gap-4 bg-black rounded-3xl p-8 w-full h-full">
            <div className="text-[25px] capitalize text-white font-semibold">Add Activity</div>
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-2">
                    <div className="text-[15px] capitalize text-white font-semibold">Category</div>
                    <select className="bg-zinc-700 rounded-lg p-2 text-[15px] capitalize text-white font-semibold">
                        <option value="Sleep">Sleep</option>
                        <option value="Work">Work</option>
                        <option value="Exercise">Exercise</option>
                        <option value="Eat">Eat</option>
                        <option value="Socialize">Socialize</option>
                        <option value="Relax">Relax</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-[15px] capitalize text-white font-semibold">Start Time</div>
                    <select className="bg-zinc-700 rounded-lg p-2 text-[15px] capitalize text-white font-semibold">
                        <option value="0">12:00 AM</option>
                        <option value="1">1:00 AM</option>
                        <option value="2">2:00 AM</option>
                        <option value="3">3:00 AM</option>
                        <option value="4">4:00 AM</option>
                        <option value="5">5:00 AM</option>
                        <option value="6">6:00 AM</option>
                        <option value="7">7:00 AM</option>
                        <option value="8">8:00 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="12">12:00 PM</option>
                        <option value="13">1:00 PM</option>
                        <option value="14">2:00 PM</option>
                        <option value="15">3:00 PM</option>
                        <option value="16">4:00 PM</option>
                        <option value="17">5:00 PM</option>
                        <option value="18">6:00 PM</option>
                        <option value="19">7:00 PM</option>
                        <option value="20">8:00 PM</option>
                        <option value="21">9:00 PM</option>
                        <option value="22">10:00 PM</option>
                        <option value="23">11:00 PM</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-[15px] capitalize text-white font-semibold">End Time</div>
                    <select className="bg-zinc-700 rounded-lg p-2 text-[15px] capitalize text-white font-semibold">
                        <option value="0">12:00 AM</option>
                        <option value="1">1:00 AM</option>
                        <option value="2">2:00 AM</option>
                        <option value="3">3:00 AM</option>
                        <option value="4">4:00 AM</option>
                        <option value="5">5:00 AM</option>
                        <option value="6">6:00 AM</option>
                        <option value="7">7:00 AM</option>
                        <option value="8">8:00 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="12">12:00 PM</option>
                        <option value="13">1:00 PM</option>
                        <option value="14">2:00 PM</option>
                        <option value="15">3:00 PM</option>
                        <option value="16">4:00 PM</option>
                        <option value="17">5:00 PM</option>
                        <option value="18">6:00 PM</option>
                        <option value="19">7:00 PM</option>
                        <option value="20">8:00 PM</option>
                        <option value="21">9:00 PM</option>
                        <option value="22">10:00 PM</option>
                        <option value="23">11:00 PM</option>
                    </select>
                </div>
            </div>
        </div>
    )
}