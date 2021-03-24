import { connect } from 'react-redux';
import { exampleAction } from 'actions/navigation-action';
import { Nav } from 'components/organisms/navigation/nav.styles';
import { Dispatch } from 'redux';
import {
  Navig,
  NavigationReducer,
} from 'components/organisms/navigation/nav.types';
import SearchBar from 'components/molecules/searchBar/searchBar';

const Navigation = ({ author, ExampleAction }: Navig) => {
  console.log(author);
  return (
    <Nav>
      <SearchBar />
    </Nav>
  );
};
const mapStateToProps = ({ navigationReducer }: NavigationReducer) => {
  const { author } = navigationReducer;
  return { author };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ExampleAction: () => dispatch(exampleAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
