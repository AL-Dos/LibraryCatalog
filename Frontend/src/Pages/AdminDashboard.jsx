import React from 'react'
import Header from '../Components/Header'

const AdminDashboard = () => {

  return (
    <div>
      <div className='h-screen bg'>
        <div className='blurr'>
          <div className='z-40'>
            <Header />
          </div>
          <div className='flex flex-col items-center h-5/6 my-5 mx-5 z-20'>
            <div className='flex w-10/12 h-3/4 text-center justify-evenly items-center gap-10 z-10'>
              <div className='cards z-0'>
                <h1 className='w-6/12 h-full flex items-center justify-center border-r-2'>TOTAL<br />BOOKS</h1>
                <h1 className='w-6/12 text-6xl font-dm'>01</h1>
              </div>
              <div className='cards z-0'>
                <h1 className='w-6/12 h-full flex items-center justify-center border-r-2'>AVAILABLE<br />BOOKS</h1>
                <h1 className='w-6/12 text-6xl font-dm'>01</h1>
              </div>
              <div className='cards z-0'>
                <h1 className='w-6/12 h-full flex items-center justify-center border-r-2'>ISSUED<br />BOOKS</h1>
                <h1 className='w-6/12 text-6xl font-dm'>00</h1>
              </div>
            </div>
            <div className='flex w-10/12 h-3/4 text-center justify-evenly items-center z-10'>
              <div className='cards z-0'>
                <h1 className='w-6/12 h-full flex items-center justify-center border-r-2'>RETURNED<br />BOOKS</h1>
                <h1 className='w-6/12 text-6xl font-dm'>00</h1>
              </div>
              <div className='cards z-0'>
                <h1 className='w-6/12 h-full flex items-center justify-center border-r-2'>TOTAL<br />USERS</h1>
                <h1 className='w-6/12 text-6xl font-dm'>01</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard