import './App.css'
import YoutubeList from './components/Youtube/YoutubeList'

function App() {
  const name = 'Evondev'
  return (
    <>
      <YoutubeList>
        {/* children: html, component, text, variable */}
        {name}
      </YoutubeList>
    </>
  )
}

export default App
