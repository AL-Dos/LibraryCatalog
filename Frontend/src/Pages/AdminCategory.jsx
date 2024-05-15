import React from 'react'
import Header from '../Components/Header'
import Category from '../Components/Category'

const AdminCategory = () => {
  return (
    <div>
      <div className='h-screen bg'>
        <div className='blurr'>
          <div className='z-40'>
            <Header />
          </div>
          <div className='flex text-center items-center justify-around h-5/6 mt-5'>
            <div className='w-5/12 h-full flex flex-col items-center justify-center bg-slate-300 bg-opacity-30 backdrop-blur-md border gap-5 rounded-xl'>
              <div>
                <h1 className='text-5xl text-white font-bebas font-extrabold mb-5 underline'>ADD CATEGORY DETAILS</h1>
              </div>
              <div className='form'>
                <label className='text-left font-raleway'>Name:</label>
                <input type='text' className='py-4 px-6 rounded-lg' />
              </div>
              <div className='form'>
                <label className='text-left font-raleway'>Status:</label>
                <select className='py-4 px-6 rounded-lg'>
                  <option value=''>Select Status</option>
                  <option value='select'>Active</option>
                  <option value='select'>Inactive</option>
                </select>
              </div>
              <div className='form mt-10'>
                <button className='button font-raleway '>Submit</button>
              </div>
            </div>
            <div className='w-5/12 h-full flex items-center justify-center'>
              <div className='w-full h-full border rounded-xl bg-slate-300 bg-opacity-30 backdrop-blur-md'>
                <table class="table-auto w-full">
                  <thead>
                    <tr className='border-b font-bebas underline text-3xl text-white'>
                      <th className='p-5'>#</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Category Number='1' Category='Anime' Status='Active'/>
                    <Category Number='2' Category='Fiction' Status='Inactive'/>
                    <Category Number='3' Category='Non_Fiction' Status='Inactive'/>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCategory