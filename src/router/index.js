import Error404 from '../components/404/index'
import HOME from '../components/home'
import ABOUT from '../components/about'
import PORTFOLIO from '../components/portfolio'
import BLOGS from '../components/blogs'
import CONTACTS from '../components/contacts'


export const routes = [
  {path: '*', component: Error404},
  {path: '/', name: 'home', component: HOME},
  {path: '/resume', name: 'resume', component: ABOUT},
  {path: '/portfolio', name: 'portfolio', component: PORTFOLIO},
  {path: '/blogs', name: 'blogs', component: BLOGS},
  {path: '/contacts', name: 'contacts', component: CONTACTS},
];
