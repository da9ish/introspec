import Root from './layouts/Root'
import { Router } from 'react-router-dom'
import history from './history';

function App() {
  return (
    <Router location={history.location} navigator={history}>
      <Root />
    </Router>
  );
}

export default App;
