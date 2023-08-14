
import { Header, SearchForm, Submit, Input } from './Searchbar.styled';
import {useState}from 'react';
import PropTypes from 'prop-types';


export function Searchbar({onSubmit})  {
  const [query, setQuery] = useState('');

 const handleChange = e => {
    setQuery(e.target.value)
  };

const  handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    onSubmit(query)
    setQuery('')
  };

 
    return (
      <Header>
        <SearchForm onSubmit={handleSubmit}>
          <Submit type="submit">
           
          </Submit>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
            value={query}
            onChange={handleChange}
          />
        </SearchForm>
      </Header>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;