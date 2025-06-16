import React from 'react'
import Home from './component/Home'
import { Route,Routes} from 'react-router-dom'
import AddWater from './component/Addwater'
import Status from './component/Status'
import History from './component/History'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddWater/>}/>
        <Route path='/status' element={<Status/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
    </div>
  )
}

export default App
