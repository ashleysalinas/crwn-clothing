import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { Routes, Route, Outlet } from 'react-router-dom'

const App = () => {


  const Shop = () => {
    return(
      <div>
        <p>I am the shop page</p>
      </div>
    )
  }
  return(
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop/>} />
      </Route>
    </Routes>
  );
}

export default App;
