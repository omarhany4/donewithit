import { StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    imgBack: {
        width:'100%',
        height:'100%'
        
        },
    img:{
        width:'100%',
        height:'70%',
        borderRadius:5
    },
    card: {
        height:'40%',
        width:'40%',
        marginTop:'4%',
        marginHorizontal:'5%',
        borderRadius:5
  },
  searchContainer: {position:'absolute',
        marginTop: 170,
        marginLeft: 65,
        backgroundColor: 'white',
        borderColor: 'black',
        padding:5,
        zIndex: 999,
        borderRadius:5,
        },
    search: {
        borderBottomColor:'black'
        
    },

    videos : {flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor:'white',
    borderRadius:30,
    padding:15,
    shadowColor:'#9e9898',
    elevation:5,
    width:'40%',
    height:70,
    marginBottom:10,
    marginHorizontal:10,
    marginTop:10
    },
    advice: {
        width:'90%',
        height: 100,
        justifyContent:'flex-start',
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:15,},
    cardText:{ alignContent:'center'

    },
    payPal:{
        width:200,
        marginTop:200,
        alignSelf:'center',
        flexWrap:'wrap',
    },
    input:{
        margin:'5%',
        borderRadius:25,
        
    },
    SignInButton:{
        margin:'5%'
    }

  });

  export default styles;