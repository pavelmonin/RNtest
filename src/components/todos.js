
import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View,
  FlatList,
} from 'react-native';

import { useSelector} from 'react-redux'
import { Card,Avatar} from '@rneui/themed';
import { lightColors } from '@rneui/themed';
import { useGetTodosByUserIdQuery} from '../redux/apiSlice'



const tData = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": true
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 2,
        "id": 21,
        "title": "suscipit repellat esse quibusdam voluptatem incidunt",
        "completed": false
      },
      {
        "userId": 2,
        "id": 22,
        "title": "distinctio vitae autem nihil ut molestias quo",
        "completed": true
      },
      {
        "userId": 2,
        "id": 23,
        "title": "et itaque necessitatibus maxime molestiae qui quas velit",
        "completed": false
      },
      {
        "userId": 3,
        "id": 41,
        "title": "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
        "completed": false
      },
      {
        "userId": 3,
        "id": 42,
        "title": "rerum perferendis error quia ut eveniet",
        "completed": false
      },
      {
        "userId": 3,
        "id": 43,
        "title": "tempore ut sint quis recusandae",
        "completed": true
      },
];




const Todos = () => {

let ts = useSelector((state) => state.users.todos);

  // const { data, error, isLoading } = useGetTodosByUserIdQuery(selectedUser);
  
    const renderTodo = ({item}) => {
        return(

      <Card containerStyle={{ marginTop: 5,borderRadius:10 ,flex:1}}>
        <View style={{flex:1,flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
        <Avatar
          size={10}
          rounded
          containerStyle={{ backgroundColor:item.completed?lightColors.success:lightColors.primary,marginRight:10}}
        />

<Text style={{fontWeight:'normal',color:'#43484d'}}>{item.title}</Text>
</View>
</Card>
        )
        
    }

    return ( 
     
        <View style={styles.container}>

        < FlatList
          data={ts}
          renderItem={renderTodo}
          keyExtractor={item => item.id}
        />
         {/* <Text>{selectedUser}</Text> */}
         {/* <Text>{error?'error':'ok'}</Text>
       <Text>{isLoading?'loading':'nl'}</Text> */}
        </View>
)
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    // marginTop:20,
    backgroundColor:"#eeeeee"
  },
  tasks:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10,
  },
  image:{
    width:25,
    height:25,
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal:20,
    backgroundColor:"white",
    flexBasis: '46%',
    padding: 10,
    flexDirection:'row',
    flexWrap: 'wrap',
    borderLeftWidth:6,
  },

  description:{
    fontSize:18,
    flex:1,
    color:"#008080",
    fontWeight:'bold',
  },
  date:{
    fontSize:14,
    flex:1,
    color:"#696969",
    marginTop:5
  },
}); 

export default Todos