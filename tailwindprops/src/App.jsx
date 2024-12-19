import './App.css'
import Card from './components/card'
function App() {
  let name = "Sign in"
  return (
    <>
    <h1 className='w-96 bg-black shadow rounded p-4 rounded-xl'>Tailwind test</h1>
    <Card buttonText={name}/>
    </>
  )
} 

export default App
