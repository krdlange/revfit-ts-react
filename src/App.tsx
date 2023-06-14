import Navbar from "@/scenes/navbar";
import { useState } from "react";

// entry point for different pages in the app
function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
