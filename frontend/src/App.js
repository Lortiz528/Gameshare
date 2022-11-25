import './App.css'
import FourOFour from './pages/FourOFour'
// import Edit from './Pages/Edit'
import Home from './pages/Home'
import UsersIndex from './pages/UsersIndex'
// import New from './Pages/New'
// import Show from './Pages/Show'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Signup from './firebaseTest/Signup'
import Login from './firebaseTest/Login'
import UserProfile from './components/UserProfile'
import ResetPassWord from './firebaseTest/ResetPassword'
import UserProfileUpdate from './components/UserProfileUpdate'
import { CurrentUserContext } from './components/CurrentUserContext'
import { useEffect, useState } from 'react'
import GameSwitchDescription from './pages/GameSwitchDescription'
import GameDetail from './components/GameDetail'
function App() {
  //stores the user info throughout the whole app
  const [currentUser, setCurrentUser] = useState({})

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<UsersIndex />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/userprofile' element={<UserProfile />} />
            <Route path='/resetpassword' element={<ResetPassWord />} />
            <Route path='/updateprofile' element={<UserProfileUpdate />} />
            <Route path='/tutorial' element={<GameSwitchDescription />} />
            <Route path='/games/:gameId' element={<GameDetail />} />
            <Route path='*' element={<FourOFour />} />
          </Routes>
        </main>
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
