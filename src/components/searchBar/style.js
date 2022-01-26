import { StyleSheet } from 'react-native'
import {dp} from '../../utils/common'
export const styles = StyleSheet.create({
    warp: {
        width:dp(340),
        // marginLeft:dp(17.5),
        backgroundColor:'#f4f4f4',
        alignItems:'center',
        paddingTop:dp(5),
        paddingBottom:dp(5),
        borderRadius:dp(50),
    },
    holdText:{
        color:'#acacac',
        fontSize:dp(14)
    },
    icon:{
        marginRight:dp(3)
    }
})