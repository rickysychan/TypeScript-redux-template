import { useState } from 'react';
import React from 'react';
import { useTypeSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { SearchRepositories } = useActions();
  const { data, error, loading } = useTypeSelector(
    (state) => state.repositories
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    SearchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}> {name}</div>)}
    </div>
  );
};

export default RepositoriesList;
