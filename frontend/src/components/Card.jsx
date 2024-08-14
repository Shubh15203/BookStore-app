import React from 'react'

function Card({item}) {
    
  return (
    <>
        <div className='mt-4 my-2 p-3 '>
        <div className="card bg-base-100 w-96 shadow-slate-950 border-spacing-7 border hover:scale-105 duration-200  dark:bg-slate-800 dark:text-white">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="px-2 py-1 rounded-full cursor-pointer border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
    </>
  )
}

export default Card