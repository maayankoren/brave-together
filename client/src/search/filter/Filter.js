import React, { useState } from 'react'
import './Filter.css'

const FILTERS = [
    {
        name:"יום השואה והגבורה",
        isSelected:false
    }, 
    {
        name:"תיעוד הגיבור/ה",
        isSelected:false
    },
    {
        name:"משלחת לפולין",
        isSelected:false
    },
    {
        name: "חגי ישראל",
        isSelected:false
    },
    {
        name: "יהודי מציל יהודי",
        isSelected:false
    },
    {
        name:"חסידי אומות עולם",
        isSelected:false
    },
    {
        name: "אחר",
        isSelected:false
    }
]

const Filter = ({data,setFilteredData}) => {
    const [isOpen,setIsOpen]= useState(false);
    const [filters,setFilters] = useState(FILTERS)
    const [selectedFilters,setSelectedFilters]=useState([])

    const handleFiltersClick=()=>{
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    const renderFilters =()=>{
        return filters.map((filter)=>{
            return(
                <div className={filter.isSelected ? 'filter-selected' : 'filter'} onClick={()=>selectFilter(filter)}>
                    {filter.name}
                </div>
            )
        })
    }
    const selectFilter=(filter)=>{
        const filterExists = selectedFilters.filter(fil=>fil===filter).length > 0;
        if(!filterExists){
            setSelectedFilters([...selectedFilters,filter])
            const tempFilters =[...filters]
            tempFilters.forEach((tempFilt)=>{
                if(tempFilt===filter){
                    tempFilt.isSelected=true;
                }
            })
            setFilters(tempFilters)
        }
        else{
            const tempSelectedFilters = selectedFilters.filter((fil)=> fil !==filter)
            setSelectedFilters(tempSelectedFilters);
            const tempFilters =[...filters]
            tempFilters.forEach((tempFilt)=>{
                if(tempFilt===filter){
                    tempFilt.isSelected=false;
                }
            })
        }
    }

    const handleSelectedFilters=()=>{
        if(selectedFilters){
          const tempData = data.filter(item=>item.tags.some(tag=> selectedFilters.includes(tag)))
          if(tempData.length>0){
              setFilters(tempData)
          }
        }
        handleCloseFilters()
    }

    const handleCloseFilters =()=>{
        const tempFilters = [...filters]
        tempFilters.forEach((filter)=>filter.isSelected=false);
        setFilters(tempFilters)
        setIsOpen(false)

    }
    return (
        <div className='Filter'>
            <div className='filter-button'>
                <button onClick={handleFiltersClick}>filters</button>
            </div>
            {isOpen &&
                 <div className='filters'>
                     <div className='filters-line'>
                        <div  className='filters-button' onClick={handleSelectedFilters}>✓</div>
                        <h3>סינון</h3>
                        <div className='filters-button' onClick={handleCloseFilters}>✕</div>
                     </div>
                     <div className='filters-container'>
                        {renderFilters()}
                     </div>
                 </div>
            }
        </div>
    )
}

export default Filter
