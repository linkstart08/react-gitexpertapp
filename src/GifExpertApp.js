import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState([]);



    /*  const handleAdd = () => {
         //setCategories(['HunterXHunter', ...categories]);
         setCategories(cats => [...cats, 'HunterXHunter']);
     } */

    return (
        <>
            <h2 className="animate__animated animate__bounce">GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {categories.length === 0 && <p className="animate__animated animate__backInLeft"> Comienze a buscar su Gif Favorito</p>}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
