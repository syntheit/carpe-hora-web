'use client';
 
import { useState } from "react";
import {Event} from "./TimelineEntry"

const addEvent = (e: Event) => {}


//Next.js component dropdown menu for adding activities to the dashboard
export default function ActivityAdder() {
    const [category, setCategory] = useState(0);
    const [start, setStart] = useState(0);
    const [duration, setDuration] = useState(0);

    return (
        <div className="flex flex-col gap-4 bg-black rounded-3xl p-8 grow">
            <div className="text-[25px] capitalize text-white font-semibold">Add Activity</div>
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <div className="text-[15px] capitalize text-white font-semibold">Category</div>
                    <select onChange={(e) => setCategory(+e.target.options[e.target.selectedIndex].value)} className={`bg-zinc-700 hover:bg-zinc-800 rounded-lg p-2 text-[15px] capitalize text-white font-semibold`}>
                        <option value="Sleep">Sleep</option>
                        <option value="Work">Work</option>
                        <option value="Exercise">Exercise</option>
                        <option value="Eat">Eat</option>
                        <option value="Socialize">Socialize</option>
                        <option value="Relax">Relax</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <div className="text-[15px] capitalize text-white font-semibold">Start Time</div>
                    <select onChange={(e) => setStart(+e.target.options[e.target.selectedIndex].value)} className="bg-zinc-700 hover:bg-zinc-800 rounded-lg p-2 text-[15px] capitalize text-white font-semibold">
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
                    <div className="text-[15px] capitalize text-white font-semibold">Duration</div>
                    <select onChange={(e) => setDuration(+e.target.options[e.target.selectedIndex].value)} className="bg-zinc-700 hover:bg-zinc-800 rounded-lg p-2 text-[15px] capitalize text-white font-semibold">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                    </select>
                </div>
                <button onClick={() => addEvent({category: category, start: start, duration: duration})} className="bg-zinc-700 hover:bg-zinc-800 rounded-lg p-2 text-[30px] capitalize text-white font-semibold m-4">Add</button>
            </div>
        </div>
    )
}