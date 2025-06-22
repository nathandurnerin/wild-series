import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/navBar";

function App() {
  return (
    <section className="min-h-screen flex flex-col bg-tertiary">
      <NavBar />
      <main className="flex-grow bg-tertiary">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default App;
