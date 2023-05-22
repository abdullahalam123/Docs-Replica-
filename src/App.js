import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className="App">
      <Header />

      <Box display={"grid"} gridTemplateColumns={"95% 5%"}>
        <Box>
          <Toolbar />
          <Editor />
        </Box>
        <Box>
          <Sidebar />
        </Box>
      </Box>
    </div>
  );
}

export default App;
