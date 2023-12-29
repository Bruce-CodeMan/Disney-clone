/*
 * @Date: 2023-12-29 13:42:57
 * @Author: Bruce Hsu
 * @Description: 
 */
// pages/your-page.tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import { Genres } from "../typings";

function GenreDropdown({ genres }: { genres?: Genres }) {
  // 组件直接使用从 props 中获得的 genres 渲染
  return (
    <div>
      {/* 在这里渲染你的下拉菜单或其他 UI */}
      xxxx
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=zh';
  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    },
  };

  try {
    const response = await fetch(url, options);
    const genres: Genres = await response.json();

    return {
      props: {
        genres,
      },
    };
  } catch (error) {
    console.error('Error fetching genres:', error);
    return {
      props: {
        genres: null,
      },
    };
  }
};

export default GenreDropdown;