import {StyleSheet} from 'react-native'
import {dp} from '../../utils/common'
const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        marginBottom:dp(10)
    },
    warp:{
        flexDirection:'row',
        justifyContent:'center',
        padding:dp(5),
        borderRadius:dp(5),
        width:dp(335),
        backgroundColor:'#7fb0ea',
    },
    item:{
        flex:1,
        padding:dp(4),
    },
    touchItem:{
        width:'100%',
        alignItems:'center',
    },  
    text:{
        color:'#fff'
    },
    active:{
        backgroundColor:'#fff',
        borderRadius:dp(3),
    },
    activeText:{
        color:"#000"
    }
})
export default styles