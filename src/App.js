import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      
      <GlobalStyle />
      <AnimatePresence>
        <Routes />
      </AnimatePresence>
    </>
  );
}

export default App;
