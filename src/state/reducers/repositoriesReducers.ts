interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesAction {
  type: 'SEARCH_REPOSITORIES';
}

interface SearchRepositoriesSuccessAction {
  type: 'SEARCH_REPOSITORIES_SUCCESS';
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: 'SEARCH_REPOSITORIES_ERROR';
  payload: string;
}

const reducer = (
  state: RepositoriesState,
  action:
    | SearchRepositoriesAction
    | SearchRepositoriesErrorAction
    | SearchRepositoriesSuccessAction
): RepositoriesState => {
  switch (action.type) {
    case 'SEARCH_REPOSITORIES':
      return { loading: true, error: null, data: [] };
    case 'SEARCH_REPOSITORIES_SUCCESS':
      return { loading: false, error: null, data: action.payload };
    case 'SEARCH_REPOSITORIES_ERROR':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
