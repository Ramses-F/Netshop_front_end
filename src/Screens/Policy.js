import React, { useState } from 'react';
import { View, Text, StyleSheet , TouchableOpacity, Alert,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import { Card } from 'react-native-elements';


const PrivacyPolicy = () => {


    const [isChecked, setIsChecked] = useState(false);

      const navigation = useNavigation(); 

  const Login = () =>{
    navigation.navigate("Login")
  }
  return (
    
        <View style={styles.container}>

        <ScrollView>
        <Image style={{ width: 300, height: 200, top: 10, left:20 }} source={require('../assets/Netshop2.png')} />
        <Text style={styles.text}>
        <Text style ={{fontSize:20 , fontWeight:'bold', textAlign:"center", marginTop:10}}>Politique de confidentialité de l'application NETSHOP</Text>{'\n'}{'\n'}

Chez NETSHOP, nous sommes conscients de l'importance de la confidentialité et de la sécurité des informations personnelles de nos utilisateurs. Cette politique de confidentialité explique comment nous recueillons, utilisons, partageons et protégeons les informations que nous collectons via notre application GIGA PLUS. En utilisant cette application, vous acceptez les termes de cette politique de confidentialité.{'\n'}{'\n'}
1.	Informations collectées{'\n'}{'\n'}
1.1. Informations fournies par l'utilisateur : Lorsque vous vous inscrivez et utilisez notre application NETSHOP, nous recueillons les informations que vous nous fournissez directement, telles que votre nom, votre adresse e-mail, votre adresse de livraison, votre numéro de téléphone, et toute autre information que vous choisissez de nous communiquer lors de votre inscription ou de vos interactions ultérieures avec l'application.{'\n'}{'\n'}
1.2. Informations collectées automatiquement : Nous collectons également certaines informations automatiquement lorsque vous utilisez l'application NETSHOP. Cela peut inclure des informations sur votre appareil mobile, votre adresse IP, votre emplacement approximatif, les produits que vous consultez ou achetez, les interactions avec d'autres utilisateurs, et d'autres informations similaires.{'\n'}{'\n'}
2.	Utilisation des informations{'\n'}{'\n'}
2.1. Utilisation des informations personnelles : Nous utilisons les informations que nous recueillons pour vous fournir nos services et améliorer votre expérience d'utilisation de l'application NETSHOP. Cela peut inclure le traitement des paiements, la personnalisation du contenu, la communication avec vous concernant votre compte ou vos commandes, la prévention des fraudes, l'analyse de données, et l'amélioration de nos produits et services.{'\n'}{'\n'}
2.2. Communication marketing : Si vous nous avez donné votre consentement, nous pouvons utiliser vos informations personnelles pour vous envoyer des communications marketing sur nos produits, promotions spéciales et autres informations susceptibles de vous intéresser. Vous pouvez choisir de ne plus recevoir ces communications à tout moment en modifiant vos préférences dans les paramètres de l'application ou en suivant les instructions de désinscription fournies dans ces communications.{'\n'}{'\n'}
3.	Partage des informations{'\n'}{'\n'}
3.1. Partage avec des tiers : Nous ne vendons pas vos informations personnelles à des tiers. Cependant, nous pouvons partager vos informations avec des prestataires de services tiers qui nous aident à fournir nos services, tels que les processeurs de paiement, les services de livraison, les services d'analyse de données, les services de marketing, et autres prestataires de services similaires. Nous nous assurons que ces tiers respectent notre politique de confidentialité et utilisent vos informations conformément à nos instructions.{'\n'}{'\n'}
3.2. Réseaux sociaux : En tant qu'application combinée à un réseau social, certaines informations que vous choisissez de partager publiquement dans notre application peuvent être visibles pour d'autres utilisateurs de l'application et du réseau social. Veuillez faire preuve de prudence lors de la divulgation d'informations personnelles ou sensibles dans les espaces publics de l'application.{'\n'}{'\n'}
4. Sécurité des informations
Nous prenons des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, toute divulgation, altération ou destruction.{'\n'}{'\n'}
5.	Contactez-nous
Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter à l'adresse mail de contact falletkamagate3@gmail.com
      </Text>

      <View style ={styles.checkBox}>

      <CheckBox
        title='Accepter conditions'
        checked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
        
      />
      </View>

      <View>
        <TouchableOpacity style={[styles.button, isChecked ? null : styles.buttonDisabled]} 
                            onPress={isChecked ? Login : null} 
                            disabled={!isChecked} ><Text style ={[styles.buttonText, isChecked ? null : styles.buttonTextDisabled]} >Continuer</Text></TouchableOpacity>
      </View>
      
        </ScrollView>
        
      
      
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'white'
  },
  text: {
    fontSize: 16,
    fontWeight:'500',
    color:"#000",
    marginTop:0
  },

  checkBox:{
    marginTop:30,
    marginBottom:20,
    
  },

  button:{
    backgroundColor:'#F58909',
    marginTop:20,
    width:'95%',
    height:'13%',
    marginBottom:50,
    marginLeft:10,
    borderRadius:5
  },

  buttonDisabled:{
    backgroundColor:'#000'
  },

  buttonText:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16,
    top:10

  },

  buttonTextDisabled:{
    fontWeight:'bold',
  }

  

});

export default PrivacyPolicy;
