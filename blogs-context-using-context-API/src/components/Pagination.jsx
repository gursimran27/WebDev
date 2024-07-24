import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {

const {page , HandlePageChange , totalPages}=useContext(AppContext);

  return (
    <div className='w-full border-[3px] h-14 fixed bg-white bottom-0'>

      <footer className='w-11/12 h-14 max-w-[680px] mx-auto flex justify-between items-center'>

            <div className='flex gap-x-3'>
              {
                  page > 1 && 
                  <button onClick={ ()=>
                  HandlePageChange(page-1)}
                  className='border-[3px] rounded-md px-4 py-1 hover:border-blue-400 hover:scale-90  transition-all duration-300'>
                    Previous
                  </button>
              }

              {
                page < totalPages &&
                <button onClick={()=>
                HandlePageChange(page+1)} 
                className='border-[3px] rounded-md px-4 py-1 hover:border-blue-400 hover:scale-90  transition-all duration-300'>
                  Next
                </button>
              }

            </div>

            <div>
                <p className='text-sm font-bold'>
                  Page {page} of {totalPages}
                </p>

            </div>

      </footer>

    </div>
  )
}

export default Pagination