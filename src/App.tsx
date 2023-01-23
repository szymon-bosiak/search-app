import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Route, Routes, useParams, Navigate, useNavigate } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import ProductsList from './components/ProductsList'
import ProductInfo from './components/ProductInfo'
import Pagination from './components/Pagination'
import ErrorPage from './components/ErrorPage'

function App() {

  const { id } = useParams();

  const [count, setCount] = useState(1);
  const [currentPageUrl, setCurrentPageUrl] = useState(`https://reqres.in/api/{resource}?page=${id}+&per_page=5`);
  const [products, setProducts] = useState([]);
  const [childData, setChildData] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(currentPageUrl).then(res => {
      setProducts(res.data.data);
    }).catch(err => errMsg())

  }, [currentPageUrl]);

  //Redirectiong to Error page on error fetching data
  function errMsg() {
    navigate(`error/`)
  }

  // Return to home page function visible on Error page
  function returnToHome() {
    navigate(`/`)
  }

  //Search function
  function callback(childData: string) {
    setChildData(childData)

    if (childData.length !== 0) {
      setChildData((childData: string) => {
        setCurrentPageUrl(`https://reqres.in/api/{resource}/${childData}`);
        return currentPageUrl;
      })
    } else {
      setCurrentPageUrl(`https://reqres.in/api/{resource}?page=${id}+&per_page=5`);
      navigate(`page/1`)
      setCount(1)
    }
  }

  //Next page function
  function nextPage() {
    setCount((id) => {
      if (products.length >= 5) {
        id++;
      }
      setCurrentPageUrl(`https://reqres.in/api/{resource}?page=${id}+&per_page=5`);
      navigate(`page/${id}`)
      return id;
    });
  };

  //Previous page function
  function prevPage() {
    setCount((id) => {
      if (id > 1) {
        id--;
      }
      navigate(`page/${id}`)
      setCurrentPageUrl(`https://reqres.in/api/{resource}?page=${id}+&per_page=5`);
      return id;
    });
  };

  return (
    <>
      <SearchBar products={products} setProducts={setProducts} childData={childData}
        callback={callback} id={id} />

      <Routes >
        <Route path="/" element={<Navigate to="/page/1" />} />
        <Route path='page/:id' element={<ProductsList products={products} setCount={setCount}
          setCurrentPageUrl={setCurrentPageUrl} />} />
        <Route path={`product/:id`} element={<ProductInfo products={products} currentPageUrl={currentPageUrl}
          setCurrentPageUrl={setCurrentPageUrl} />} />
        <Route path='*' element={<h1 className='error_message'>Error - page not found</h1>} />
        <Route path='error/' element={<ErrorPage returnToHome={returnToHome} />} />
      </Routes>

      <Pagination nextPage={nextPage} prevPage={prevPage} count={count} />
    </>
  );
}

export default App;
