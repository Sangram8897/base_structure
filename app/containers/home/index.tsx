import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/reducer/counter'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
//import { useGetPokemonByNameQuery } from '../../services/pokemon'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Props } from '../../root'

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

  return (
    <View>
      <Text>{count} </Text>
      < Button
        title="Go to Details"
        onPress={() => navigation.navigate('Account', { userId: 'sangt' })}
      />
      < Button
        title="Increment value"
        onPress={() => dispatch(increment())}
      />
      < Button
        title="Decrement value"
        onPress={() => dispatch(decrement())}
      />
      {/* {
        error ? <Text>Oh no, there was an error </Text> :
          isLoading ? <Text>Loading...</Text> :
            data ? <Text>{data.species.name} </Text> : null
      } */}

    </View>
  )
}

export default Home
