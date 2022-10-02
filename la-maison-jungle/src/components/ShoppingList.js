import "../styles/ShoppingList.css"

import { plantList } from "../data/plantList.js"

import PlantItem from "./PlantItem"

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )

    return (
        <div>
            <ul>
                {categories.map(category => (
                    <li key={category}>{category}</li>
                ))}
            </ul>

            <ul className="lmj-plant-list">
                {plantList.map(({ id, cover, name, water, light }) => (
                    <PlantItem
                        key={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList