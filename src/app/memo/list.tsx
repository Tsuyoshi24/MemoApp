import {View, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'

const List = () => {

    return (
        <View style = {styles.container}>
            <Header/>
            <View>
                <MemoListItem/>
                <MemoListItem/>
                <MemoListItem/>
            </View>
            <CircleButton>
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
