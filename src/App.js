import React, { memo } from 'react'
import { useRoutes, HashRouter } from "react-router-dom";

import routes from "./router";


const Layout = memo(() => {
  const element = useRoutes(routes)

  return (
    <div>{element}</div>
  )
})

function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}

export default App
