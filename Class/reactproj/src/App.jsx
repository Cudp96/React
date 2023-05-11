import { Routes, Route } from "react-router-dom";
import "./App.css";
import Counter from "./Pages/Counter/index";
import Header from "./components/Navbar/Header";
import StudentLister from "./Pages/StudentLister";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Products from "./Pages/Products/Products";
import { useState } from "react";
import ProductsPage from "./Pages/ProductionPages";
import ProductDetailPage from "./Pages/ProductDetailPage";
import GlobalState from "./context/GlobalState";

function App() {
  const [students, setStudents] = useState(
    ['Sudeep', 'Sagar', 'Suresh', 'Bishwojit', 'Anisha', 'Naman', 'Manita', 'Suhan']
  )

  return (
    <>
      <GlobalState>
        <Header />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/stu" element={<StudentLister stud={students} setStudents={setStudents} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/productscd' element={<Products />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<ProductDetailPage />} />
        </Routes>
      </GlobalState>

    </>
  );
}

export default App;
