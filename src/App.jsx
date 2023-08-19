import React from 'react'
import{BrowserRouter , Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import List from './pages/list/List';
import New from './pages/new/New';
import Login from './pages/login/Login';
const App = () => {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path="/">
    <Route index element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    
  </Route>
  <Route path="users">
    <Route index element={<List/>} />
    <Route path=":userId" element={<Single/>} />
    <Route path="new" element={<New/>} />
  </Route>
  <Route path="products">
    <Route index element={<List/>} />
    <Route path=":productId" element={<Single/>} />
    <Route path="new" element={<New/>} />
  </Route>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App