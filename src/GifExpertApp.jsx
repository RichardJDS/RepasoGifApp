import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';


const GifExpertApp = (props) => {

    const [categories, setCategories] = useState(['One punch']);      
    const handleAddCategory = (category)=>{
        if(category.trim().length >2 && !categories.includes(category)){
            setCategories([...categories, category]);
        }

    }


  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory handleAddCategory = {handleAddCategory}/>
    <br/>
    <ol>
        {

            categories.map((category)=>{
                return <li key={category}>{category}</li>;
            })

        }
    </ol>
    </>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp