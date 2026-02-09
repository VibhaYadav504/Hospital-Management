import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './web/Pages/Home/Home'
import WebLayout from './web/Layout/WebLayout'
import AdminLayout from './admin/Layout/AdminLayout'
import Dashboard from './admin/Dashboard/dashboard'
import Doctor from './web/Pages/Doctors/Doctor'
import BookAppointment from './web/Pages/Blogs/BookAppointment'
import Contact from "./web/Pages/Contact/Contact";
import Service from './web/Pages/Services/Service'
import About from './web/Pages/About/About'
import AdminDoctor from './admin/Doctor/Doctor'
import AdminService from './admin/Service/Service'
import Appointment from './admin/Appointment/Appointment'
import AddService from './admin/Service/components/AddService'
import EditService from './admin/Service/components/EditService'
import AddDoctor from './admin/Doctor/components/AddDoctor'
import EditDoctor from './admin/Doctor/components/EditDoctor'
import EditAppointment from './admin/Appointment/components/EditAppointment'
import AddAppointment from './admin/Appointment/components/AddAppointment'
import Login from './admin/login/login'
function App() {
  return (
    <>

      {/* website */}
      <Routes>
        <Route path='/' element={<WebLayout><HomePage /> </WebLayout>} />
        <Route path='/doctors' element={<WebLayout><Doctor /></WebLayout>} />
        <Route path='/about' element={<WebLayout><About /></WebLayout>} />
        <Route path='/book-appointment' element={<WebLayout><BookAppointment /></WebLayout>} />
        <Route path='/contact' element={<WebLayout><Contact /></WebLayout>} />
        <Route path='/services' element={<WebLayout><Service /></WebLayout>} />
       



        {/* Admin */}
          <Route path='/login' element={<Login/>}/>
        <Route path='/admin/dashboard' element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path='/admin/doctors' element={<AdminLayout><AdminDoctor /></AdminLayout>} />
        <Route path='/admin/doctors/add' element={<AdminLayout><AddDoctor /></AdminLayout>} />
        <Route path='/admin/doctors/edit/:id' element={<AdminLayout><EditDoctor /></AdminLayout>} />
        <Route path='/admin/services' element={<AdminLayout><AdminService /></AdminLayout>} />
        <Route path='/admin/services/add' element={<AdminLayout><AddService /></AdminLayout>} />
        <Route path="/admin/services/edit/:id" element={<AdminLayout><EditService /></AdminLayout>} />
        <Route path='/admin/appointments' element={<AdminLayout><Appointment /></AdminLayout>} />
        <Route path="/admin/appointments/edit/:id" element={<AdminLayout><EditAppointment /></AdminLayout>} />
        <Route path='/admin/appointments/add' element={<AdminLayout><AddAppointment/></AdminLayout>} />


      </Routes>




    </>
  )
}

export default App
