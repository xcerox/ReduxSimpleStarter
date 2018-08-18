import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import api from 'youtube-api-search';
import * as keys from '../keys.json';

import SearchBar from './components/search_bar.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {videos: []};
        api({key: keys.YOUTUBE_API, term: 'surfboards'}, (videos) => {
            this.setState(videos)
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));