import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate, NavLink } from 'react-router-dom'
import AddCocktail from './pages/AddCocktail/AddCocktail'
import CocktailList from './pages/CocktailList/CocktailList'
import CocktailDetail from './pages/CocktailDetails/CocktailDetails'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as cocktailService from './services/cocktails'
import * as ProfileService from './services/profileService'

const App = () => {
  const [cocktails, setCocktails] = useState([])
  const [cocktailDetail, setCocktailDetail] = useState([])
  const [profiles, setProfiles] = useState([])
  const [profileDetails, setProfileDetails] = useState([])
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

  const handleAddCocktail = newCocktailData => {
    cocktailService.create(newCocktailData)
    .then(newCocktail => setCocktails([...cocktails, newCocktail]))
  }

  useEffect(() => {
    cocktailService.getAll()
    .then(allCocktails => setCocktails(allCocktails))
  }, [])

  useEffect(() => {
    ProfileService.getAllProfiles()
    .then(allProfiles => setProfiles(allProfiles))
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
        <Route path='/profile' element={<ProfileDetails />}/>
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route path='/add' element={<AddCocktail handleAddCocktail={handleAddCocktail}/>}/> 
        <Route path='/cocktails' element={<CocktailList cocktails={cocktails}/> }/>
        <Route path='/cocktail' element={<CocktailDetail />}/>
      </Routes>
    </>
  )
}

export default App
