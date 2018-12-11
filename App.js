import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Header from './components/header';
import { Avatar } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Todo from './screens/Todo';
import { Button } from 'react-native-elements';
import Flexbox from './screens/Flexbox';


class App extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.tubmlr}>Tumblr.</Text>  

        <Text style={styles.bigblack}>Come for what you love.</Text>   
        <Text style={styles.bigblack}>Stay for what you discover.</Text>

        <View style = {{padding:10}} />

        <Avatar
          size="xlarge"
          rounded
          source={{uri: "data:image/jpeg;base64,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"}}
          onPress={() => console.log("DO YOU KNOW DA WAE")}
          activeOpacity={0.7}
        />

       <Text style={styles.bigblue}>SG GIRLS</Text>

        <Button
         title="Sign In"
         onPress={() => this.props.navigation.navigate('TodoScreen')}
         titleStyle={{ fontWeight: "700", color:'white'}}
         buttonStyle={{
            backgroundColor: "rgba(0, 191, 255, 1)",
            width: 200,
            height: 45,
           borderColor: "transparent",
           borderWidth: 2,
           borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
          />


        <View style = {{padding:5}} />


          <Button  
           title="Log In"
           onPress={() => this.props.navigation.navigate('FlexboxScreen')}
           titleStyle={{ fontWeight: "700", color: 'black' }}
           buttonStyle={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              width: 200,
             height: 45,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5
             }}
            containerStyle={{ marginTop: 5 }}
            />

      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: App,
  TodoScreen:Todo,
  FlexboxScreen:Flexbox,
});

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  bigblue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
    alignItems: 'center',
    },

  bigblack: {
    color: 'black',
    fontSize: 15,
    alignItems: 'center',
    },  

    tubmlr: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 70,
      alignItems: 'center',
      },  

});


export default AppContainer;