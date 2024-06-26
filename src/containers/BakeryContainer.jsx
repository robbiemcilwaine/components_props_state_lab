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

    const CakesList = () => {
        return (
            <div>
                {CakesList.map((cake, index) => (
                    <Cake key = {index} singleCake = {cake} />
                ))}
            </div>
        )
    }

    return (
        <>
            <h1>Cakes:</h1>
            <br />
            <p>Average Rating: </p>
            <p>Bakery Till: </p>

        </>
    )
}

export default BakeryContainer;