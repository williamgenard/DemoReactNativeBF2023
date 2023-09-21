import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function App() {

  const [input, setInput] = useState("")
  const [switchButton, setSwitchButton] = useState(false)

  const products = [
    {
      id: 1, 
      name: "Pomme",
      price:45
    },
    {
      id: 2, 
      name: "Cerise",
      price:32
    },
    {
      id: 3, 
      name: "Poire",
      price:12
    }
  ]

  const handlePress = () => {
    console.log(input)
  }

  const handlePressable = () => {
    console.log(input)
  }

  return (
    <View style={styles.container}>
      <Text>Bonjour </Text>
      <TextInput value={input} onChangeText={t => setInput(t)}></TextInput>
      <Button title='Press me' onPress={handlePress}></Button>
      <Pressable onPress={handlePressable}>
        <Text>Press me, I am a pressable</Text>
      </Pressable>
      <Switch value={switchButton} onValueChange={() => setSwitchButton(p => !p)}></Switch>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Text>{item.name} : {item.price}</Text>
        )}
        keyExtractor={item => item.id}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },
});
