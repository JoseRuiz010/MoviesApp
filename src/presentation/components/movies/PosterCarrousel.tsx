import React from 'react'
import { Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies: Movie[];
  height?: number;
}

export const PosterCarrousel = ({ movies, height = 440 }: Props) => {
  return (
    <View>
      <ScrollView horizontal style={{}}>
        {
          movies?.map(movie => <MoviePoster key={movie.id} movie={movie} />)
          // movies?.map(movie => <Text key={movie.id}>{movie.id} </Text>)
        }
      </ScrollView>
    </View >
  )
}
