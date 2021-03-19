import { connect } from 'react-redux';
import { exampleAction } from 'actions/navigation-action';
import { Nav } from 'components/navigation/nav.styles';
import { Dispatch } from 'redux';
import { Navig, State } from 'components/navigation/nav.types';

const Navigation = ({ author, ExampleAction }: Navig) => {
  console.log(author);
  return (
    <Nav>
      <div>Navi</div>
      <button onClick={ExampleAction}>Click me</button>
    </Nav>
  );
};
const mapStateToProps = (state: State) => {
  const { author } = state;
  return { author };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ExampleAction: () => dispatch(exampleAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
