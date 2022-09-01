import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from './routes/ProductListing';
import ProductDetail from './routes/ProductDetail';
import NotFound from './components/NotFound';
import "./App.scss"
import Login from './routes/Login';
import Details from './routes/Details';

function App() {
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
        <Routes>
          <Route path="/main/detail/:category" element={<Details />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
