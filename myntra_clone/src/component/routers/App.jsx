import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"
import Fetch_item from "../Fetch_items"
import { useSelector } from "react-redux"
import Loading from "../Loading"

function App() {
const fetchstatus=useSelector((store)=>store.fetch_data)

  return <>
    <Header />
    <Fetch_item />
    {fetchstatus.fetch_done?<Outlet/>:<Loading/>}
    
    <Footer />
  </>
}
export default App
