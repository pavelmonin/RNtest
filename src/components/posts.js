
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList, 
} from 'react-native';


import { Card} from '@rneui/themed';
import { useSelector} from 'react-redux'
import { useGetPostsByUserIdQuery} from '../redux/apiSlice'

let ptData = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 2,
        "id": 11,
        "title": "et ea vero quia laudantium autem",
        "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
      },
      {
        "userId": 2,
        "id": 12,
        "title": "in quibusdam tempore odit est dolorem",
        "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
      },
      {
        "userId": 3,
        "id": 21,
        "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
        "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
      },
      {
        "userId": 3,
        "id": 22,
        "title": "dolor sint quo a velit explicabo quia nam",
        "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
      },
      {
        "userId": 3,
        "id": 23,
        "title": "maxime id vitae nihil numquam",
        "body": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
      },
];



const Posts = () => {

  let pData = useSelector((state) => state.users.posts);
// const { data, error, isLoading } = useGetPostsByUserIdQuery(selectedUser);


    const renderPost = ({item}) => {
        return(

            <Card containerStyle={{ marginTop: 5,borderRadius:10 }}>
              <Card.Title>{item.title}</Card.Title>
              <Card.Divider />
              <Text style={{ marginBottom: 10 }}>{item.body}</Text>
            </Card>

        )
        
    }

    return ( 
     
        <View style={styles.container}>

          < FlatList
            data={pData}
            renderItem={renderPost}
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

  },
  cardTittle:{
    color:"#808080",
    fontWeight:'bold',
    fontSize:22,
    marginBottom:5,
  },
  avatar:{
    width:150,
    height:150,
  },
  card:{
    backgroundColor: "#FFFFFF",
    borderRadius:10,
    padding:10,
    // height:100,
    marginTop:10,
  },
  innerText:{
    // fontStyles:"normal",
    // color:'black'

  },
  name:{
    marginTop:10,
    fontSize:22,
    color:"#808080",
  }

});

export default Posts