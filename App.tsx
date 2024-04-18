import { MotiView } from 'moti';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { BackCard } from './components/card/backCard';
import { Card } from './components/card/frontCard';
import { Input } from './components/input';

export default function App() {
  const [numberCardInfo, setNumberInfoCard] = useState('')
  const [nameCardInfo, setNameCardInfo] = useState('')
  const [cvv, setCvv] = useState('')
  const [validity, setValidity] = useState('')

  function formatedNumber(numberCardInfo : any) {
    const space = numberCardInfo.replace(/\s/g, '').match(/.{1,4}/g);
    if (!space) {
      return numberCardInfo;
    }
    return space.join(' ');
  }

  function formatedDate(validade: any) {
    const numeros = validade.replace(/\D/g, '');

    if (numeros.length < 2) {
      return validade;
    }

    const month = numeros.slice(0, 2);
    const year = numeros.slice(2, 4);

    return `${month}/${year}`;
  }

  return (
    <View style={styles.container}>
        <SafeAreaView>

        {cvv.length == 0  && (
          <MotiView
            from={{
              right: (numberCardInfo && numberCardInfo.length > 0) ? 1000 : 0,
            }}
            animate={{
              right: (numberCardInfo && numberCardInfo.length > 0) ? 0 : 1000,
            }}
            transition={{ type: 'timing', duration: 1000 }}
          >
            <Card
              numberCard={numberCardInfo}
              nameCard={nameCardInfo}
            />
          </MotiView>
        )}

        {cvv && cvv.length > 0 && (

          <MotiView
            from={{
              right: (cvv && cvv.length >= 0) ? 1000 : 0,
            }}
            animate={{
              right: (cvv && cvv.length > 0) ? 0 : 1000,
            }}
            transition={{ type: 'timing', duration: 1000 }}
          >
            <BackCard cvvCard={cvv} dataCard={validity} />

          </MotiView>
        )}

        <View>
          <Input
           label='Número do cartão'
           placeHolder='Número do cartão'
           value={numberCardInfo}
           onChange={(text: any) => setNumberInfoCard(formatedNumber(text))}
           maxLength={19}
           numericKey={true} />
        </View>
        

          <View>
            <Input
              label='Nome do dono do cartão'
              placeHolder='Nome'
              value={nameCardInfo}
              onChange={setNameCardInfo}
               />
          </View>

          <View>
            <Input
              label='Cvv'
              placeHolder='Cvv'
              maxLength={3}
              numericKey={true}
              onChange={setCvv}
            />
          </View>

          <View>
            <Input
              label='Validade'
              placeHolder='Data de validade'
              maxLength={4}
              numericKey={true}
              onChange={(text: any) => setValidity(formatedDate(text))}
            />
          </View>


        </SafeAreaView>

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
