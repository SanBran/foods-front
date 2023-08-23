import Card from "../Card/Card"
import { Recipe } from "@/redux/Features/recipesSlice";



interface Props {
  recipes: Recipe[];
}


function Cards({ recipes }: Props) {




  return (
    <div className=" flex gap-10 flex-col bg-gray-50 p-10">
      {recipes?.map((recipe, index) => {
          
        return (<Card recipe={recipe} key={index} index={index}/>)
      })}
    </div>
  )
}

export default Cards