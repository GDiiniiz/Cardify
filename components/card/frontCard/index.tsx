import { useEffect, useState } from "react"
import { Image, Text, View } from "react-native"

interface cardInfoProps{
  numberCard?: string,
  nameCard?: string
}

export function Card ({numberCard, nameCard} : cardInfoProps) {

  const imagesFlag =[
    {
      'Visa': 'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-1024.png'
    },
    {
      'Mastercard': require('../../images/mastercard.png')
    }
  ]

  const [flags, setFlags] = useState(false)
  const [flagNumber, setFlagNumber] = useState(Boolean)

  useEffect(() => {
    if(numberCard && numberCard?.length >= 4){
      setFlags(true)
    }else{
      setFlags(false)
    }
    if (numberCard && numberCard.startsWith('5')) {
      setFlagNumber(true);
    } if (numberCard && numberCard.startsWith('4')) {
      setFlagNumber(false);
    }
  }, [numberCard]);


  return(

        <View style={{
        backgroundColor: '#9F9D47',
          width: '100%',
          height: 250,
          borderRadius: 30
        }}>
          
          <View style={{
            flex:1,
            justifyContent:'center',
            paddingHorizontal:16,
            gap: 32
          }}>
            <Text style={{
              fontWeight: '600',
              fontSize: 21,
              color:'#193541'
            }}>
              {numberCard}
            </Text>

              <View style={{flexDirection:'row', alignItems:'center', gap: 10, justifyContent:'space-between'}}>
                <View style={{ width: 200, maxHeight: 100}}>
                  <Text style={{
                    fontWeight:'600', 
                    fontSize: 17,
                    color: '#193541'
                    }}>
                    {nameCard}
                  </Text>
              </View>
            {flags ? (
              <>
                {flagNumber ? (
                <Image
                  style={{ width: 60, height: 50,  }}
                  source={imagesFlag[1]['Mastercard']}
                />
                ) : (
                <Image
                  style={{ width: 60, height: 50,  }}
                  source={{ uri: imagesFlag[0]['Visa'] }}
                />
                )}
              </>
            ) : null}
          
              </View>

          </View>
        </View>

  )
}