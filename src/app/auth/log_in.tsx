import {View, Text, TextInput, StyleSheet} from 'react-native'

import Header from '../../components/header'

const LogIn = () => {
    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.inner}>
                <Text style={styles.title}>Log IN</Text>
                <TextInput style={styles.input} value='email address'/>
                <TextInput style={styles.input} value='passsword'/>
                <View style={styles.button}>
                    <Text style={styles.buttonLabel}>submit</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not Registered?</Text>
                    <Text style={styles.footerLink}>Sigh Up Here</Text>
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
    button: {
        backgroundColor: '#467FD3',
        borderRadius:4,
        alignSelf: 'flex-start',
        marginBottom: 24

    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 26,
        color: '#ffffff',
        paddingVertical: 8,
        paddingHorizontal: 24
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

export default LogIn
