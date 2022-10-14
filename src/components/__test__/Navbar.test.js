import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from '../navbar/Navbar';

it('Check any changes to the component', () => {
  const tree = renderer.create(
    <Navbar />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// it('A div with className container should be rendered', () => {
//   render(
//     <Navbar />,
//   );
//   const div = screen.getByTestId('quote');
//   expect(div).toHaveClass('container');
// });
