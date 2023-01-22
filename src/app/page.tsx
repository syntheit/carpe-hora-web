'use client'

import Timeline from '@/components/Dashboard/Timeline'
import { Event } from '@/components/Dashboard/TimelineEntry';
import ActivityAdder from '@/components/Dashboard/ActivityAdder';
import { auth } from '@/constants/firebase';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [update, setUpdate] = useState(false);
  const [count, setCount] = useState(0);

  if (update) {
    setCount(count + 1);
    setUpdate(false);
  }

  return (
    <div className="flex gap-10 h-full w-screen px-10">
      <div className="bg-black flex-initial w-1/4 rounded-3xl box_shadow">
        <Timeline count={count}/>
      </div>
      <div className="flex flex-col gap-10 grow">
        <div className="flex flex-row gap-10 flex-initial h-[30vh]">
          <ActivityAdder update={setUpdate}/>
          <div className="invisible flex-initial w-[30vh]" />
        </div>
        <div className="bg-black grow rounded-3xl box_shadow">
          Two Week Overview
        </div>
      </div>
    </div>
  );
}
