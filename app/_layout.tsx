import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";


LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
      <Stack
      screenOptions={{
        headerStyle: { 
          backgroundColor: '#2490ae'},
        headerShadowVisible: true,
        headerTintColor: '#fff',
         }}
      >
      
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen name="+not-fount" options={{}} />
       </Stack>
       <StatusBar style="light"/>
     </>
  );
}
