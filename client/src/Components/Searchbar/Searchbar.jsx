import React, { useState } from 'react'
import "./Searchbar.css"
import { FaSearch } from 'react-icons/fa'
import { BsMicFill } from 'react-icons/bs'
import Searchlist from './Searchlist'
function Searchbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchlist, setIsSearchList] = useState(false);
    const TitleArray = ["video1", "video2", "Animation", "Movie"].filter(q => q.toUpperCase().includes(searchQuery.toUpperCase()))
    return (
        <>
            <div className='Searchbar_Container'>
                <div className='Searchbar_Container2'>
                    <div className='search_div'>
                        <input type="text" className='iBox_SearchBar' placeholder='Search'
                            onChange={e => setSearchQuery(e.target.value)}
                            value={searchQuery}
                            onClick={e => setIsSearchList(true)}
                        />
                        <FaSearch className='searchIcons_searchbar'
                            onClick={e => setIsSearchList(false)}
                        />

                        <BsMicFill className='mic_searchbar' />
                        {searchQuery && isSearchlist &&
                            <Searchlist
                                setSearchQuery={setSearchQuery}
                                TitleArray={TitleArray} />
                        }
                    </div>

                </div>
            </div>

        </>
    )
}

export default Searchbar
