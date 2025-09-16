import { Stack } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

const NotFoundScreen = () => {
  return (
		<>
			<Stack.Screen options={{ title: "Oops! Not Found" }} />
			<View style={styles.container}>
				<Text style={styles.button}>NotFoundScreen</Text>
			</View>
		</>
  );
}

export default NotFoundScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        fontSize: 20,
        textDecorationLine: 'underline',
        color:'#fff'
    }
})