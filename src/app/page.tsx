<<<<<<< HEAD
'use client'

import Timeline from '@/components/Dashboard/Timeline'
import { Event } from '@/components/Dashboard/TimelineEntry';
import ActivityAdder from '@/components/Dashboard/ActivityAdder';
import { auth } from '@/constants/firebase';
import { useState } from 'react';
=======
import Timeline from "@/components/Dashboard/Timeline";
import ActivityAdder from "@/components/Dashboard/ActivityAdder";
>>>>>>> 7c2bc491f7710d6db5799d68e3abf9ee79bf037b

export default function Dashboard() {
  const [redraw, setRedraw] = useState(false);
  
  if (redraw) setRedraw(false);

  return (
    <div className="flex gap-10 h-full w-screen px-10">
<<<<<<< HEAD
      <div className="bg-black flex-initial w-1/4 rounded-3xl">
        <Timeline setRedraw={setRedraw}/>
      </div>
      <div className="flex flex-col gap-10 grow">
        <div className="flex flex-row gap-10 flex-initial h-[30vh]">
          <ActivityAdder setRedraw={setRedraw}/>
=======
      <div className="bg-black flex-initial w-1/4 rounded-3xl box_shadow">
        <Timeline />
      </div>
      <div className="flex flex-col gap-10 grow">
        <div className="flex flex-row gap-10 flex-initial h-[30vh]">
          <ActivityAdder />
>>>>>>> 7c2bc491f7710d6db5799d68e3abf9ee79bf037b
          <div className="invisible flex-initial w-[30vh]" />
        </div>
        <div className="bg-black grow rounded-3xl box_shadow">
          Two Week Overview
        </div>
      </div>
    </div>
  );
}
