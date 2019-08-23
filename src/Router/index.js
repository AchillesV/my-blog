import Index from './../Blog/Index';
import Category from './../Blog/Category';
import Tag from './../Blog/Tag';
import Post from './../Blog/Post';

let routes = [
  {
    path: '/', 
    exact: true, 
    component: Index,
  },
  {path: '/category', component: Category},
  {path: '/tag', component: Tag},
  {path: '/post', component: Post}
]

export default routes; 