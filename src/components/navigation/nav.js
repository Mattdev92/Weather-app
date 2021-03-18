import { connect } from 'react-redux';
import { exampleAction } from 'actions/navigation-action';
import { Nav } from 'components/navigation/nav.styles';

const Navigation = ({ author, ExampleAction }) => {
  return (
    <Nav>
      <div>Nav</div>
      <button onClick={ExampleAction}>Click me</button>
    </Nav>
  );
};
const mapStateToProps = (state) => {
  const { author } = state;
  return { author };
};

const mapDispatchToProps = (dispatch) => ({
  ExampleAction: () => dispatch(exampleAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
