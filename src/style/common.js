import {StyleSheet} from 'react-native'

const CommonStyle=StyleSheet.create({
    flexLeftCenter:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    flexRightCenter:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    flexBetweenCenter:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center'
    },
    flexCenter:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    flexAroundCenter:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    full:{
        width:'100%',
        height:'100%'
    }
})

export default CommonStyle