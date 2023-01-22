'use client'

import TimelineEntry from "./TimelineEntry";
import { Event } from "./TimelineEntry"
import { auth } from "@/constants/firebase";
import { useState, useEffect, useLayoutEffect, Dispatch, SetStateAction } from 'react'

export default function Timeline({count}: {count: number}) {
    const [events, setEvents] = useState<Array<Event>>([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        
        const user = auth.currentUser;
        const url = `http://localhost:3000/api/events`;
        let token = "";
    
        if (user && token != user.uid) {
            token = user.uid;
        }
        
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${token}`
            },
        }).then((res) => res.json())
        .then((events) => {
          setEvents(events.events)
          setLoading(false)
          
        })

        setLoading(false);
    }, [count]);

    if (loading) return <div className="text-[50px] capitalize text-white font-semibold">Loading...</div>
    if (!events) return <div className="text-[50px] capitalize text-white font-semibold">No events</div>

    return (
        <div className="flex flex-col gap-6 p-8 w-full h-full">
            <div className="text-[50px] capitalize text-white font-semibold">Your Timeline</div>
            <div className="flex flex-col gap-4 grow">
                {events.map((e) => 
                    <TimelineEntry event={e} key={2 * e.category + 3 * e.start + 5 * e.duration}/>
                )}
            </div>
        </div>
    )
}