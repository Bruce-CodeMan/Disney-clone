/*
 * @Date: 2023-12-28 14:51:02
 * @Author: Bruce Hsu
 * @Description: 
 */
import MoviesCarousel from "@/components/MoviesCarousel"
import { getUpcomingMovies } from "@/lib/getMovies"

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies()

  return (
    <main className="">
      <div className="flex flex-col space-y-2">
        {/* MovieCarousel movies={...} title={...} */}
        <MoviesCarousel title="Upcoming" movies={upcomingMovies}/>
      </div>
    </main>
  )
}
