import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ViewBundle } from './Components/ViewBundle';

export default function App() {
  const [value, setValue] = useState();

  const handleChangeValue = (value) => {

  }
  return (
    <View style={styles.container}>
      <ViewBundle value={-1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
