// REACT ROUTER DOM

// COMPONENTS
import { ThemeContextProvider } from "./Contexts/ThemeContext";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

// SCENES
import Dashboard from "./Scenes/Dashboard";
import UserProfile from "./Scenes/UserProfile";

function App() {
  return (
    <>
      <Nav />
      <ThemeContextProvider>
        <Dashboard />
        <UserProfile />
      </ThemeContextProvider>
      <Footer />
    </>
  );
}

export default App;
