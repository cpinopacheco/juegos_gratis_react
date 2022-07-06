import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppProvider";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import MyChannel from "./pages/MyChannel";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="galeria" element={<Gallery />} />
            <Route path="canal" element={<MyChannel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
