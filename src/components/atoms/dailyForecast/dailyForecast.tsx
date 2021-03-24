// import { useState, useEffect } from 'react';
import { SearchBarReducer } from 'components/molecules/firstSection/firstSection.types';
import { connect, ConnectedProps } from 'react-redux';
import { Container } from 'components/atoms/dailyForecast/dailyForecast.styles';

const DailyForecast = (props: PropsFromRedux): JSX.Element => {
  const { day } = props;
  return <Container>{day}</Container>;
};
const mapStateToProps = (
  { searchBarReducer }: SearchBarReducer,
  ownProps: { day: string }
) => {
  const { day } = ownProps;
  const { city } = searchBarReducer;
  return { city, day };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(DailyForecast);
