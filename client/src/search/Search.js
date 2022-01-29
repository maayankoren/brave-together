import React, { useEffect, useRef,useState } from 'react'
import './Search.css'
import Filter from './filter/Filter'


const Search = ({allData,setFilteredData}) => {
    const searchInputRef = useRef();
    const[currentData,setCurrentData]=useState(allData);

    useEffect(()=>{
        searchInputRef.current.focus();
    },[])

    const handleChange = (event)=>{
        const term = event.target.value.toLowerCase();
        if(allData){
            const relevantData = allData
            .filter((item)=>(item.text.toLowerCase().includes(term))||
                (item.author.toLowerCase().includes(term))||
                (item.country.toLowerCase().includes(term)))

            if(relevantData.length>0){
                setFilteredData(relevantData)
            }
            else{
                setFilteredData([])
            }
        }
    }

    return (
        <div className='Search'>
            <div className='search-form'>
                <form>
                    <input 
                        className='search-input' 
                        type='text' 
                        ref={searchInputRef}
                        onChange={handleChange}
                        placeholder="חיפוש לפי שם סיפור,גיבור/ה או מדינה"/>
                </form>
            </div>
            <Filter data={currentData} setFilteredData={setFilteredData}/>
        </div>
    )
}

export default Search
