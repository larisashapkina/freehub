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
         <Route path="/products" element={<Index />} />
         <Route path="/products/:id" element={<Show />} />
         <Route path="/products/new" element={<New />} />
         <Route path="/products/:id/edit" elemenent={ <Edit />} />

         

       </Routes>

     </main>
   </Router>
    </div>
  );
}

export default App;
