"use client";

import {
  query,
  orderBy,
  limit,
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { db, auth } from "@/constants/firebase";
import { Doughnut } from "react-chartjs-2";
import { useEffect } from "react";

export default async function Statistics() {
  // const daysRef = collection(db, `users/${auth.currentUser?.uid}/days`);
  // const q = query(daysRef, orderBy("name"), limit(14));
  let activitiesArray: number[] = new Array(23);
  // useEffect(() => {
  //   // getDocs(q).then((querySnapshot) => {
  //   //   querySnapshot.forEach((doc) => {
  //   //     console.log(doc.data());
  //   //     // activitiesarray.push(doc.data());
  //   //   });
  //   // });
  // });
  // console.log(activitiesArray);
  // const doughnutValues = {
  //   labels: ["Sleep", "Work", "Exercise", "Eat", "Socialize", "Relax", "Other"],
  //   datasets: [
  //     {
  //       label: "Instances",
  //       data: activitiesArray,
  //       backgroundColor: [
  //         "#f5222d",
  //         "#fa541c",
  //         "#fa8c16",
  //         "#fadb14",
  //         "#52c41a",
  //         "#13c2c2",
  //         "#1677ff",
  //         "#722ed1",
  //         "#eb2f96",
  //         "#00bfa5",
  //         "#009e60",
  //       ],
  //     },
  //   ],
  // };
  return (
    <div className="flex gap-10 h-full w-screen px-10">
      <div className="container box_shadow flex-initial w-1/4 "></div>
      <div className="flex flex-col gap-10 grow">
        <div className="flex flex-row gap-10 flex-initial h-[30vh]">
          <div className="bg-black grow rounded-[20px]">Record Activity</div>
          <div className="invisible flex-initial w-[30vh]" />
        </div>
        <div className="container grow p-8">
          <h3 className="text-3xl font-bold">Past Two Weeks</h3>
          {/* <Doughnut data={doughnutValues} /> */}
        </div>
      </div>
    </div>
  );
}
