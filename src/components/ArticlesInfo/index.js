import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux'
// import { useRouteMatch } from 'react-router-dom';
import './ArticlesInfo.css';

function ArticlesInfo(props) {
  return (
    <>
        <div id='articleTitleContainer'>
          {/* <div id='articlesImage' 
            style={{
              backgroundImage: `url(${props.articleImage})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '20%',
              width: '100%'}}/> */}
          <h1 id='articleTitle'> {props.articleTitle} </h1>
          <div id='articleAuthorAndDate'> 
            <div id='author'>
              {props.articleAuthor 
              ? `Posted by ${props.articleAuthor}` 
              : null}
            </div>
            <div id='date'>
              {props.articleDate}
            </div>
          </div>
        </div>
    </>
  )
}

export default ArticlesInfo;