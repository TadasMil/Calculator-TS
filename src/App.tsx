import React from 'react';
import { Layout } from './components/Layout/Layout'
import { Calculator } from './containers/Calculator'

function App() {
  return (
    <>
      <Layout>
        <Calculator />
      </Layout>
    </>
  );
}

export default App;
