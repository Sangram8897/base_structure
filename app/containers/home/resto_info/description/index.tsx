import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useTheme from '../../../../style/hooks/useTheme'

const RestoDescription = () => {
  const { Layout, Fonts } = useTheme()
  return (
    <View style={[Layout.fill,Layout.center]}>
      <Text style={[Fonts.textRegular]}>{'Resto Name'}</Text>
      <Text numberOfLines={3} style={[Fonts.textSmall]}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}</Text>
    </View>
  )
}

export default RestoDescription

const styles = StyleSheet.create({})