import { StyleSheet, Text, View ,TouchableOpacity,Pressable} from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import {firebase} from '../config'
import { FlashList } from '@shopify/flash-list'
import { Entypo } from '@expo/vector-icons'

const Home = () => {

    const [notes,setNotes]=useState([]);
    const navigation=useNavigation();
    //fetch the data from firestore
    useEffect(()=>{
        firebase.firestore()
        .collection('notes')
        .onSnapshot((querySnapshop)=>{
            const newNotes=[];
            querySnapshop.forEach((doc)=>{
                const {note,title}=doc.data();
                newNotes.push({note,title,id:doc.id});
            });
            setNotes(newNotes);
        });
    },[]);
    console.log(notes)

  return (
    <View style={styles.container}>
      <FlashList
        data={notes}
        numColumns={2}
        estimatedItemSize={100}
        renderItem={({item})=>(
            <View style={styles.noteView}>
                <Pressable onPress={()=>navigation.navigate('Detail',{item})}> 
                    <Text style={styles.noteTitle}>{item.title}</Text>
                    <Text style={styles.noteDesc}>{item.note}</Text>
                </Pressable>
                
            </View>
        )}
/>
            <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate('NoteAdd')}>
                <Entypo name='plus' size={43} color={'black'}/>
            </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#c9f5d9'
    },
    noteView:{
        flex:1,
        backgroundColor:'#fff',
        margin:10,
        padding:10,
        borderRadius:10,
        shadowColor:'red',
        shadowOffset:{width:0,height:2},
        shadowOpacity:1,
        shadowRadius:2,
        elevation:7,
        alignItems:'center'
    },
    noteTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    noteDesc:{
        fontSize:16,
        marginTop:5
    },
    button:{
        position:'absolute',
        bottom:60,
        right:30,
        backgroundColor:'white',
        borderRadius:50,
        padding:10,
        elevation:7
    }
})