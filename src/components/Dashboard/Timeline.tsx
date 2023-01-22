import TimelineEntry from "./TimelineEntry";
import {Event} from "./TimelineEntry"

export default function Timeline(props: {events: Event[]}) {
    return (
        <div className="flex flex-col gap-6 p-8 w-full h-full">
            <div className="text-[50px] capitalize text-white font-semibold">Your Timeline</div>
            <div className="flex flex-col gap-4 grow">
                {props.events.map((e) => 
                    <TimelineEntry event={e} key={e.category ^ e.start ^ e.duration}/>
                )}
            </div>
        </div>
    )
}