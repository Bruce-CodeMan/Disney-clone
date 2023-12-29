/*
 * @Date: 2023-12-28 15:05:46
 * @Author: Bruce Hsu
 * @Description: 
 */

import { notFound } from "next/navigation"

interface Props {
  params: {
    term: string
  }
}

const SearchPage = ({params}: Props) => {

  if(!params.term) notFound()

  const termUse = decodeURI(params.term)

  // API call to get the searched movies


  return (
    <div>Search Page, {termUse}</div>
  )
}

export default SearchPage;