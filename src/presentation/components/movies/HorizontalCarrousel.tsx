import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { FlatList } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';
import { useEffect, useRef } from 'react';

interface Props {
  movies: Movie[],
  title?: string,
  loadNextPage?: () => void
}

export const HorizontalCarrousel = ({ movies, title, loadNextPage }: Props) => {

  const isLoading = useRef(false);
  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies])


  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
    // console.log({ contentOffset, layoutMeasurement, contentSize });
    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) > contentSize.width;
    if (!isEndReached) return;
    isLoading.current = true;
    loadNextPage && loadNextPage();
  }
  return (
    <View
      style={{ height: title ? 260 : 220 }}
    >
      {
        title && (
          <Text style={{ fontWeight: '300', marginLeft: 10, fontSize: 30 }}>{title}</Text>
        )
      }

      <FlatList
        data={movies}
        renderItem={({ item, index, separators }) => (
          <MoviePoster movie={item} key={index + item.id} height={200} width={140} />
        )}
        keyExtractor={(item, i) => `${item.id.toString()}-${i}`}
        horizontal
        showsHorizontalScrollIndicator={true}
        onScroll={onScroll}
      />
    </View>
  )
}