import { connect } from 'react-redux';
import { exampleAction } from 'actions/navigation-action';

const Nav = ({ author, ExampleAction }) => {
  return (
    <>
      <div>Nav</div>
      <button onClick={ExampleAction}>Click me</button>
    </>
  );
};
const mapStateToProps = (state) => {
  const { author } = state;
  return { author };
};

const mapDispatchToProps = (dispatch) => ({
  ExampleAction: () => dispatch(exampleAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
