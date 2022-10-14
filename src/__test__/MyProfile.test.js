
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import Rockets from '../components/rockets/Rockets';
import store from '../redux/configureStore';
import Profile from '../components/my_profile/MyProfile';


it('the component should render a div container', () => {
  render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );

  const rocket = screen.getByTestId('container');

  expect(rocket).toBeInTheDocument();
});
