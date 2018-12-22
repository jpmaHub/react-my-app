import React from 'react';

export default class ViewBooks extends React.Component {
  render() {
  return (
    <div> 
      {this.props.books} 
    </div> 
  );
  }
}