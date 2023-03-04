import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import BoardPage from './pages/Board/Board';
import Calendar from './pages/Calendar/Calendar';
import Dashboard from './pages/Dashboard/Dashboard';
import DataGrid from './pages/DataGrid/DataGrid';


const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="calendar" element={<Calendar/>}/>
          <Route path="board" element={<BoardPage/>}/>
          <Route path="users" element={<DataGrid/>}/>
          
        </Route>

      </Routes>
    </BrowserRouter>
  </div>
};

export default App;
