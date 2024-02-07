import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import RemoveModal from "./src/components/RemoveModal";

export default function App() {
const [cartItems, setCartItems] = useState([DATA])
const [inputValue, setInputValue] = useState("");
const addItem = ()=>{
  const newItem = {
    name: inputValue,
    id: new Date().getTime(),
  }
  setCartItems([...cartItems, newItem])
}
const [modalVisible, setModalVisible] = useState(false);
const [itemSelected, setItemSelected] = useState(null);
const handleInputChange = (value) => setInputValue(value);
const handleModal = (id) => {
  setModalVisible(true);
  setItemSelected(id);
  console.log(id);
};





  return (
<View style={styles.container}>
{/* //HEADER */}
<RemoveModal
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
      />

  <View style={{flexDirection:"row", justifyContent:"center", paddingHorizontal: 5}} >
    <Text style={{padding: 3, marginTop: 13, fontWeight: 'bold', color: "blue"}}>CARRITO LIBRE</Text>
    <Image style={{marginTop: 3, width:50, height: 50,}} source={{uri:"https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532320cblq3.png"}}></Image>
</View>

{/* // BODY */}
  <View>
  <TextInput
          onChangeText={handleInputChange}
          value={inputValue}
          style={styles.input}
          placeholder="Ingrese un producto"
        />
        <Pressable onPress={addItem}>
          <Text style={{ fontSize: 40 }}>+</Text>
        </Pressable>
    <FlatList
    data={cartItems}
          renderItem={({ item }) => (
            <View style={{ width: 400, flexDirection: "row" }}>
              <Text style={styles.product}>{item.name}</Text>
              <Pressable onPress={() => handleModal(item.id)}>
                <Text style={{ fontSize: 20 }}>🚮</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
    />
  </View>
</View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  products: {
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 20
  }
});

const DATA=[
{
  name:"Remera",
  id: 1
},
{
  name: "Pantalon",
  id: 2
},
{
  name:"Gorra" ,
  id: 3 
},
{
  name:"Zapatilla" ,
  id:4
}
]