import Index from './../Blog/Index';
import Category from './../Blog/Category';
import Tag from './../Blog/Tag';

let routes = [
  {path: '/', exact: true, component: Index},
  {path: '/category', component: Category},
  {path: '/tag', component: Tag}
]

export default routes; 