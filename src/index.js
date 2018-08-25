import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import youtube_api_get from 'youtube-api-search';
import * as keys from '../keys.json';

import SearchBar from './components/search_bar.jsx';
import VideoList from './components/video_list.jsx';
import VideoDetail from './components/video_detail';
class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.onSelectedVideo = this.onSelectedVideo.bind(this);
        this.onSearchVideo = this.onSearchVideo.bind(this);
    }

    onSearchVideo(term){
        youtube_api_get({key: keys.YOUTUBE_API, term: term}, (videos) => {
            this.setState({videos}, () => {console.log("onSearchVideo")});
        });
    }

    onSelectedVideo(selectedVideo) {
        this.setState({selectedVideo});
    }

    render() {
        return (
            <div>
                <SearchBar onSearchVideo={this.onSearchVideo}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelected={this.onSelectedVideo}
                    videos={this.state.videos} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));