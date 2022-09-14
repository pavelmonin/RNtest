
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
 TouchableHighlight 
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { selectUser,loadUsers,loadTodos,loadPosts  } from '../redux/usersSlice'
import { useGetTodosByUserIdQuery,useGetPostsByUserIdQuery,useGetUsersQuery } from '../redux/apiSlice'
import { ListItem} from '@rneui/themed';


const uData = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    }
    ,
    {
      "id": 4,
      "name": "Clementine Bauch4",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    }
];




const Users = () => {


let users = useSelector((state) => state.users.entities)
const dispatch = useDispatch()

const [selectedU,setSelectedU] = useState(1)
const { data, error, isLoading,isSuccess } = useGetUsersQuery();

const { data:dataTodos, error:errorTodos, isLoading:isLoadingTodos,refetch:refetchTodos } = useGetTodosByUserIdQuery(selectedU);
const { data:dataPosts, error:errorPosts, isLoading:isLoadingPosts,refetch:refetchPosts } = useGetPostsByUserIdQuery(selectedU);



const onPress = async (item) => {
  setSelectedU(item.id);
  await dispatch(selectUser(item.id));
  await refetchTodos();
  await refetchPosts();
 
}



    React.useEffect( () => {
      const  sd =  () => { 
        if (!isLoading) dispatch(loadUsers(data));
      } 
      sd();
    }, [isLoading]);

    
    React.useEffect( () => {
      const  lt =  () => { 
        if (!isLoadingTodos) {dispatch(loadTodos(dataTodos));}
      } 
      lt();
    }, [isLoadingTodos,selectedU]);

    
    React.useEffect( () => {
      const  lp =  () => { 
        if (!isLoadingPosts) {dispatch(loadPosts(dataPosts));}
      } 
      lp();
    }, [isLoadingPosts,selectedU]);


    

    return ( 

        <SafeAreaView style={styles.container}>

        < FlatList
          data={users}
          keyExtractor={item => item.id}
          renderItem={({ item, index, separators }) => (


            <TouchableHighlight 
              key={item.key}
              onPress={async () => await onPress(item)}
              >
                
            <ListItem key={item.id} bottomDivider containerStyle={styles.item} >
              <ListItem.Content>
                  <ListItem.Title><Text style={(item.id===selectedU)?styles.titleSelected:styles.title}>{item.name}</Text></ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem> 
            </TouchableHighlight>
          )
        }
        />

       {/* <Text>{error?'error':'ok'}</Text> */}
       <Text>users: {isLoading?'loading':'loading:ok'}</Text>
       <Text>todos: {isLoadingTodos?'loading':'loading:ok'}</Text>
       <Text>posts: {isLoadingPosts?'loading':'loading:ok'}</Text>
        </SafeAreaView>
        
)
}

const styles = StyleSheet.create({ 
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  row: {
    borderColor: '#f1f1f1',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },

  container: {
    flex: 1,
  },
  item: {
     padding: 5,
     borderRadius:10,
     height:40,
  },

  title: {
    // fontSize: 12,
  },
  titleSelected: {
    // fontSize: 12,
    color:'green',
  },

})

export default Users