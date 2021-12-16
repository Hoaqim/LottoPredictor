import Home from './components/Home'
import {BrowserRouter as Router,Routes , Route} from 'react-router-dom'
import Coupon from './components/Coupon'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Coupon" element={<Coupon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
