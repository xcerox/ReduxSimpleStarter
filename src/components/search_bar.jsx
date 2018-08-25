import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        const term = event.target.value;
        this.setState({ term: term});
        this.props.onSearchVideo(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input  placeholder='Are you looking for something'
                        value={this.state.term}
                        onChange={this.onInputChange} />
            </div>
        );
    }
}

export default SearchBar;