import React from 'react';

export default class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <input type="text" id="input-add" style={{ height:"20px" , width:"150px" }} placeholder={this.props.placeText}/>
        <button type="primary" id="new-book"
            onClick={this.props.add} style={{ height:"27px" }} >Add book</button>
      </div>
    );
}
}


