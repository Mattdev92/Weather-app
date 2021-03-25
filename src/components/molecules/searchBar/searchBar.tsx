import { useState } from 'react';
import {
  Container,
  Input,
  Button,
} from 'components/molecules/searchBar/searchBar.styles';
import { connect } from 'react-redux';
import { Search } from 'components/molecules/searchBar/searchBar.types';
import { Dispatch } from 'redux';
import { setCityName } from 'actions/searchBar-action';
import { SearchBarReducer } from 'components/molecules/firstSection/firstSection.types';

const SearchBar = (props: Search): JSX.Element => {
  const [input, setInput] = useState('Warsaw');
  return (
    <Container>
      <form
        onSubmit={(e) => {
          props.setCityName(input);
          e.preventDefault();
        }}
      >
        <Input
          placeholder="Warsaw"
          onChange={(e) => {
            setInput(e.target.value);
            e.preventDefault();
          }}
        />
        <Button type="submit">SEARCH</Button>
      </form>
    </Container>
  );
};

const mapStateToProps = ({ searchBarReducer }: SearchBarReducer) => {
  const { city } = searchBarReducer;
  return { city };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCityName: (city: string) => dispatch(setCityName(city)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
