import { Provider } from 'react-redux';
import { store } from '../state';
import ReposoitoriesList from './RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>search for a package</h1> <ReposoitoriesList />
      </div>
    </Provider>
  );
};

export default App;
