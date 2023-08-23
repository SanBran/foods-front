"use client"
import { Roboto_Condensed, Montserrat, Fira_Sans } from "next/font/google";
import { Recipe } from "@/redux/Features/recipesSlice";

interface Props {
  recipe: Recipe; 
  index: number

}

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400"]
})
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"]
})
const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["400"]
})


const Card: React.FC<Props> = ({ recipe, index }) => {

  


  const firstSummary = recipe.summary.split("<b>").join(" ")
  const secondSummary = firstSummary.split("</b>").join(" ")
  const thirdSummary = secondSummary.split("spoonacular score of")
  const fixedSummary = thirdSummary[0] + "spoonacular score of " + recipe.healthScore + "%"
  
  
  return (
    <div className="flex border-2 border-gray-500 p-10 mx-auto bg-white w-9/12">
      {index % 2 === 0 ? ( 
        <>
    
          <img className="h-80" src={recipe.image} alt="image" />
          <div className="p-10">
            <h1 className={`${roboto.className} text-4xl mb-10`}>{recipe.title}</h1>
            <p className={`${fira.className} text-lg`}>{fixedSummary}</p>
          </div>
        </>
      ) : ( // Renderizar contenido diferente para índices impares
      <>
          <div className="p-10">
            <h1 className={`${roboto.className} text-4xl mb-10`}>{recipe.title}</h1>
            <p className={`${fira.className} text-lg`}>{fixedSummary}</p>
          </div>
      
          <img className="h-80" src={recipe.image} alt="image" />
        </>
      )}
    </div>
  );
}

export default Card