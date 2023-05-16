import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="bg-gray-950 flex items-center justify-center">
      <Text className="text-zinc-50">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="light" />
    </View>
  )
}
