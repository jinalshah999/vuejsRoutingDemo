import home  from './components/home.vue';
import product  from './components/product.vue';
import productdetails from './components/productdetails.vue';
import pagenotfound from './components/pagenotfound.vue';
export const routes=[

  {path:'',component:home},
  {path:'/product',component:product},
  {path:'/productdetails/:id',component:productdetails},
  {path:'/pagenotfound',component:pagenotfound},
  {path:'*',redirect:'/pagenotfound'}
];
