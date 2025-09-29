import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import { auth } from '../services/firebase';
import { memberDoc } from '../services/firestore';


type Role = 'admin' | 'pastor' | 'member';


export function useAuth() {
const [user, setUser] = useState<User | null>(null);
const [role, setRole] = useState<Role | null>(null);
const [churchId, setChurchId] = useState<string | null>(null);
const [loading, setLoading] = useState(true);


useEffect(() => {
const unsub = onAuthStateChanged(auth, async (u) => {
setUser(u);
if (u) {
const snap = await getDoc(memberDoc(u.uid));
if (snap.exists()) {
const d = snap.data() as any;
setRole(d.role || 'member');
setChurchId(d.churchId || null);
} else {
setRole(null); setChurchId(null);
}
} else {
setRole(null); setChurchId(null);
}
setLoading(false);
});
return () => unsub();
}, []);


return { user, role, churchId, loading };
}
