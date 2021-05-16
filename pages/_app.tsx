import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import gameOptionsReducer from '../redux/gameOptionsReducer'

const store = createStore(gameOptionsReducer)

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
