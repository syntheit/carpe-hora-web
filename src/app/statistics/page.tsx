"use client";

import { query, limit, collection, getDocs } from "firebase/firestore";
import { db, auth } from "@/constants/firebase";
import { Doughnut, Line } from "react-chartjs-2";
import { useLayoutEffect } from "react";
import {
  ArcElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { faker } from "@faker-js/faker";

Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

let activitiesCount = [0, 0, 0, 0, 0, 0, 0];

const labels = [
  "Sleep",
  "Work",
  "Exercise",
  "Eat",
  "Socialize",
  "Relax",
  "Other",
];

export default function Statistics() {
  let doughnutValues = {
    labels,
    datasets: [
      {
        label: "Instances",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
  };

  const trendOptions = {
    maintainAspectRatio: false,
  };

  let trendValues = {
    labels,
    datasets: [
      {
        label: "Sleep",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "rgb(0, 255, 132)",
        backgroundColor: "rgba(0, 255, 132, 0.5)",
      },
      {
        label: "Work",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Exercise",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Eat",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "rgba(50, 162, 190, 1)",
        backgroundColor: "rgba(50, 162, 190, 0.2)",
      },
      {
        label: "Socialize",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
      },
      {
        label: "Relax",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
      },
      {
        label: "Other",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
      },
    ],
  };

  useLayoutEffect(() => {
    const daysRef = collection(db, `users/${auth.currentUser?.uid}/days`);
    const q = query(daysRef, limit(14));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.data().hours.forEach((activity: number, i: number) => {
          activitiesCount[activity]++;
        });
      });
    });
    doughnutValues.datasets[0].data = activitiesCount as never[];
  }, [doughnutValues.datasets]);

  return (
    <div className="flex gap-10 h-full w-screen px-10">
      <div className="container box_shadow flex-initial w-1/4 "></div>
      <div className="flex flex-col gap-10 grow">
        <div className="flex flex-row gap-10 flex-initial h-[30vh]">
          <div className="grow container p-8 w-5/12">
            <h1 className="text-3xl font-bold">Trends</h1>
            <Line data={trendValues} options={trendOptions} />
          </div>
          <div className="invisible flex-initial w-[40vh]" />
        </div>
        <div className="container grow p-8">
          <h3 className="text-3xl font-bold">Past Two Weeks</h3>
          <div className="w-2/6 h-full">
            <Doughnut data={doughnutValues} options={doughnutOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
