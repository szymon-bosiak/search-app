import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Route, Routes, useParams, Navigate, useNavigate } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import ProductsList from './components/ProductsList'
import ProductInfo from './components/ProductInfo'
import Pagination from './components/Pagination'
import ErrorPage from './components/ErrorPage'
import { API_URL_AFTER, API_URL_BEFORE, DETAIL_API_URL } from './API';

function App() {

  const { id } = useParams();

  const [count, setCount] = useState(1);
  const [currentPageUrl, setCurrentPageUrl] = useState(`${API_URL_BEFORE}${id}${API_URL_AFTER}`);
  const [products, setProducts] = useState([]);
  const [childData, setChildData] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(currentPageUrl).then(res => {
      setProducts(res.data.data);
    }).catch(err => navigate(`error/`))
  }, [currentPageUrl]);

  //Search function
  function inputValue(childData: string) {
    setChildData(childData)

    if (childData.length !== 0) {
      setChildData((childData: string) => {
        setCurrentPageUrl(`${DETAIL_API_URL}${childData}`);
        return currentPageUrl;
      })
    } else {
      setCurrentPageUrl(`${API_URL_BEFORE}${id}${API_URL_AFTER}`);
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
      setCurrentPageUrl(`${API_URL_BEFORE}${id}${API_URL_AFTER}`);
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
      setCurrentPageUrl(`${API_URL_BEFORE}${id}${API_URL_AFTER}`);
      return id;
    });
  };

  return (
    <>
      <SearchBar products={products} setProducts={setProducts} childData={childData}
        inputValue={inputValue} id={id} />

      <Routes >
        <Route path="/" element={<Navigate to="/page/1" />} />
        <Route path='page/:id' element={<ProductsList products={products} setCount={setCount}
          setCurrentPageUrl={setCurrentPageUrl} />} />
        <Route path={`product/:id`} element={<ProductInfo products={products} currentPageUrl={currentPageUrl}
          setCurrentPageUrl={setCurrentPageUrl} />} />
        <Route path='*' element={<h1 className='error_message'>Error - page not found</h1>} />
        <Route path='error/' element={<ErrorPage />} />
      </Routes>

      <Pagination nextPage={nextPage} prevPage={prevPage} count={count} />
    </>
  );
}

export default App;
