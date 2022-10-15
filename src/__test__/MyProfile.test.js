import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import Profile from '../components/my_profile/MyProfile';

it('Check any changes to the component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Profile />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a div container', () => {
  render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );

  const rocket = screen.getByTestId('container');

  expect(rocket).toBeInTheDocument();
});
