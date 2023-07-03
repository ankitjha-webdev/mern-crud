import './App.css'
import Navbar from './components/header/Navbar';
import Add from './components/user/Add';
import Update from './components/user/Update';
import Form from './pages/Form'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: 'user',
    children:[
      {path:'add',element: <Add/>},
      {path: 'update', element: <Update/>}
    ]
  }
]);
function App() {

  return (
    <>
      {/* <Home/> */}
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path="user">
        <Route path="add" element={<Add/>} />
        <Route path="update/:userId" element={<Update />} />
      </Route>
    </Routes> */}
    {/* <Navbar/> */}
    <RouterProvider router={router} />
      {/* <Form/> */}
    </>
  )
}

export default App
