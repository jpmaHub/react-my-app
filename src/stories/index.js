import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '../components/Title';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import AddBook from '../components/AddBook';

storiesOf('App', module)
.add('with header',() => (<Header />))
.add('with AddBook',() => (<AddBook />));

storiesOf('Header', module)
.add('with title', () => (
  <Title />
))
.add('with SearchForm', () => (
  <SearchForm />
));

