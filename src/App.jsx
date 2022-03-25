import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate, NavLink } from 'react-router-dom'
import AddCocktail from './pages/AddCocktail/AddCocktail'
import CocktailList from './pages/CocktailList/CocktailList'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as cocktailService from './services/cocktails'

const App = () => {
  const [cocktails, setCocktails] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddCocktail = async newCocktailData => {
    console.log("HANDLEADDCOCKTAIL, NEWCOCKTAIL DATA == ",newCocktailData)
    const newCocktail = await cocktailService.create(newCocktailData)
    setCocktails([...cocktails,newCocktail])
  }

  useEffect(() => {
    cocktailService.getAll()
    .then(allCocktails => setCocktails(allCocktails))
  }, [])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route path='/add' element={<AddCocktail handleAddCocktail={handleAddCocktail}/>}/> 
        <Route path='/cocktails' element={<CocktailList cocktails={cocktails}/> }/>
      </Routes>
    </>
  )
}

export default App
