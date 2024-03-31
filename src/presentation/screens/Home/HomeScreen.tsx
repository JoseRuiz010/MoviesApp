import React, { useRef } from 'react'
import { View, Text } from 'react-native'
import { useMovies } from './../../hooks/useMoviers';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarrousel } from '../../components/movies/PosterCarrousel';
import { MoviePoster } from '../../components/movies/MoviePoster';
import { HorizontalCarrousel } from '../../components/movies/HorizontalCarrousel';

export const HomeScreen = () => {
  const { isLoading, nowPlaying, pupular, topRated, upcoming, popularNextPage } = useMovies()
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (<Text>Cargando...</Text>)
  }

  return (

    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        <ScrollView horizontal>
          {
            nowPlaying.map(n => <MoviePoster movie={n} key={n.id} />)
          }
        </ScrollView>
        {/*Popular movies */}
        <HorizontalCarrousel movies={pupular} title='Populares' loadNextPage={popularNextPage}
        />
        <HorizontalCarrousel movies={topRated} title='Top Rated' />
        <HorizontalCarrousel movies={upcoming} title='Prooximamente' />
      </View>
    </ScrollView>

  )
}

