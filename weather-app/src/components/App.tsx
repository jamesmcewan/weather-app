import { Provider } from 'jotai'
import Header from '++components/Header'
import Currently from '++components/Currently'
import Forcasts from '++components/Forcasts'
import Today from '++components/Today'
import LocaleInput from '++components/LocaleInput'

const App = () => {
  return (
    <Provider>
      <div>
        <LocaleInput />
        <Header />
        <Currently />
        <Today />
      </div>
      <Forcasts />
    </Provider>
  )
}

export default App
