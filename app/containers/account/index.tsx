import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Props } from '../../root'

const Account = ({ navigation }: Props) => {
  return (
    <View>
      <Text onPress={() => navigation.goBack()}>Account</Text>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})