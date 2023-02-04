import React from 'react'
import dashboard from "../../assets/img/dashboard.png"
import billing from "../../assets/img/bill.png"
import customers from "../../assets/img/customers.png"
import product from "../../assets/img/product.png"
import supply from "../../assets/img/supply.jpg"



const Sidenav = () => {
  return (
    <div className='flex flex-col p-5 gap-5 bg-blue rounded-xl'>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <img src={dashboard} className='w-12 h-12'></img>
            <span className='text-white'>Dashboard</span>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <img src={billing} className='w-12 h-12'></img>
            <span className='text-white'>Billing</span>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <img src={customers} className='w-12 h-12'></img>
            <span className='text-white'>Customers</span>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <img src={product} className='w-12 h-12'></img>
            <span className='text-white'>Products</span>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <img src={supply} className='w-12 h-12'></img>
            <span className='text-white'>Stock</span>
        </div>
    </div>
  )
}

export default Sidenav;