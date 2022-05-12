import {BrowserRouter as Router,Routes, Route} from  "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Index from "./Pages/Home"
import Show from "./Pages/Show"
import New from "./Pages/New"
import Edit from "./Pages/Edit"


function App() {
  return (
    <div className="App">
   <Router>
     <Navbar />
     <main>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/listings" element={<Index />} />
         <Route path="/listings/:id" element={<Show />} />
         <Route path="/listings/new" element={<New />} />
         <Route path="/listings/:id/edit" elemenent={ <Edit />} />

         

       </Routes>

     </main>
   </Router>
    </div>
  );
}

export default App;
