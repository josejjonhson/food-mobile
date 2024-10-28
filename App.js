
import { Text, View } from 'react-native';
import { styles } from "./style.js";
import Button from './src/components/button/button.jsx';

export default function App() {
  
  const nome = 'José';

  return (<View>
    <Text style={styles.textos}>Hello {nome}</Text>

      <Button texto="Login" />
      </View>
  );
}


// JSX tem a capacidade de mesclar códigos JS com outros recursos, tags
// No JSX, quando eu quero trazer código JS no meio das tags eu tenho que utilizar {}