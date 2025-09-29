import { Link, useLocation } from 'react-router-dom';


export function TopBar(){
return (
<header className="top">
<span>BIBLE_WORLD</span>
<nav>
<Link to="/word">말씀</Link>
<Link to="/worship">예배</Link>
<Link to="/prayer">기도</Link>
<Link to="/study">공부</Link>
<Link to="/profile">프로필</Link>
</nav>
</header>
);
}


export function TabBar(){
const loc = useLocation();
const tabs = [
['/word','말씀'],['/worship','예배'],['/prayer','기도'],['/study','공부'],['/profile','프로필']
];
return (
<footer className="tabs">
{tabs.map(([to,label]) => (
<Link key={to} to={to} className={loc.pathname.startsWith(to)? 'active':''}>{label}</Link>
))}
</footer>
);
}
