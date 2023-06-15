import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Katalog from './components/Katalog';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
      </Routes>
    </>
  );
}

export default App;
