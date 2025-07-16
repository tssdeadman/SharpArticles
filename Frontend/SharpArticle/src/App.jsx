import './App.css'
import useApi from './hooks/api'

function App() {
  
  const dat = useApi();
  
  
  return (
   <div>
      <button>
        hello world
      </button>
   </div>
  )
}

export default App
