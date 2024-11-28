import WrappedAim from "./Components/Aim";
import Book from "./Components/Book";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Patners from "./Components/Patners";
import Reason from "./Components/Reason"

function App() {
  return (
    <>
      <div className="bg-spiral w-full h-full bg-no-repeat bg-cover bg-dark bg-opacity-90 text-green">
        <Header/>
        <Hero/>
        <WrappedAim/>
        <Reason/> 
        <Patners/>
        <Book/>
      </div>
    </>
  );
}

export default App;
