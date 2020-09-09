import React, { useEffect } from 'react'
import { SideNav, LayoutSidebar, Responsive, CardProduct } from 'upkit'
import menus from './menus'
import TopBar from '../../components/TopBar'
import { config } from '../../config'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/Products/actions'

const Home = () => {
  //state dari redux store
  let products = useSelector((state) => state.products)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div>
      <LayoutSidebar
        sidebar={<SideNav items={menus} verticalAlign="top" />}
        content={
          <div className="md:flex w-full mr-5 h-full min-hscreen">
            <div className="w-full md:w-3/4 pl-5 pb-10">
              <TopBar />
              <Responsive desktop={3} items="stretch">
                {products.data.map((product, index) => {
                  return (
                    <div key={index} className="p-2">
                      <CardProduct
                        title={product.name}
                        imgUrl={`${config.api_host}/upload/${product.image_url}`}
                        price={product.price}
                        onAddToCart={(_) => null}
                      />
                    </div>
                  )
                })}
              </Responsive>
            </div>
            <div
              className="w-full md:w-1/4 h-full shadow-lg border-r
border-white bg-gray-100"
            >
              Keranjang belanja di sini
            </div>
          </div>
        }
        sidebarSize={80}
      />
    </div>
  )
}

export default Home
