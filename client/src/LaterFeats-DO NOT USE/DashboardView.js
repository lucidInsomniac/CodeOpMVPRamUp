// import React from 'react'
// import AdminView from '../LaterFeats/Roles/Admin/AdminView'
// import UserView from '../LaterFeats/Roles/UserView'

export default function DashboardView (props) {
    return (
      <div className="DashboardView"> 

      </div>
    )
}

// This displays all the components, react-router to coordinate







/*************Later Feature************************* */
//Access based on user roles: viewing conditionals
    //Admin: CRUD only input data from all form management pages
    //User: Read only displayed data provided, does not have any action jobs
    //Later Feature: StaffView Read only with restricted write privileges: uniform check in/out an athlete card
            //   {/* isActive ? user.role === "admin¨" : "user" */}
            //   <AdminView />
            //   <UserView />