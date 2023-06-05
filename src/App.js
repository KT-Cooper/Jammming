import React from 'react';
import './App/App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Ja<span>mmm</span>ing</h1>
            </header>
            <body className="App-body">
                <p>app body</p>
                <SearchBar></SearchBar>
                <SearchResults></SearchResults>
                <Playlist></Playlist>
            </body>
        </div>
    );
}

App();

export default App;