import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import TaskBoard from "./Components/Task/TaskBoard";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
