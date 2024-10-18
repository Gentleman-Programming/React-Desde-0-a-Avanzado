
import App from './App'
import './App.css'
import { AppRouter } from './AppRouter'
import { ModalProvider } from './components/Modal/context'
import { GlobalProvider } from './context/global.provider'
import ErrorBoundary from './ErrorBoundary'

function AppHookContainer() {
  return (
    <ErrorBoundary>
      <GlobalProvider>
        <ModalProvider>
          <App>
            <AppRouter />
          </App>
        </ModalProvider>
      </GlobalProvider>
    </ErrorBoundary>
  )
}

export default AppHookContainer;
