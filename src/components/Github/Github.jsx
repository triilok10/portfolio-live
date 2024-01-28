import React, { useState, useEffect } from 'react';
import css from './Github.module.scss';

const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const [visibleNews, setVisibleNews] = useState([]);
  const pageSize = 8; 
  const apiKey = 'ff5cd1e7eff84c7baedfab7f855b53f5';
  const apiUrl = 'https://newsapi.org/v2/top-headlines?country=in';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${apiUrl}&apiKey=${apiKey}`);
        const data = await response.json();
        setNews(data.articles);
        setVisibleNews(data.articles.slice(0, pageSize));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); 
  };

  return (
    <div className={`${css.wrapper}`}>
      <a className="anchor" id="githubapp"></a>
      <h1 className='primaryText flexCenter yPaddings'>Top Headlines - {formatDateString(Date.now())}</h1>
      <div className={`${css.container}`}>
        {visibleNews.map((article, index) => (
          <div key={index} className={`innerWidth yPaddings ${css.newsItem}`}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
