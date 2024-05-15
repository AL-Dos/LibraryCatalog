import React from 'react'
import Header from '../Components/Header'

const AdminIssueB = () => {
  return (
    <div>
      <div className='h-screen bg'>
        <div className='blur'>
          <div className='z-40'>
            <Header />
          </div>
          <div className='h-5/6 w-screen flex justify-center mt-5'>
            <div className='w-full flex flex-col items-center justify-center'>
              <div className='flex h-3/6 w-full items-center justify-center gap-5'>
                <h1 className='h-full font-bebas text-right text-5xl text-white font-bold'>BOOK<br />REQUESTS</h1>
                <ul className='h-full w-10/12 pb-2 flex justify-between gap-5 items-center overflow-y-auto'>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg icard1' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>Naruto Shippuden</h1>
                      <h1 className='text-xs font-raleway font-normal'>Requested By: Nicklaus Ling</h1>
                      <div className='text-xs font-raleway font-normal'>Quantity: 127</div>
                      <div className='flex gap-5'>
                        <div className='flex flex-col mb-1'>
                          <label className='text-xs font-raleway font-normal'>Date Requested:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                        <div className='flex flex-col my-1'>
                          <label className='text-xs font-raleway font-normal'>Due Date:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                      </div>

                      <div className='flex gap-5 mb-5 mt-2'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Accept</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Reject</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Requested By:</h1>
                      <div className='text-xs font-raleway font-normal'>Quantity:</div>
                      <div className='flex gap-5'>
                        <div className='flex flex-col mb-1'>
                          <label className='text-xs font-raleway font-normal'>Date Requested:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                        <div className='flex flex-col my-1'>
                          <label className='text-xs font-raleway font-normal'>Due Date:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                      </div>
                      <div className='flex gap-5 mb-5 mt-2'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Accept</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Reject</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Requested By:</h1>
                      <div className='text-xs font-raleway font-normal'>Quantity:</div>
                      <div className='flex gap-5'>
                        <div className='flex flex-col mb-1'>
                          <label className='text-xs font-raleway font-normal'>Date Requested:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                        <div className='flex flex-col my-1'>
                          <label className='text-xs font-raleway font-normal'>Due Date:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                      </div>
                      <div className='flex gap-5 mb-5 mt-2'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Accept</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Reject</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Requested By:</h1>
                      <div className='text-xs font-raleway font-normal'>Quantity:</div>
                      <div className='flex gap-5'>
                        <div className='flex flex-col mb-1'>
                          <label className='text-xs font-raleway font-normal'>Date Requested:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                        <div className='flex flex-col my-1'>
                          <label className='text-xs font-raleway font-normal'>Due Date:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                      </div>
                      <div className='flex gap-5 mb-5 mt-2'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Accept</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Reject</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Requested By:</h1>
                      <div className='text-xs font-raleway font-normal'>Quantity:</div>
                      <div className='flex gap-5'>
                        <div className='flex flex-col mb-1'>
                          <label className='text-xs font-raleway font-normal'>Date Requested:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                        <div className='flex flex-col my-1'>
                          <label className='text-xs font-raleway font-normal'>Due Date:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                      </div>
                      <div className='flex gap-5 mb-5 mt-2'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Accept</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Reject</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Requested By:</h1>
                      <div className='text-xs font-raleway font-normal'>Quantity:</div>
                      <div className='flex gap-5'>
                        <div className='flex flex-col mb-1'>
                          <label className='text-xs font-raleway font-normal'>Date Requested:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                        <div className='flex flex-col my-1'>
                          <label className='text-xs font-raleway font-normal'>Due Date:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                      </div>
                      <div className='flex gap-5 mb-5 mt-2'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Accept</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Reject</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Requested By:</h1>
                      <div className='text-xs font-raleway font-normal'>Quantity:</div>
                      <div className='flex gap-5'>
                        <div className='flex flex-col mb-1'>
                          <label className='text-xs font-raleway font-normal'>Date Requested:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                        <div className='flex flex-col my-1'>
                          <label className='text-xs font-raleway font-normal'>Due Date:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                      </div>
                      <div className='flex gap-5 mb-5 mt-2'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Accept</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Reject</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Requested By:</h1>
                      <div className='text-xs font-raleway font-normal'>Quantity:</div>
                      <div className='flex gap-5'>
                        <div className='flex flex-col mb-1'>
                          <label className='text-xs font-raleway font-normal'>Date Requested:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                        <div className='flex flex-col my-1'>
                          <label className='text-xs font-raleway font-normal'>Due Date:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                      </div>
                      <div className='flex gap-5 mb-5 mt-2'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Accept</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Reject</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Requested By:</h1>
                      <div className='text-xs font-raleway font-normal'>Quantity:</div>
                      <div className='flex gap-5'>
                        <div className='flex flex-col mb-1'>
                          <label className='text-xs font-raleway font-normal'>Date Requested:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                        <div className='flex flex-col my-1'>
                          <label className='text-xs font-raleway font-normal'>Due Date:</label>
                          <input type='date' className='text-black text-sm w-full font-light font-raleway rounded-lg px-3 py-1' />
                        </div>
                      </div>
                      <div className='flex gap-5 mb-5 mt-2'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Accept</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Reject</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='flex h-3/6 w-full items-center justify-center gap-5'>
                <h1 className='h-full font-bebas text-right text-5xl text-white font-bold pt-2'>BORROWED<br />BOOKS</h1>
                <ul className='h-full w-10/12 pt-2 pb-2 flex justify-between gap-5 items-center overflow-y-auto'>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg icard1' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>Naruto Shippuden</h1>
                      <h1 className='text-xs font-raleway font-normal'>Borrowed By: Nicklaus Ling</h1>
                      <div className='text-xs font-raleway font-normal'>Date Borrowed: 20/06/24</div>
                      <div className='text-xs font-raleway font-normal'>Return Due Date: 23/06/24</div>
                      <div className='flex gap-5 my-5'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Returned</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Overdue</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Borrowed By:</h1>
                      <div className='text-xs font-raleway font-normal'>Date Borrowed:</div>
                      <div className='text-xs font-raleway font-normal'>Return Due Date:</div>
                      <div className='flex gap-5 my-5'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Returned</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Overdue</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Borrowed By:</h1>
                      <div className='text-xs font-raleway font-normal'>Date Borrowed:</div>
                      <div className='text-xs font-raleway font-normal'>Return Due Date:</div>
                      <div className='flex gap-5 my-5'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Returned</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Overdue</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Borrowed By:</h1>
                      <div className='text-xs font-raleway font-normal'>Date Borrowed:</div>
                      <div className='text-xs font-raleway font-normal'>Return Due Date:</div>
                      <div className='flex gap-5 my-5'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Returned</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Overdue</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Borrowed By:</h1>
                      <div className='text-xs font-raleway font-normal'>Date Borrowed:</div>
                      <div className='text-xs font-raleway font-normal'>Return Due Date:</div>
                      <div className='flex gap-5 my-5'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Returned</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Overdue</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Borrowed By:</h1>
                      <div className='text-xs font-raleway font-normal'>Date Borrowed:</div>
                      <div className='text-xs font-raleway font-normal'>Return Due Date:</div>
                      <div className='flex gap-5 my-5'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Returned</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Overdue</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Borrowed By:</h1>
                      <div className='text-xs font-raleway font-normal'>Date Borrowed:</div>
                      <div className='text-xs font-raleway font-normal'>Return Due Date:</div>
                      <div className='flex gap-5 my-5'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Returned</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Overdue</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Borrowed By:</h1>
                      <div className='text-xs font-raleway font-normal'>Date Borrowed:</div>
                      <div className='text-xs font-raleway font-normal'>Return Due Date:</div>
                      <div className='flex gap-5 my-5'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Returned</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Overdue</button>
                      </div>
                    </div>
                  </li>
                  <li className='issue'>
                    <div className='w-11/12 h-4/6 mt-3 bg-slate-200 rounded-lg' />
                    <div className='w-11/12 flex flex-col mx-20'>
                      <h1 className='font-bebas'>BOOK TITLE</h1>
                      <h1 className='text-xs font-raleway font-normal'>Borrowed By:</h1>
                      <div className='text-xs font-raleway font-normal'>Date Borrowed:</div>
                      <div className='text-xs font-raleway font-normal'>Return Due Date:</div>
                      <div className='flex gap-5 my-5'>
                        <button className='text-xs text-black font-raleway font-normal bg-green-300 rounded-lg px-3 py-2'>Returned</button>
                        <button className='text-xs text-black font-raleway font-normal bg-red-300 rounded-lg px-3 py-2'>Overdue</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminIssueB