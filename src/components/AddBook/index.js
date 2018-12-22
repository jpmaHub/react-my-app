import React from 'react';
import Search from 'antd/lib/input/Search';
import SearchForm from '../SearchForm';
import ViewBooks from '../ViewBooks';
export default class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.addbook.bind(this);
    this.state = {
        Books: [
        ],
        deleted: false
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
      return <li onClick={this.removebook.bind(this)}
          className={cssbookItem}
          key={cssbookItem + i}>{book}</li>;
  });

  return (
      <div className="Books-list">
         <SearchForm add={this.handleClick}/>
         <ViewBooks books={bookItems} />
      </div>
  );
}
}



