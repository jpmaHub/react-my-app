import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchType from '../components/SearchType';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import AddBook from '../components/AddBook';

storiesOf('Search by Title', module)
.add('with header',() => (<Header type= "Title" />))
.add('with AddBook',() => (<AddBook type= "Title" />));


storiesOf('Search by Author', module)
.add('with header',() => (<Header type= "Author" />))
.add('with AddBook',() => (<AddBook type= "Author" />));



