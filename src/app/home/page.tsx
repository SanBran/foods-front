"use client"
import React, {useEffect} from 'react'
import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux'
import Image from "next/image";
import bgImage from "./images/bg_home.jpg";
import NavBar from "@/Components/NavBar/Navbar";
import Cards from "@/Components/Cards/Cards";
import { getRecipes } from '@/redux/Features/recipesSlice';
import { selectRecipes } from "@/redux/Features/recipesSlice";
import { RootState, Appdispatch } from '@/redux/store';
import { Montserrat } from "next/font/google";
import { getDiets } from '@/redux/Features/dietsSlice';

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400"]
})

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


const Home = () => {
    const dispatch: Appdispatch = useDispatch()
    const recipes = useSelector((state: RootState) => state.recipe.recipes)
    const diets = useSelector((state: RootState) => state.diet.diets)

    useEffect(()=>{
        dispatch(getRecipes())
        dispatch(getDiets())
    },[dispatch])

    console.log(diets);
    

    return (
        <div >
            <NavBar/>
                <div className="relative">
                <Image alt="fondo" className=" w-screen h-screen " src={bgImage}/>
                <h2 className={`${montserrat.className} absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white xl3:text-8xl  md:text-6xl `}>
                    
                RECIPES FOR ALL <br /> PALATES...
                   
                     </h2>
                </div>
                <Cards recipes={recipes}/>
            
        </div>
    )
}


export default Home;
