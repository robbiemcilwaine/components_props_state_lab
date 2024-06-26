const Cake = ({singleCake}) => {
    // function for calculating profit
    // function for average rating
    const calculateAverageRating = (ratings) => {
        const total = ratings.reduce((agg, rating) => 
            agg + rating, 0
        )
        return (total / ratings.length).toFixed(1);
    }

    // function for populating ul with ingredients
    const populateIngredients = (ingredients) => {
        return ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ));
    }

    return (
        <>
            <h2>Cake</h2>
            <h3>Ingredients:</h3>
            <ul>
                {populateIngredients(singleCake.ingredients)}
            </ul>
            <p>Average Rating: {calculateAverageRating(singleCake.rating)}</p>
            <p>Bakery Till:</p>
        </>
    )
}

export default Cake;

/* <ul>Ingredients: {populateIngredients(singleCake.ingredients)}</ul> */