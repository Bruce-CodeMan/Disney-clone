/*
 * @Date: 2023-12-28 15:15:23
 * @Author: Bruce Hsu
 * @Description: 
 */
interface Props{
  params: {
    id: string
  };
  searchParams: {
    genre: string
  }
}

const GenrePage = ({params, searchParams}: Props) => {
  return (
    <div>Welcome to Genre Page, id: {params.id}, name: {searchParams.genre}</div>
  )
}

export default GenrePage;