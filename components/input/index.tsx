import { Text, TextInput, View } from "react-native";

interface inputProps{
  placeHolder?: string,
  value?: string,
  onChange?: any
  maxLength?: number,
  label?: string,
  numericKey?: boolean
}

export function Input({ placeHolder, value, onChange, maxLength, label, numericKey } : inputProps) {
  const numeric = numericKey

  return(
    <View style={{marginVertical:8}}>
      <Text style={{
        fontSize:28,
        fontWeight:'600',
        color:'#9F9D47'
      }}>
        {label}:
      </Text>
    <View style={{
        width: 400,
        height: 80,
        borderRadius: 5,
        borderColor:'#9F9D47',
        borderWidth:3,
        padding: 16,
        marginTop: 16,
        justifyContent:'center'
    }}>
      <TextInput
          placeholder={placeHolder}
          value={value}
          onChangeText={(text) => onChange(text)}
          keyboardType={numeric ? 'numeric' : 'default'}
          maxLength={maxLength}
      />
    </View>
    </View>

  )
}