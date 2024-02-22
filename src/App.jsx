import './i18n';
import './App.css';
import Home from './pages/home/home';
import AboutMe from './pages/aboutMe/aboutMe';
import NotFound from './pages/notFound/notFound';
import Works from './pages/works/works';
import Contact from './pages/contact/contact';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import SocialBar from './components/socialBar/socialBar';
import WorkSelected from './pages/workSelected/workSelected';
import CategorySelected from './pages/categorySelected/categorySelected';
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([{
  element : <Layout/>,
  children : [
    { path: "*", Component: NotFound },
    { path: "/", Component: Home },
    { path: "/about", Component: AboutMe },
    { path: "/projects", Component: Works },
    { path: "/projects/:category", Component: CategorySelected },
    { path: "/projects/:category/:id", Component: WorkSelected },
    { path: "/contact", Component: Contact },
    { path: "/404", Component: NotFound },
    { path: "/:id", Component: WorkSelected },
  ]
}]);


function Layout() {

  return (
    <>
      <nav>
        <SocialBar/>
        <Navbar/>
      </nav>
      <main>
        <ScrollRestoration/>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

function App() {
  return <RouterProvider router={router} />
}

export default App;
