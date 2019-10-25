import React, { Component } from "react";
import { debounce } from "lodash";
let tiemoutSearch;
class Search extends Component {
  render() {
    return (
      <input
        type="text"
        onChange={this._handleChange}
        className="form-control"
      />
    );
  }
  _handleChange = e => {
    this.props._setFilterString(e.target.value);
    
    //   tiemoutSearch && tiemoutSearch.cancel();
    //   tiemoutSearch = debounce(
    //     () => this.props._setFilterString(e.target.value),
    //     300
    //   );
    // };
  };
}

export default Search;
