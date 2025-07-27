import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Porrfolio from './components/Portfolio/Porrfolio';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/contact/Contact';
import NotFound from "./components/notFound/NotFound";

const routes =  createBrowserRouter([

  {path:'', element: <Layout/>,children:[
    {index:true , element:<Home/>},
    {path:'/about', element:<About/>},
    {path:'/portfolio', element:<Porrfolio/>},
    {path:'/contact', element:<Contact/>}
  ]},
  {path:'*',element:<NotFound/>}
])

function App() {
 

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
