import './App.css';
import { HashRouter as Router } from 'react-router-dom'
import RouterView from './router';
import { useSelector} from 'react-redux';
function App() {
  const routes = useSelector((state: any) => state.auth.routes);
  console.log(routes, '11111')
  return (
    <Router>
      <RouterView></RouterView>
    </Router>
  );
}

export default App;
