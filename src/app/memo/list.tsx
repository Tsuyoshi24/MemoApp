import {View, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'
import {router, useNavigation} from 'expo-router'
import { useEffect } from 'react'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import LogOutButton from '../../components/LogOutButton'

const handlePress = (): void => {
    router.push('/memo/create')
}

const List = () => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight : () => {return <LogOutButton/>}
        })
    },[])
    return (
        <View style = {styles.container}>
            <View>
                <MemoListItem/>
                <MemoListItem/>
                <MemoListItem/>
            </View>
            <CircleButton onPress={handlePress}>
                <Feather name='check' size={40}/>
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})

export default List
