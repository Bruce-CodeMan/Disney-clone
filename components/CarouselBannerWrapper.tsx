import { getDiscoverMovies } from "@/lib/getMovies";

/*
 * @Date: 2023-12-30 16:00:53
 * @Author: Bruce Hsu
 * @Description: 
 */
import CarouselsBanner from "./CarouselsBanner";

interface IProps {
  id?: string;
  keywords?: string;
}

async function CarouselBannerWrapper({id, keywords}: IProps) {

  const movies = await getDiscoverMovies(id, keywords)

  return (
    <CarouselsBanner movies={movies}/>
  )
}

export default CarouselBannerWrapper