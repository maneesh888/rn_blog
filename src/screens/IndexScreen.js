import React, { useContext } from 'react'
import { View, StyleSheet, Text, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'


const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context)

    return <View>

        
        <FlatList
            data={state}
            keyExtractor={(blogPost) => `${blogPost.id}`}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => { navigation.navigate('Show', { id: item.id }) }}>
                    <View style={styles.row}>

                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather style={styles.icon} name="trash" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>


            }}
        />
    </View>
}
IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity style= {styles.create} onPress={() => { navigation.navigate('Create') }}>
                 <Feather name="plus" size={30} />
            </TouchableOpacity>
       
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderTopColor: 'grey'

    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },create:{
        paddingRight:10
    }
})

export default IndexScreen