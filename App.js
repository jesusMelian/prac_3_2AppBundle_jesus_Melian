import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './Components/Header';
import { ViewBundle } from './Components/ViewBundle';

export default function App() {
  const [value, setValue] = useState();
  const [listTransactions, setListTransactions] = useState([]);

  const handleChangeValue = (value) => {
    setValue(parseInteger(value));
  }
  return (
    <View style={styles.container}>
      <Header value={-1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
