type Color = `#${string}`;

export type Event = {
    category: number,
    start: number,
    duration: number,
};

type Category = {
    color: string,
    name: string,
};

export const categories: Category[] = [
    {color: "red-600", name: "Sleep"}, 
    {color: "orange-600", name: "Work"},
    {color: "green-600", name: "Exercise"}, 
    {color: "blue-600", name: "Eat"}, 
    {color: "fuchia-600", name: "Socialize"}, 
    {color: "pink-600", name: "Relax"}, 
    {color: "slate-600", name: "Other"}
];


//Convert hour number to time string
function TimeToString(hour: number) {
    let time = hour % 12;
    if (time == 0) {
        time = 12;
    }
    return time + ":00 " + (hour < 12 ? "AM" : "PM");
}

export default function TimelineEntry(props: {event: Event}) {
    return (
        <div className={`bg-${categories[props.event.category].color} flex-initial h-24 rounded-lg p-4 relative z-50`}>
            <div className={`bg-zinc-700 absolute rounded-r-lg h-full w-[98%] top-0 left-[2%] mr-2 flex flex-col p-4 gap-2 z-20`}>
                <div className={`text-[25px] capitalize text-white font-semibold`}>
                    {categories[props.event.category].name}
                </div>
                <div className={`text-[15px] capitalize text-white font-normal`}>
                    {TimeToString(props.event.start) + " - " + TimeToString((props.event.start + props.event.duration) % 24)}
                </div>
            </div>
        </div>
    )
}