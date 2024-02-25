import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './Searchlist.css'
function Searchlist({ TitleArray, setSearchQuery }) {
  return (
    <>
      <div className='Container_searchlist'>
        {
          TitleArray.map(m => {
            return <p
              key={m}
              onClick={e => setSearchQuery(m)}
              className='titleItem'>
              <FaSearch />
              {m}
            </p>
          })
        }
      </div>
    </>
  )
}

export default Searchlist
