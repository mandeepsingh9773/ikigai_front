import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <SignIn />
        <Footer />
      </div>
    </>
  );
}

export default App;
