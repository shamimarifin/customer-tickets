import { Suspense } from "react"
import Navbar from "./components/Navbar/Navbar"
import Issuesmanagement from "./components/Issuesmanagement/Issuesmanagement"
import Footer from "./components/Footer/Footer"
import Container from "./components/Container/Container"


const fetchIssues = async()=> {
  const res = await fetch('tickets.json')
  return res.json()
}

function App() {
  const fetchPromise = fetchIssues()

  
  return (
    <>
    {/* Navbar */}
      <Navbar></Navbar>
      
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Issuesmanagement  fetchPromise={fetchPromise}></Issuesmanagement>
      </Suspense>
     <div className="bg-black text-white">

        <Footer></Footer>
     </div>
     
     
    </>
  )
}

export default App
