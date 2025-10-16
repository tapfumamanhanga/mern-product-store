import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbar from "./components/Navbar.jsx";
import { useColorModeValue } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Box minH={"100vh"} bg={bgColor}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
