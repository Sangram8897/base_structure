import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/reducer/counter'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
// import firestore from '@react-native-firebase/firestore';
import { Props } from '../../root/navigation'
import SectionIII from './resto_list/sectionIII'
import SectionI from './resto_list/sectionI'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SectionII from './resto_list/sectionII'

/**
 * 
 * @param param0 
 * interface FoodDetailProps{ 
    onUpdateCart: Function,
    navigation: { getParam: Function, goBack: Function}
    userReducer: UserState,
 }
 * @returns 
 */

const Home = ({ navigation }: Props) => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  //const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  useEffect(() => {
    // firestore()
    // .collection('UsersIphone')
    // .add({
    //   name: 'Ada Lovelace',
    //   age: 30,
    // })
    // .then(() => {
    //   console.log('User added!');
    // });

  }, [])

  const getData = async () => {
    // const users = await firestore().collection('Users').get();
    // console.log('users', users);

  }

  return (
    <View style={{ flex: 1, backgroundColor: 'yellow' }}>
      <Button title='Add' onPress={() => { }} />
      <ScrollView>
        {/* <GestureHandlerRootView>
          <SectionI />
        </GestureHandlerRootView>
        <SectionII /> */}
        <SectionIII navigation={navigation} />

      </ScrollView>

      {/* {
        error ? <Text>Oh no, there was an error </Text> :
          isLoading ? <Text>Loading...</Text> :
            data ? <Text>{data.species.name} </Text> : null
      } */}

    </View>
  )
}

export default Home
