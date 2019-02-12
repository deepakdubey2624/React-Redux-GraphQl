import SignInForm from '../components/signInForm';
import SignUpForm from '../components/signUpForm';
const routes = [
    {
      path: '/',
      name: 'home',
      exact: true,
      component: SignInForm,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpForm,
    }
    // {
    //   path: '/signin',
    //   name: 'signin',
    //   component: SignInForm,
    // },
    // {
    //   path: '*',
    //   name: 'notfound',
    //   component: '',
    // },
  ];
  
  export default routes;