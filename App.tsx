// Importing helper modules
import { useCallback } from "react"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"

// Importing core components
import { View } from "react-native"

// Importing root navigator
import Main from "./routers/Main"

// SplashScreen.preventAutoHideAsync()

export default function App() {
	// Loading fonts
	const [fontsLoaded] = useFonts({
		"nunito-200": require("./assets/fonts/Nunito-200.ttf"),
		"nunito-300": require("./assets/fonts/Nunito-300.ttf"),
		"nunito-400": require("./assets/fonts/Nunito-400.ttf"),
		"nunito-500": require("./assets/fonts/Nunito-500.ttf"),
		"nunito-600": require("./assets/fonts/Nunito-600.ttf"),
		"nunito-700": require("./assets/fonts/Nunito-700.ttf"),
	})

	// Hide splash screen on successful font-load
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return null
	}

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<Main />
		</View>
	)
}
