import React ,{useEffect} from 'react'
import storeItems from '../data/storeItems.json'
import StoreItem from './StoreItem'
import { useShopingCarte } from '../context/ShopingCarteProvider'

const Store = () => {
  const {inputValue} = useShopingCarte()
  const itemFind = ()=>{
    return storeItems.filter(item=> item.title.toLowerCase().includes(inputValue))
  }

  return (
    <>
    <h1 className='bg-light p-2 shdow-md mb-3'>Store</h1>
    <div className='container text-center'>
      <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3'>
            {
          
            
            itemFind().length > 0 ? itemFind().map((item)=>{
              return<>
            <div className='col' key={item.id}>
              <StoreItem {...item} />
            </div> 
              </>
            
          
          }
        ):  <div className='alert alert-warning w-100'><h1>no items </h1></div>
      }

      </div>

    </div>

    </>
  )
}

export default Store
