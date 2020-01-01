import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import {EvilIcons} from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context)
    const blog = state.find((blog) => blog.id === navigation.getParam('id'))
  
    return <View>
        <Text>{blog.title} - {navigation.getParam('id')}</Text>
        <Text>{blog.content}</Text>
    </View>
}
ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity style= {styles.pencil} onPress={() => { navigation.navigate('Edit',{id:navigation.getParam('id')}) }}>
                 <EvilIcons name="pencil" size={30} />
            </TouchableOpacity>
       
        )
    }
}
const styles = StyleSheet.create({
    pencil:{
        paddingRight:10
    }
})

export default ShowScreen
