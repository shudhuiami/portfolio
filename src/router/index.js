import Error404 from '../components/404/index'
import HOME from '../components/home'
import ABOUT from '../components/about'


export const routes = [
  {path: '*', component: Error404},
  {path: '/', name: 'home', component: HOME},
  {path: '/about-us', name: 'home', component: ABOUT},
];
