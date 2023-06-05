import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

function Playlist() {
    return (
        <div data-test-id="Playlist" id="Playlist" className="Playlist">
            <header className="Playlist-header">
                <h2>Playlist</h2>
            </header>
            <body className="Playlist-body">
                <p>this is the body. it's blank for now</p>
                <Tracklist></Tracklist>
                <button><span id="spotify-logo"></span>Save to Spotify</button>
            </body>
        </div>
    );
}

export default Playlist;