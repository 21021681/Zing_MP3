import React from 'react'
import icons from '../ultis/icons'

const {FiSearch} = icons

const Search = () => {
  return (
    <div className='w-full flex items-center'>
        <span className='h-10 pl-4 bg-[#DDE4E4] flex items-center justify-center rounded-l-[20px] text-gray-400'>
        <FiSearch size={24}/>
        </span>
        <input type="text" 
        className='outline-none  px-4 py-2 bg-[#DDE4E4] w-full rounded-r-[20px] h-10 text-gray-500'
        placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
        />
    </div>
  )
}

export default Search