import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '../components/Title';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

storiesOf('App', module)
.add('with header',() => (<Header />));

storiesOf('Header', module)
.add('with title', () => (
  <Title />
))
.add('with SearchForm', () => (
  <SearchForm />
));
