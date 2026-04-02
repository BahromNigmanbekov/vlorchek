import React from 'react'
import HomeSwiper from '../../components/homeSwiper/HomeSwiper'
import SimplyUnique from '../../components/simplyUnique/SimplyUnique'
import Category from '../../components/category/Category'
import NewArrivals from '../../components/newArrivals/NewArrivals'
import Support from '../../components/support/Support'
import SalePrice from '../../components/salePrice/SalePrice'

function Home() {
  return (
    <div>
      <HomeSwiper/>
      <SimplyUnique/>
      <Category/>
      <NewArrivals/>
      <Support/>
      <SalePrice/>
    </div>
  )
}

export default Home
