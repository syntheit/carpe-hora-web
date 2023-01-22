"use client";

import { auth } from "@/constants/firebase";
import { Dispatch, SetStateAction, useState } from "react";
import { Event } from "./TimelineEntry";
import { GetDate } from "./TimelineEntry";
import { useContext } from 'react';
import React from "react";
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const addEvent = async (e: Event, update: (val: boolean) => void) => {
    const user = auth.currentUser;
    const url = `http://localhost:3000/api/events`;
    let token = "";
    
    if (user && token != user.uid) {
        token = user.uid;
    }

    fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`
        },

        body: JSON.stringify(e),
    }).then((res) => res.json()).then((res) => {update(true)}).finally(() => {update(true)}).catch((err) => {update(true)});
};

//Next.js component dropdown menu for adding activities to the dashboard
export default function ActivityAdder({update}: {update: (val: boolean) => void}) {
  const [category, setCategory] = useState(0);
  const [start, setStart] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <div className="flex flex-col gap-4 bg-black rounded-3xl p-8 grow">
      <div className="text-[50px] capitalize text-white font-semibold">
        Add Activity
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-[30px] capitalize text-white font-semibold">
            Category
          </div>
          <select
            onChange={(e) =>
              setCategory(+e.target.options[e.target.selectedIndex].value)
            }
            className={`bg-zinc-700 hover:bg-zinc-800 rounded-lg p-2 text-[30px] capitalize text-white font-semibold`}
          >
            <option value="0">Sleep</option>
            <option value="1">Work</option>
            <option value="2">Exercise</option>
            <option value="3">Eat</option>
            <option value="4">Socialize</option>
            <option value="5">Relax</option>
            <option value="6">Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-[30px] capitalize text-white font-semibold">
            Start Time
          </div>
          <select
            onChange={(e) =>
              setStart(+e.target.options[e.target.selectedIndex].value)
            }
            className="bg-zinc-700 hover:bg-zinc-800 rounded-lg p-2 text-[30px] capitalize text-white font-semibold"
          >
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
        <div className="flex flex-col gap-2 flex-1">
          <div className="text-[30px] capitalize text-white font-semibold">
            Duration
          </div>
          <select
            onChange={(e) =>
              setDuration(+e.target.options[e.target.selectedIndex].value)
            }
            className="bg-zinc-700 hover:bg-zinc-800 rounded-lg p-2 text-[30px] capitalize text-white font-semibold"
          >
            {[...Array(24)].map((_, i) => {
              return (
                <option key={i} value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>
        <button
          onClick={() =>
            {addEvent({ category: category, start: start, duration: duration, date: GetDate()}, update);}
          }
          className="bg-zinc-700 hover:bg-zinc-800 rounded-lg p-2 text-[30px] capitalize text-white font-semibold m-4"
        >
          Add
        </button>
      </div>
    </div>
  );
}
