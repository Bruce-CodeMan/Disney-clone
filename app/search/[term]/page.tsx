/*
 * @Date: 2023-12-28 15:05:46
 * @Author: Bruce Hsu
 * @Description: 
 */

import MoviesCarousel from "@/components/MoviesCarousel"
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies"
import { notFound } from "next/navigation"

interface Props {
  params: {
    term: string
  }
}

const SearchPage = async ({params}: Props) => {

  if(!params.term) notFound()

  const termUse = decodeURI(params.term)

  // API call to get the searched movies
  const movies = await getSearchedMovies(termUse)
  const popularMovies = await getPopularMovies();



  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termUse}</h1>

        <MoviesCarousel title="Movies" movies={movies} isVertical/>
        <MoviesCarousel title="You may be alse like" movies={popularMovies}/>
      </div>
    </div>
  )
}

export default SearchPage;