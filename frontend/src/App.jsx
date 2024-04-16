// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
// import Search from './components/Search'
import  { getProductList, searchProduct } from './api'
import Search from './components/Search'

function App() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getProductList().then((result) => {
      setProducts(result)
    })
  }, [])

  const search = async (q) => {

    if(q.length < 3){
      getProductList().then((result) => {
        setProducts(result)
      })
      
    } else {
      const query = await searchProduct(q)
      // console.log({query: query});
      setProducts(query.data)
    }
  }
  return (
    <>
      <Search search={search}/>
      {/* <input onChange={({target}) => search(target.value)}/>  */}
      <div className='wrapper'>
        <Card products={products} setProducts={setProducts}/>
      </div>
    </>
  )
}

export default App
