// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, getDocs, getDoc, doc, setDoc, DocumentData } from 'firebase/firestore';
import { app, auth } from '@/constants/firebase';

const db = getFirestore(app);

type Event = {
    category: number,
    start: number,
    duration: number,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{events: Array<Event>}>
) {
  const userID = req.headers.authorization;

  if (userID == undefined) {
    res.status(401).json({events: []});
    return;
  }

  const users = collection(db, 'users');
  const userSnapshot = doc(users, userID);

  let yourDate = new Date();
  const days = collection(userSnapshot, 'days');

  const daySnapshot = doc(days, "2023-01-01");

  const day = await getDoc(daySnapshot);

  if (!day.exists()) {
    await setDoc(daySnapshot, {hours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]});
  }

  const hours = (day.data() as DocumentData).hours;

  const events: Array<Event> = [];
  let start = 0;
  let duration = 1;
  let category = hours[0];
  for (let i = 1; i < hours.length; i++) {
    if (hours[i] != category) {
        events.push({ start, duration, category });
        start = i;
        duration = 0;
        category = hours[i];
    }
    duration++;
  }

  events.push({ start, duration, category });

  res.status(200).json({events: events});
}
