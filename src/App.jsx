import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate, NavLink } from 'react-router-dom'
import AddCocktail from './pages/AddCocktail/AddCocktail'
import CocktailList from './pages/CocktailList/CocktailList'
import CocktailDetail from './pages/CocktailDetails/CocktailDetails'
import { EditCocktail } from './pages/EditCocktail/EditCocktail'
import Collection from './pages/Collection/Collection'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import EditProfile from './pages/EditProfile/EditProfile'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as cocktailService from './services/cocktails'
import * as profileService from './services/profileService'

const App = () => {
  const [cocktails, setCocktails] = useState([])
  const [cocktailDetail, setCocktailDetail] = useState([])
  const [profiles, setProfiles] = useState({})
  const [profileDetails, setProfileDetails] = useState([])

  const [profile, setProfile] = useState({})

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

  const handleDeleteCocktail = id => {
    cocktailService.deleteCocktail(id)
      .then(deletedCocktail => setCocktails(cocktails.filter(cocktail => cocktail._id !== deletedCocktail._id)))
  }

  const handleUpdateCocktail = updatedCocktailData => {
    cocktailService.update(updatedCocktailData)
      .then(updatedCocktail => {
        const newCocktailArray = cocktails.map(cocktail =>
          cocktail._id === updatedCocktail._id ? updatedCocktail : cocktail
        )
        setCocktails(newCocktailArray)
        navigate('/cocktails')
      })
  }


  const handleUpdateProfile = updatedProfileData => {
    profileService.updateProfile(updatedProfileData)
      .then(updatedProfile => {
        setProfiles(profile => profile._id === updatedProfile._id ? updatedProfile : profile)
      })
  }

  const handleAddCocktailFav = cocktail => {
    profileService.addCocktailToCollection(cocktail)
    .then(updatedProfile => {
      setProfile(updatedProfile)
    })
  }

  const handleRemoveCocktailFav = cocktail => {
    profileService.removeCocktailFromCollection(cocktail)
    .then(updatedProfile => {
      setProfile(updatedProfile)
    })
  }

  useEffect(() => {
    cocktailService.getAll()
      .then(allCocktails => setCocktails(allCocktails))
  }, [])

  useEffect(() => {
    profileService.getAllProfiles()
      .then(allProfiles => setProfiles(allProfiles))
  }, [])
  
  useEffect(() =>{
    if(user){
      profileService.getProfileDetail(user.profile)
      .then(profileData => {
        setProfile(profileData)
      })
    }
  },[user])




  return (
    <>
      <div className="bg-cyan-600 w-full h-screen">
        <NavBar user={user} handleLogout={handleLogout} />

        <Routes>
          <Route path="/" element={
          <Landing user={user} />} 
          />
          
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
            element={
              user ? <Profiles /> : <Navigate to="/login" />}
          />

          <Route path='/profile' element={
          <ProfileDetails />} 
          />

          <Route path='/edit' element={
          <EditProfile handleUpdateProfile={handleUpdateProfile} />} 
          />

          <Route
            path='/favorites'
            element={
            <Collection 
            handleAddCocktailFav={handleAddCocktailFav} 
            handleRemoveCocktailFav={handleRemoveCocktailFav} 
            profile={profile} />}
          />

          <Route path='/add' element={
          <AddCocktail handleAddCocktail={handleAddCocktail} />} 
          />

          <Route path='/cocktails' element={
          <CocktailList 
          cocktails={cocktails} 
          handleDeleteCocktail={handleDeleteCocktail} 
          handleAddCocktailFav = {handleAddCocktailFav}
          handleRemoveCocktailFav = {handleRemoveCocktailFav}
          profile = {profile} />} 
          />

          <Route path='/cocktail' element={
          <CocktailDetail />} 
          />

          <Route path='/editcocktail' element={
          <EditCocktail handleUpdateCocktail={handleUpdateCocktail} />} 
          />

        </Routes>
      </div>
    </>
  )
}

export default App
