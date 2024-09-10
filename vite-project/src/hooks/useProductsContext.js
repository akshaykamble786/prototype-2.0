import { useContext } from 'react'
import ProductContext from '../context/ProductsContext'

const useProductsContext = () => {
  return useContext(ProductContext)
}

export default useProductsContext