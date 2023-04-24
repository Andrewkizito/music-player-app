// Importing helper modules
import { ReactElement, useMemo } from 'react'

// Importing core components
import { ColorSchemeName, StyleSheet, View, useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Colors from '../ui/colors'

interface Props {
	children: ReactElement
}

const Layout: React.FC<Props> = (props) => {
	const theme: ColorSchemeName = useColorScheme()

	const colorTheme = useMemo<'light' | 'dark'>(() => {
		if (typeof theme === 'string') return theme
		else return 'light'
	}, [])

	return (
		<View
			style={{
				...styles.container,
				backgroundColor: Colors.bg[colorTheme],
			}}
		>
			<StatusBar style={colorTheme === 'light' ? 'dark' : 'light'} />
			{props.children}
		</View>
	)
}

export default Layout

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
})
