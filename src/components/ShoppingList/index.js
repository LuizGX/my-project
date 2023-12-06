import { View, Text } from "react-native"
import ListItem from "../ListItem"
import { useState } from "react"

export default function ShoppingList() {
    const [foodList, setFoodList] = useState(returnFoodList)

    
    function onItemCheck(id) {
        const updatedFoodList = foodList.map((item) => {
            if(item.id === id){
                item.checked = !item.checked
            }

            return item
        })
        
        setFoodList(updatedFoodList)
    }

    return <View>
        {foodList.map((item) => {
            return <ListItem key={item.id} item={item} onItemCheck={onItemCheck}/>
        })}
    </View>
}

const returnFoodList = () => {
    return [{id: 1, name: 'Pão de forma', quantity: 3, unit: 'un.', checked: false}, {id: 2, name: 'Arroz', quantity: 200, unit: 'g.', checked: false}, {id: 3, name: 'Feijão', quantity: 100, unit: 'g.', checked: false}]
}