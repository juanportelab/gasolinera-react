import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Surtidor from './pages/Surtidor';
import Product from './pages/Product';
import MethodPayment from './pages/MethodPayment';
import Quantity from './pages/Quantity';
import Resume from './pages/Resume';

function App() {
  
  return (
    <Box w="100%" h="100vh">
      <Navbar></Navbar>
      <Container paddingTop={10}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/surtidor" element={<Surtidor></Surtidor>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/method-payment" element={<MethodPayment></MethodPayment>}></Route>
          <Route path="/quantity" element={<Quantity></Quantity>}></Route>
          <Route path="/resume" element={<Resume></Resume>}></Route>
        </Routes>
      </Container>
    </Box>
  )
}

export default App
