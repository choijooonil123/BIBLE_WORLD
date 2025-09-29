import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';


export default function AuthGate({ children }: { children: JSX.Element }) {
const { user, loading } = useAuth();
if (loading) return <div style={{padding:24}}>로딩 중…</div>;
if (!user) return <Navigate to="/sign-in" replace />;
return children;
}
