import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from './routes/ProductListing';
import ProductDetail from './routes/ProductDetail';
import NotFound from './components/NotFound';
import Home from './routes/Home';
import "./App.scss"
import Login from './routes/Login';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
