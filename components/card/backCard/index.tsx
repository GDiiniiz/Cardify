import { Text, View } from "react-native"

interface cardInfoProps {
  cvvCard?: string,
  dataCard?: string
}

export function BackCard({ cvvCard, dataCard }: cardInfoProps) {

  return (
    <View style={{
      backgroundColor: '#9F9D47',
      width: '100%',
      height: 250,
      borderRadius: 30
    }}>

      <View style={{
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        flexDirection:'row',
        alignItems:'center',
      }}>
        <View>
          <Text style={{
            fontWeight: '600',
            fontSize: 14,
            color: '#193541'
          }}>
            Validade
          </Text>
        <Text style={{
          fontWeight: '600',
          fontSize: 21,
          color: '#193541'
        }}>
            {dataCard}
        </Text>
        </View>

        <View>
          <Text style={{
            fontWeight: '600',
            fontSize: 14,
            color: '#193541'
          }}>
            Cvv
          </Text>
        <Text style={{
          fontWeight: '600',
          fontSize: 21,
          color: '#193541'
        }}>
          {cvvCard}
        </Text>
        </View>
      </View>


      <View style={{
        backgroundColor:'#000',
        width: '100%',
        paddingVertical:30,
        marginBottom:30
      }}>

      </View>
    </View>

  )
}