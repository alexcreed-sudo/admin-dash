
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Settings from './pages/Settings'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {
  
  return (
    <>
      <Topbar/>
      <Router>
        <div className="flex">
          <Sidebar/>
          <div className="flex-1">
            <Routes>
              
              <Route path="/" element={<Dashboard/>} />
              <Route path="/users" element={<Users/>} />
              <Route path="/settings" element={<Settings/>} />
            </Routes>
          </div>
        </div>
      </Router>
      
    
    </>
  )
}

export default App
