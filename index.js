// Assignment #1: Make ingredients scalable, regardless of where they are on the page.
const Recipes = require('./recipes.json')

const formatRecipeBody = (body) => {
    const formattedBody = {
        prelude: '',
        ingredientGroups: [
            '',
            ''
        ],
        instructionGroups: [
            '',
            ''
        ]
    }

    const ingredients = []

    // if # at start of line || # after '- ' { it's an ingredient }

    // for (let c in body) {
    //     let char = body[c]

    //     if (parseInt(char)) {
    //         if (body[c - 1] && parseInt(body[c - 1])) {
    //             // tag this one onto that one
    //             if (Recipes['Apple Crisp'].body === body) {
    //                 console.log('A continuation! ', body[c-1], body[c])
    //             }
    //         }

    //         if (char === 'n' && body[c - 1] && body[c - 1] === '\\') {

    //         }

    //         ingredients.push(parseInt(char))
    //     }
    // }

    const units = [ //.toUppercase()
        't',
        'teaspoon',
        'tablespoon',
        'c',
        'cup',
        'g',
        'oz',
        'ounce',
        'tbsp'
    ] // Should I even be parsing these?

    body.split('\n').forEach(bodyLine => {
        if (parseInt(bodyLine[0]) && bodyLine[1] !== '.') {
            // console.log('Aha! ', bodyLine)
        }

        if (parseInt(bodyLine[0]) && bodyLine[1] !== '.' && bodyLine.endsWith('.')) {
            console.log(bodyLine)
        }
    })

    return (
        ingredients
    )
}

for (let r in Recipes) {
    let recipe = Recipes[r]
    recipe.body = formatRecipeBody(recipe.body)
}

console.log(Recipes['Apple Crisp'].body)
// console.log('Apples are super-duper tasty'.substring(3, 9))

// Organization:
/*
 - Prelude
 - ingredients
    - number/amount
    - unit (volume/weight)
    - name
 - instructions
*/

// Side note: add comments feature.
// ---ConsultWithJared: /internet Is it better to leave this null and include it in each,
// or only include it when it's needed?

// ForsythRecipes::error
// Algerian Flatbread shows up in both matching content *and* matching title



// Then render the ingerdient groups a certain way
    /* Is each line an object? e.g.
    { value: 'Here are the chicken-soup-sauce thingies:' },
    {
        number: 2,
        unit: 'grams',
        value: 'chicken-soup oil'
    },
    {
        number: 1.5,
        unit: 'cups',
        value: 'whole wheat flour'
    },
    { value: 'Dressing:' },
    {
        number: 1.45,
        unit 'ounces',
        value: 'chicken soup fish octopus'
    }
    */