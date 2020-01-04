import Dashboard from './containers/MainContent/dashboard/dashboard';

import Pageslogin from './containers/MainContent/Auth/Login';
import Logout from './containers/MainContent/Auth/Logout';
import Pagesregister from './containers/MainContent/Auth/Register';
import ForgetPassword from './containers/MainContent/Auth/ForgetPassword';
import ResetPassword from './containers/MainContent/Auth/ResetPassword';

import LeaveRequest from './containers/MainContent/pages/EmployeePortal/Requests/LeaveRequest/LeaveRequest'
import LoanRequest from './containers/MainContent/pages/EmployeePortal/Requests/LoanRequest/LoanRequest'
import MonthlyClearance from './containers/MainContent/pages/EmployeePortal/MonthlyClearance/MonthlyClearance'

const routes = [

    // public Routes
    { path: '/login', component: Pageslogin, ispublic: true },
    { path: '/logout', component: Logout, ispublic: true },
    { path: '/register', component: Pagesregister, ispublic: true },
    { path: '/forget-password', component: ForgetPassword, ispublic: true },
    { path: '/reset-password', component: ResetPassword, ispublic: true },

    // Employee Portal
    { path: '/leave-request', component: LeaveRequest },
    { path: '/loan-request', component: LoanRequest },
    { path: '/monthly-clearence', component: MonthlyClearance },


    // Dashboard
    { path: '/dashboard', component: Dashboard },

    { path: '/', component: Pageslogin },

];

export default routes;