import { useState } from "react";
import Cake from "../components/Cake";

const BakeryContainer = () => {

    const [cakes, setCakes] = useState(
        [
            {
                cakeName: "Victoria Sponge",
                   ingredients: [
                       "eggs",
                      "butter",
                      "sugar",
                          "self-raising flour",
                      "baking powder",
                      "milk"
                  ],
                price: 5,
                rating: 5
            },
            {
                 cakeName: "Tea Loaf",
                   ingredients: [
                       "eggs",
                      "oil",
                      "dried fruit",
                          "sugar",
                      "self-raising flour",
                      "strong tea",
                  ],
                price: 2,
                rating: 3
            },
            {
                 cakeName: "Carrot Cake",
                   ingredients: [
                        "carrots",
                          "walnuts",
                      "oil",
                          "cream cheese",
                          "flour",
                      "sugar",
                   ],
                price: 8,
                rating: 5
            }
        ] 
    )

    return (
        <>
        <h2>Cakes:</h2>
        <ul>
            <ul><Cake cake = {cakes[0]}/></ul>
            <ul></ul>
            <ul><Cake cake = {cakes[1]}/></ul>
            <ul><Cake cake = {cakes[2]}/></ul>
        </ul>
    
        </>
    )
}

export default BakeryContainer;