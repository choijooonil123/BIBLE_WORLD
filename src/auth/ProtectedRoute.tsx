import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';


export default function ProtectedRoute({ children, allowRoles }: { children: JSX.Element, allowRoles?: string[] }) {
const { user, role, churchId, loading } = useAuth();
if (loading) return <div style={{padding:24}}>로딩 중…</div>;
if (!user) return <Navigate to="/sign-in" replace />;
if (!churchId) return <div style={{padding:24}}>승인 대기 또는 교회 미지정 계정입니다.</div>;
if (allowRoles && role && !allowRoles.includes(role)) return <div style={{padding:24}}>권한이 없습니다.</div>;
return children;
}
