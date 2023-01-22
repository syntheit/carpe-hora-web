// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore, collection, getDocs, getDoc, doc, setDoc, DocumentData } from 'firebase/firestore';
import { app, auth } from '@/constants/firebase';
import { GetDate, Event } from '@/components/Dashboard/TimelineEntry';

const db = getFirestore(app);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{events: Array<Event>}>
) {
  const { query, method } = req
  const id = parseInt(query.id as string, 10)
  const name = query.name as string

  const userID = req.headers.authorization;
  if (userID == undefined) {
    res.status(401).json({events: []});
    return;
  }

  const users = collection(db, 'users');
  const userSnapshot = doc(users, userID);
      
  const days = collection(userSnapshot, 'days');
      
  const date = GetDate();
  const daySnapshot = doc(days, date);
      
  const day = await getDoc(daySnapshot);
      
  if (!day.exists()) {
    await setDoc(daySnapshot, {hours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]});
  }
      
  const hours = (day.data() as DocumentData).hours;

  switch (method) {
    case 'GET':
        const events: Array<Event> = [];
        let start = 0;
        let duration = 1;
        let category = hours[0];
        for (let i = 1; i < hours.length; i++) {
          if (hours[i] != category) {
              events.push({ start, duration, category, date });
              start = i;
              duration = 0;
              category = hours[i];

              if (events.length >= 5) {
                break;
              }
          }
          duration++;
        }
      
        events.push({ start, duration, category, date });
      
        res.status(200).json({events: events});
      break;
    case 'POST':
      for (let i = req.body.start; i < req.body.start + req.body.duration; i++) {
        hours[i] = req.body.category;
      }

      setDoc(daySnapshot, {hours: hours});
      res.status(200).json({events: []});
    }

}
