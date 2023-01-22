import Timeline from '@/components/Dashboard/Timeline'
import ActivityAdder from '@/components/Dashboard/ActivityAdder';

export default function Dashboard() {
    return (
        <div className="flex flex-row gap-10 h-screen w-screen bg-white p-10">
            <div className="bg-black flex-initial w-1/4 rounded-3xl">
                <Timeline events={[{category: 1, start: 0, end: 10}]}/>
            </div>
            <div className="flex flex-col gap-10 grow">
                <div className="flex flex-row gap-10 flex-initial h-[30vh]">
                    <ActivityAdder setEvents={() => {}} events={[]}/>
                    <div className="invisible flex-initial w-[30vh]"/>
                </div>
                <div className="bg-black grow rounded-3xl">Two Week Overview</div>
            </div>
        </div>
    );
}