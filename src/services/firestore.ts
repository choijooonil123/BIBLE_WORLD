import { collection, doc } from 'firebase/firestore';
import { db } from './firebase';


export const colMembers = collection(db, 'members');
export const colSermons = collection(db, 'sermons');
export const colPrayers = collection(db, 'prayers');
export const colNotes = collection(db, 'notes');
export const memberDoc = (uid: string) => doc(db, 'members', uid);
