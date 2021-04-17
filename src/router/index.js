import Error404 from '../components/404/index'
import HOME from '../components/home'
import ABOUT from '../components/about'
import PORTFOLIO from '../components/portfolio'
import SERVICES from '../components/services'
import CONTACTS from '../components/contacts'


export const routes = [
  {path: '*', component: Error404},
  {path: '/', name: 'home', component: HOME},
  {path: '/resume', name: 'resume', component: ABOUT},
  {path: '/portfolio', name: 'portfolio', component: PORTFOLIO},
  {path: '/services', name: 'blogs', component: SERVICES},
  {path: '/contacts', name: 'contacts', component: CONTACTS},
];
