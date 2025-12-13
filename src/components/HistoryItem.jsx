import React from 'react'
import { MdDelete } from "react-icons/md";
export default function HistoryItem() {
  return (
    <div className='text-white bg-slate-800 m-auto hover:bg-slate-700 h-20 mt-5 w-70 flex flex-col rounded-lg border border-blue-500'>
        <div className='flex pl-3 overflow-hidden pt-1 '><h3>mesdvsc fyqw9yfqwy fwg fygqw0fgqwegyc   wufhqhwu hfhqwf phwq fheh fq hwfh 8qwhefh  8 qhf8whssage</h3> <span className='relative right-3 text-2xl top-3 text-red-900'><MdDelete/></span></div>
        <div className='pl-3 mt-1 mb-1 text-xs text-gray-500'>today </div>
    </div>
  )
}
