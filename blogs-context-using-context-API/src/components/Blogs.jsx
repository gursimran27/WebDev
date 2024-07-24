import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';
import "./Blog.css"


const Blogs = () => {

  // consuming by using useContext HOOK
  const {loading , posts}=useContext(AppContext);
// posts is an array of objects


  return (
    <div className='w-11/12 max-w-[680px] py-6 flex flex-col gap-y-7 mt-20 mb-14'>
        {
        loading?
        (<div className='flex items-center justify-center h-[80vh]'><Spinner/></div>) : 
        (
          posts.length===0? 
          (<div>No Post Found</div>) : 
          (
            /* instead of cooding here we can also create a card */
            posts.map( ((post) =>{
              return (
                <div key={post.id}>
                   <p className='font-bold text-[18px]'>{post.title}</p>
                   <p className='text-[15px]'>
                      By <span className='italic'>{post.author}</span> on <span className='underline font-semibold'>{post.category}</span>
                   </p>
                   <p className='text-[15px]'>Posted on {post.date}</p>
                   <p className='text-md mt-5'>{post.content}</p>
                   <div>
                      {
                        post.tags.map( (tag , index)=>{ //by seeing the response from API
                            return <span key={index} className='text-blue-700 text-[12px] underline font-semibold mr-2'>#{tag}</span>
                      })
                      }
                   </div>
                   <br/>
                </div>
              )
            }))
          )
        )
        }

    </div>
  )
}

export default Blogs