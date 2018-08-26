import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange({target}) {
        this.setState({ term: target.value }, () => {
            this.props.onSearchChange(target.value);
        });
    }

    render() {
        return (
            <div className="search-bar">
                <input  placeholder='Are you looking for something to watch'
                        value={this.state.term}
                        onChange={this.onInputChange} />
            </div>
        );
    }
}

export default SearchBar;