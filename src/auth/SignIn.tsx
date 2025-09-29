import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';


export default function SignIn() {
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');
const [err, setErr] = useState<string | null>(null);
const [busy, setBusy] = useState(false);


const submit = async (e: React.FormEvent) => {
e.preventDefault();
setBusy(true); setErr(null);
try {
await signInWithEmailAndPassword(auth, email, pass);
} catch (e: any) {
setErr(e.message || String(e));
} finally {
setBusy(false);
}
};


return (
<div className="center">
<h1>BIBLE_WORLD</h1>
<form onSubmit={submit} className="card">
<input placeholder="이메일" value={email} onChange={e=>setEmail(e.target.value)} />
<input placeholder="비밀번호" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
{err && <p className="error">{err}</p>}
<button disabled={busy}>{busy? '로그인 중…' : '로그인'}</button>
</form>
</div>
);
}
