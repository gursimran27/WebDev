import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count =useSelector( (state)=>(
        state.counter.value
    ))

    const dispatch=useDispatch();


  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
            <div className="bg-white flex justify-center items-center gap-10 py-3 rounded-sm text-[25px] text-[#344151]">
                <button
                    onClick={ ()=>dispatch(increment())}
                    className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
                >
                        +
                </button>
            
                <div className="font-bold gap-12 text-5xl">
                    {count}
                </div>

                <button
                onClick={ ()=>dispatch(decrement())}
                className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
                    -
                </button>
            </div>

    </div>
  )
}

export default Counter