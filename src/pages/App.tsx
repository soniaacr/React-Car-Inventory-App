import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import routes from '../config/routes'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

import AuthChecker from '../Auth/AuthChecker'

function App() {
  
  return (
    <div>
    <HashRouter>
    <Navbar />
    <Provider store={store}>
      <Routes>
      { routes.map((route: any, index: any) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? (
                  <AuthChecker>
                  <route.component />
                  </AuthChecker>
                  ) : (
                    <route.component />
                  )
                }
                />
            )) }
          </Routes>
    </Provider>
    </HashRouter>
    </div>
  )
}

export default App