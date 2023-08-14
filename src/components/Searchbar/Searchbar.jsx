
import { Header, SearchForm, Submit, Input } from './Searchbar.styled';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.query.trim()) {
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <Submit type="submit">
           
          </Submit>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;