import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label className="field">Search Videos</label>
          <input
            onChange={this.onInputChange}
            type="text"
            value={this.state.term}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
