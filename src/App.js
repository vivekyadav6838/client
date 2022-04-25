import './App.css';
import Navbar from './components/Navbar';
import PlanAndPricingPage from './pages/PlanAndPricingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>Buy a plan and be Interview ready!</h2>
      <PlanAndPricingPage />
    </div>
  );
}

export default App;
