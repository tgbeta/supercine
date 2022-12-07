import React,{useLayoutEffect} from 'react';
import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';


    const Wrapper = ({children}) => {
        const location = useLocation();
        useLayoutEffect(() => {
          document.documentElement.scrollTo(0, 0);
        }, [location.pathname]);
        return children
      } 
    

export default Wrapper