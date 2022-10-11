import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = (props) => {

    const [categories, setCategories] = useState(['One punch']);      
    const handleAddCategory = (category)=>{
        if(category.trim().length >2 && !categories.includes(category)){
            setCategories([ category, ...categories,]);
        }

    }
    console.log("Hola mundo")

  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory handleAddCategory = {handleAddCategory}/>
    <br/>
    <ol>
        {

            categories.map((category)=>{
                return <GifGrid category={category} key={category}/>;
            })

        }
    </ol>
    </>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp