import React, { Fragment, useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  let [page, setPage] = useState('planets');
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <Fragment>
        <div className="App">
          <h1>Star Wars Info</h1>
          <Navbar setPage={setPage} />
          <div className="content">
            {page === 'planets' ? <Planets /> : <People />}
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </Fragment>
    </QueryClientProvider>
  );
}

export default App;