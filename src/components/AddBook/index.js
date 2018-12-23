import React from 'react';
import SearchForm from '../SearchForm';
import ViewBooks from '../ViewBooks';

export default class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.addbook.bind(this);
    let typeBooks = this.props.bookType
    if(this.props.listSearchedBooks === true){
        this.state = {
            Books: [ 
            typeBooks
            ],
            deleted: false
        }
    }
    else{
    this.state = {
        Books: [
        ],
        deleted: false
    }
}
}

addbook(event) {
  let currentBooks = this.state.Books;
  let textBox = event.target.previousElementSibling;

  if (textBox.value) {
      currentBooks.push(textBox.value);
      textBox.value = '';

      this.setState({
          Books: currentBooks
      });
  }
}

removebook(event) {
  let currentbook = event.target.textContent;
  let updatedBooks = this.state.Books.filter((book) => {
      return currentbook !== book;
  });

  this.setState({
      Books: updatedBooks
  });

  !this.state.deleted && this.setState({
      deleted: true
  });
}

render() {
  let cssbookItem = 'book-item';

  let bookItems = this.state.Books.map((book, i) => {
      return <div onClick={this.removebook.bind(this)}
                className={cssbookItem}
                key={cssbookItem + i}>{book}
            </div>;
  });

  return (
      <div className="Books-list">
        <SearchForm add={this.handleClick} placeText={this.props.type == undefined ? "Search Books by Title" : "Search Books by " + this.props.type}/>
        <ViewBooks books={bookItems} />
      </div>
  );
}
}



