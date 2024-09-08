import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

import {Link, router} from 'expo-router'
import { useState } from 'react'

import Button from '../../components/button'

const handlePress = (): void => {
    // ログイン
    router.replace('/memo/list')
}

const SighUp = () => {
    const [email,setEmail] = useState('')
    const [passeord, setPassword] = useState('')
    return(
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sigh Up</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => {setEmail(text)}}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    placeholder='email address'
                    textContentType='emailAddress'
                />
                <TextInput
                    style={styles.input}
                    value={passeord}
                    onChangeText={(text) => {setPassword(text)}}
                    autoCapitalize='none'
                    secureTextEntry
                    placeholder='password'
                    textContentType='password'
                />
                <Button label='submit' onPress={handlePress}/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already Registered?</Text>
                    <Link href='/auth/log_in' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log IN</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#ffffff',
        height: 48,
        padding: 8,
        fontSize:16,
        marginBottom: 16
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3'
    }
})

export default SighUp
