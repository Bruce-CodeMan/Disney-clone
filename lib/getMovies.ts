/*
 * @Date: 2023-12-30 15:03:56
 * @Author: Bruce Hsu
 * @Description: 
 */
import { SearchResults } from "@/typings"

async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false")
  url.searchParams.set("include_video", "false")
  url.searchParams.set("sort_by", "popularity.desc")
  url.searchParams.set("language", "en-US")
  url.searchParams.set("page", "1")

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24
    }
  }

  const response = await fetch(url, options)
  const data = (await response.json()) as SearchResults

  return data
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming")
  const data = await fetchFromTMDB(url)

  return data.results
}