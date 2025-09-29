// Word.tsx
import { TopBar, TabBar } from '../components/TopBar';
export default function Word(){
return (<div className="page"><TopBar/><main><h2>말씀 뷰어 (MVP)</h2></main><TabBar/></div>);
}


// Worship.tsx
import { TopBar, TabBar } from '../components/TopBar';
export default function Worship(){
return (<div className="page"><TopBar/><main><h2>예배/설교 자료 (MVP)</h2></main><TabBar/></div>);
}


// Prayer.tsx
import { TopBar, TabBar } from '../components/TopBar';
export default function Prayer(){
return (<div className="page"><TopBar/><main><h2>공동체/개인 기도 (MVP)</h2></main><TabBar/></div>);
}


// Study.tsx
import { TopBar, TabBar } from '../components/TopBar';
export default function Study(){
return (<div className="page"><TopBar/><main><h2>성경공부/플랜 (MVP)</h2></main><TabBar/></div>);
}


// Profile.tsx
import { TopBar, TabBar } from '../components/TopBar';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
export default function Profile(){
return (
<div className="page"><TopBar/>
<main>
<h2>프로필/설정</h2>
<button onClick={()=>signOut(auth)}>로그아웃</button>
</main>
<TabBar/>
</div>
);
}


// Admin.tsx (목회자/관리자 전용)
import ProtectedRoute from '../auth/ProtectedRoute';
export default function Admin(){
return (
<ProtectedRoute allowRoles={["admin","pastor"]}>
<div style={{padding:24}}>
<h2>관리자 영역 (설교 업로드/주보 관리 등)</h2>
</div>
</ProtectedRoute>
);
}
