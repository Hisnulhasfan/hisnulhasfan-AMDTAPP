import * as React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default class App extends React.Component {
    
  render() {
    state = {
      inputValue: '',
      todos: []
    };

    changeText = value => {
      this.setState({
        inputValue: value
      });
    };

    addItem = () => {
      if (this.state.inputValue !== '') {
        this.setState(prevState => {
          const new ToDo = {
            titile: this.state.inputValue,
            createdAt: Date.now(),
          };

          var todos = this.state.todos.concat(newToDo);
          this.setState({
            todos: todos,
          });
        });
      }
    };
    return (
      <LinearGradient colors={['#0F2027','#2C5364']} style={{ flex:1 }}>
        <StatusBar barStyle="light-content" />
        <View>
          <TextInput
          style={styles.input}
          placeholder="Type here to add a to do."
          placeholderTextColor={'#fff'}
          multiline={true}
          autoCapitalize="sentences"
          underlineColorAndroid="transparent"
          selectionColor={'white'}
          maxLength={30}
          returnKeyType="done"
          autoCorrect={false}
          blurOnSubmit={true}
          />
        </View>
      </LinearGradient>
    );
     
  
  }
}

const styles = {
  input:
  {
    marginTop: 30,
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 34,
    color: 'white',
    fontweight: '500'
  }
}
