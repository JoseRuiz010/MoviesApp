import { useRoute } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigations/Navigation'

interface Props extends StackScreenProps<RootStackParams, 'Details'> { }
export const DetailScreen = ({ navigation, route }: Props) => {
  const { movieId } = route.params
  return (
    <View>
      <Text>DetailScreen {movieId}</Text>
    </View>
  )
}
