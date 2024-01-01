import { useState, useEffect } from 'react'
import axios from 'axios';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Create from './Create';
import Booked from './Booked';
import Available from './Available';
import NewSlot from './NewSlot';


function App() {
  const [data,setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/")
      .then(result => {
        setData(result.data)})
      .catch(err => console.log(err))
  }, [])

  const router = createBrowserRouter([
    
    {
    path: '/',  
    element: <Booked/>
    },
    {
      path: '/create',  
      element: <Create/>
    },
    {
      path: '/available',  
      element: <Available />
    },
    {
      path: '/available/newslot',  
      element: <NewSlot />
    }

  ]) 





  return(
    <>
    <RouterProvider router = {router}/>
    </>
  )


}

export default App
