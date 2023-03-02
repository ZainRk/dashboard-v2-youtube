import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';


const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route path="dashboard" element={<Dashboard/>}/>
          
        </Route>

      </Routes>
    </BrowserRouter>
  </div>
};

export default App;
