import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Saidebar from './components/Saidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';



function App() {

   const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="app-container">  
        <Saidebar></Saidebar>
        <div className="content">
              <Header></Header>
              {selectedTab === 'Home' ? <PostList></PostList> : <CreatePost/> }
              
              
              <Footer></Footer>

        </div>   
    </div>
  );
};

export default App;
