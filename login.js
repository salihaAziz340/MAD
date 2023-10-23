import React from 'react';
import {ImageBackground, StyleSheet,Text,TouchableOpacity,TextInput,Image, View} from 'react-native';

const image = {uri: 'data:image/jpeg;base64,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'};

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Image source={image} 
        style={{
          width: 100,
          height: 100,
          alignItems:"center",justifyContent:"center",

          borderRadius: 50, 
          marginBottom: 20, marginLeft:"38%",marginTop:60
        }} />
    <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#333"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#333"
        secureTextEntry={true}
      />
      </ImageBackground>
      
      <View style={{flex: 4,padding:40, backgroundColor: 'white'}}>
      <TouchableOpacity 
        style={{
      padding:20,
      backgroundColor: '#007BFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
    }}
  >
    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
  </TouchableOpacity>
  <TouchableOpacity 
        onPress={() => { /* Handle Forgot Password */ }}
        style={{
          
          
          borderRadius: 5,
          alignItems: 'center',
          marginBottom: 10, // Added for spacing
        }}
      >
        <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold' }}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        
        style={{
          margin:10,
          borderRadius: 5,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold' }}>create a new account</Text>
      </TouchableOpacity>

      </View>
    </View>
  
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 6,height:"100%",width:'100%',
    justifyContent: 'center',
  },
  input: {
    height:40,width:"80%",
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft:40,
    paddingHorizontal: 5,
    borderRadius: 5,
    
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;
