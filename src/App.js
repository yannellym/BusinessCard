import Info from './components/Info';
import Interests from './components/Interests';
import About from "./components/About";
import Footer from "./components/Footer";
import Photo from "./components/Photo";

function App() {
  return (
    <div className="card">
       <Photo />
       <div className="body">
          <Info />
          <section className="body--container">
              <About />
              <Interests />
          </section>
          <Footer />
       </div> 
    </div>
  );
}

export default App;
