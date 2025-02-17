import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(),
    useParams: () => ({ id: "123" }),
    useLocation: () => ({ pathname: "/test" }),
  }));

describe('App file Configuration', () => {

test('renders without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});

});
