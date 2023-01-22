'use client'

import Timeline from '@/components/Dashboard/Timeline'
import { Event } from '@/components/Dashboard/TimelineEntry';
import ActivityAdder from '@/components/Dashboard/ActivityAdder';
import { auth } from '@/constants/firebase';
import { useState } from 'react';

export default function Dashboard() {
  const [redraw, setRedraw] = useState(false);
  
  if (redraw) setRedraw(false);

  return (
    <div className="flex gap-10 h-full w-screen px-10">
      <div className="bg-black flex-initial w-1/4 rounded-3xl">
        <Timeline setRedraw={setRedraw}/>
      </div>
      <div className="flex flex-col gap-10 grow">
        <div className="flex flex-row gap-10 flex-initial h-[30vh]">
          <ActivityAdder setRedraw={setRedraw}/>
          <div className="invisible flex-initial w-[30vh]" />
        </div>
        <div className="bg-black grow rounded-3xl">Two Week Overview</div>
      </div>
    </div>
  );
}
