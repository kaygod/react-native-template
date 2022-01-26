import {StyleSheet} from 'react-native'
import { dp } from '../../utils/common'

const styles=StyleSheet.create({
    container:{
        width:dp(350),
        marginTop:dp(10)
    },
    warp:{
        position:'relative',
        flex:1,
        backgroundColor:'#fff',
        borderRadius:20
    },
    icon:{
        position:'absolute',
        left:dp(10)
    },
    closeBtn:{
        marginRight:dp(10)
    },
    textInput:{
        flex:1,
        paddingLeft:dp(35),
        height:dp(35)
    },
    cancel:{
        color:'#0066D4',
        fontSize:dp(14),
        marginLeft:dp(5)
    }
})

export default styles