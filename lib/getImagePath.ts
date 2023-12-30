/*
 * @Date: 2023-12-30 15:22:28
 * @Author: Bruce Hsu
 * @Description: 
 */
const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
  ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
  : "https://links.papareact.com/o8z"
}

export default getImagePath