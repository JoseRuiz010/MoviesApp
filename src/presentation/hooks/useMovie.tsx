import { useEffect, useState } from "react"

export const useMovie = (movieID: number) => {
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {

    loaDMovie()
  }, [movieID])


  function loaDMovie() {
    throw new Error("Function not implemented.")
  }


  return {}

}

