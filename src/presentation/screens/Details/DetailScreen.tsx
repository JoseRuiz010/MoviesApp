import { useRoute } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigations/Navigation'
import { useMovie } from '../../hooks/useMovie'
import { MovieHeader } from '../../components/movie/MovieHeader'
import { DetailsMovie } from '../../components/movie/MovieDetails'
import { ScrollView } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<RootStackParams, 'Details'> { }
export const DetailScreen = ({ navigation, route }: Props) => {
  const { movieId } = route.params
  const { movie, isLoading, casts } = useMovie(movieId)
  if (isLoading) {
    return <Text>Loading...</Text>
  }
  return (
    <ScrollView>
      <MovieHeader originalTitle={movie?.originalTitle!} poster={movie?.poster!} title={movie?.title!} />
      {isLoading && <Text>Cargando...</Text>}
      <DetailsMovie movie={movie!} casts={casts!} />
      {/* {!isLoading && <Text>{JSON.stringify(movie)}</Text>} */}
    </ScrollView>
  )
}
