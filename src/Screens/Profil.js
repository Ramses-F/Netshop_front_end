import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import Tab from '../Components/tab';
import { ListItem } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function ProfilScreen() {


  const navigation = useNavigation(); 

  const Name = () =>{
    navigation.navigate("Name")
  }

  const Number = () =>{
    navigation.navigate("Number")
  }

  const home = () =>{
    navigation.navigate("Home2")
  }

  const Login = () =>{
    navigation.navigate("Login")
  }
  return (
    <View>
      <StatusBar style='dark' />
      <Tab/>
      <View style = {styles.profil}>
          <Text style = {{color:'#fff', fontWeight:'bold',fontSize:25,marginLeft:75,marginTop:10}}>Modifier profil</Text>
          <View style = {{width:'80%',marginLeft:30, marginTop:70 }}>
          <ListItem
                title="Nom"
                leading={<Icon name="face-man-profile" size={24} />}
                trailing={props => <Icon name="chevron-right" {...props} />}
                onPress={ Name}
                style={{backgroundColor: '#2C333A', color: 'white'}}
            />  
          </View>

          <View style = {{width:'80%',marginLeft:30, top:30}}>
            <ListItem
                title="Numéro"
                leading={<Icon name="phone" size={24} />}
                trailing={props => <Icon name="chevron-right" {...props} />}
                onPress={ Number}

            />
            </View>

          <View>
              <TouchableOpacity  style = {styles.Button}>
                <Text style = {{fontWeight:'bold', alignSelf:'center',textAlign:'center',padding:6}} onPress={home}>Retour</Text>
              </TouchableOpacity>

              <TouchableOpacity  style = {styles.Button1}>
                <Text style = {{fontWeight:'bold', alignSelf:'center',textAlign:'center',padding:6, color :'#fff'}} onPress={Login}>Déconnexion</Text>
              </TouchableOpacity>
          </View>

            
      </View>
      
    </View>
  );
}

styles = StyleSheet.create({
    profil:{
      width:'80%',
      height:'65%',
      backgroundColor:'#F58909',
      marginTop:70,
      marginLeft:35,
      borderRadius:20,
    },
    Button:{
      marginTop:75,
      marginLeft:115,
      backgroundColor:'#fff',
      width:90,
      height:35,
    },
    Button1:{
      top:'35%',
      marginLeft:100,
      backgroundColor:'#000',
      width:110,
      height:35,
      borderRadius:5,
      shadowOpacity: 0.5,
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    }
})


  
