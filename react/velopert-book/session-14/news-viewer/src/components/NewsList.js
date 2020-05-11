import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import NewsItem from './NewsItem';
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding: 0 0 3rem;
  width: 768px;
  margin: 2rem auto 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=3fa5633c26a1488fbd3470f0fc7a7ba9`
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>Loading...</NewsListBlock>
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>Error!~</NewsListBlock>
  }

  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article}/>
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
