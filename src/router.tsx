import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthGate from './auth/AuthGate';
import SignIn from './auth/SignIn';
import Word from './pages/Word';
import Worship from './pages/Worship';
import Prayer from './pages/Prayer';
import Study from './pages/Study';
import Profile from './pages/Profile';
import Admin from './pages/Admin';


const router = createBrowserRouter([
{ path: "/sign-in", element: <SignIn/> },
{ path: "/", element: <AuthGate><Word/></AuthGate> },
{ path: "/word", element: <AuthGate><Word/></AuthGate> },
{ path: "/worship", element: <AuthGate><Worship/></AuthGate> },
{ path: "/prayer", element: <AuthGate><Prayer/></AuthGate> },
{ path: "/study", element: <AuthGate><Study/></AuthGate> },
{ path: "/profile", element: <AuthGate><Profile/></AuthGate> },
{ path: "/admin", element: <AuthGate><Admin/></AuthGate> },
]);


export function AppRouter(){
return <RouterProvider router={router} />
}
