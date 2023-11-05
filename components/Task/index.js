import { useState } from 'react';
import { Text,View,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 



export function Task( props ){

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
              onPress={props.handleDeleteTask}
            >
              <Icon name='trash' size={30} />
            </TouchableWithoutFeedback>
            <Text style={styles.taskText}> 
              {props.description}
            </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#AEC5EB',
        borderRadius:10,
        marginVertical:10,
        padding:6,
        width:'90%',
        alignItems:'center'
    },
    taskText: { 
        paddingLeft:12,
        fontSize:20,
        fontWeight:'600'
    }
});