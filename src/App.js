import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

import Footer from './Pages/Shared/Footer/Footer';
import ScrollTop from './Pages/Shared/ScrollTop/ScrollTop';
import Register from './Pages/Form/Register/Register';
import Login from './Pages/Form/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import AddService from './Pages/AddService/AddService';
import { ToastContainer } from 'react-toastify';
import MyItems from './Pages/MyItems/MyItems';
import Contact from './Pages/Contact/Contact';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:productId" element={
          <RequireAuth>
            <ServiceDetails />
          </RequireAuth>
        } />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/manageInventories" element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>
        } />
        <Route path="/myItem" element={
          <RequireAuth>
            <MyItems/>
          </RequireAuth>
        } />
        <Route path="/addService" element={<AddService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollTop></ScrollTop>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
