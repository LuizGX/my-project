import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "expo-checkbox";

export default function ListItem(props) {
    const [isChecked, setIsChecked] = useState(false)
    const {id, name, quantity, unit, checked} = props.item
    const {onItemCheck} = props

    return <View style={[styles.item, isChecked ? styles.itemChecked : styles.itemUnchecked]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.itemText, isChecked ? styles.itemTextChecked : styles.itemTextUnchecked]}>{quantity}{unit} </Text>
          <Text style={[styles.itemText, isChecked ? styles.itemTextChecked : styles.itemTextUnchecked]}>{name}</Text>
        </View>
        <CheckBox color={isChecked ? blue : orange} value={isChecked} onValueChange={(value) => {
          setIsChecked(value)
          onItemCheck(id, value)
        }
        }/>
    </View>
}

const orange = '#FF7A00'
const blue = '#2493FB'

const styles = StyleSheet.create({
    item: {
      borderRadius: 20,
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      marginTop: 10,
    },
    itemChecked: {
      borderColor: blue,
    },
    itemUnchecked: {
      borderColor: orange,
    },
    itemText: {
      fontSize: 20,
    },
    itemTextChecked: {
      color: blue,
    },
    itemTextUnchecked: {
      color: orange,
    },
  });