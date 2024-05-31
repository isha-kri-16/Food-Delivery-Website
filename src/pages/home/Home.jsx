import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import Header from '../../components/header/Header';
import './Home.css'
import FoodDisplay from '../../FoodDisplay/FoodDisplay';

function Home() {

    const [category, setCategory] = useState("All")


    return(
        <>
        <Header />
        <ExploreMenu   category={category}  setCategory={setCategory} /> 
        <FoodDisplay   category={category}  />
        </>
    )
}

export default Home;