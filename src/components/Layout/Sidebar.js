import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import MetisMenu from 'metismenujs';
import { connect } from 'react-redux';
import { toggleSidebar  } from '../../store/actions';

const SideNav = () => { return <div id="sidebar-menu">
                <ul className="metismenu" id="side-menu">
                            <li className="menu-title">Overview</li>
                            <li>
                                <Link to="/dashboard"  >
                                    <i className="ion ion-md-speedometer"></i><span className="badge badge-success badge-pill float-right">2</span> <span> Dashboard </span>
                                </Link>
                            </li>

                            <li className="menu-title">Apps</li>
                            <li>
                                 <Link to="notifications" ><i className="ion ion-md-notifications noti-icon"></i><span className="badge badge-success badge-pill float-right">3</span> <span> Notifications </span></Link>
                            </li>

                            <li>
                                <Link to="chat"  ><i className="ion ion-md-chatboxes"></i><span> Company Chat </span></Link>
                            </li>

 
                            <li>
                                <Link to="/#"  ><i className="ion ion-logo-buffer"></i><span> Employee Portal <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="/#" > View Employee Info</Link></li>
                                    <li><Link to="/#" > My Tasks</Link></li>
                                    <li><Link to="/#" > My Custodies</Link></li>
                                    <li><Link to="monthly-clearence" > Monthly Clearance</Link></li>
                                    <li><Link to="/#" > Attendance/Timesheets</Link></li>
                                    <li>
                                        <Link to="/#">Requests  <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Appraisal Request</Link></li>
                                            <li><Link to="/#" >Material Request</Link></li>
                                            <li><Link to="/#" >Payment Request</Link></li>
                                            <li><Link to="loan-request" >Loan Request</Link></li>
                                            <li><Link to="leave-request" >Leave Request</Link></li>
                                            <li><Link to="/#" >Vacation Request</Link></li>
                                            <li><Link to="/#" >Rejoining Request</Link></li>
                                            <li><Link to="/#" >Resignation Request</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/#" > Submit Complaint</Link></li>
                                    <li><Link to="/#" > Helpdesk</Link></li> 
                                </ul>
                            </li>

                            <li>
                                <Link to="/#"  ><i className="ion ion-md-paper-plane"></i><span> CRM <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    
                                    <li>
                                        <Link to="/#">Incoming Projects <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Service Enquiries</Link></li>
                                            <li><Link to="/#" >Service Quotations</Link></li>
                                            <li><Link to="/#" >Service Orders/Recieved POs</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/#" > Reports</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/#"  ><i className="ion ion-md-business"></i><span> HR & Payroll <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="/#" >Employee Master</Link></li>
                                    <li>
                                        <Link to="/#">Recruitment <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Applications</Link></li>
                                            <li><Link to="/#" >Interviews</Link></li>
                                            <li><Link to="/#" >Job Offers</Link></li>
                                            <li><Link to="/#" >Contracts</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/#" >Certificates</Link></li>
                                    <li>
                                        <Link to="/#">Payroll <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Attendance</Link></li>
                                            <li><Link to="/#" >Timesheets</Link></li>
                                            <li><Link to="/#" >Loans</Link></li>
                                            <li><Link to="/#" >Advances</Link></li>
                                            <li><Link to="/#" >Deductions</Link></li>
                                            <li><Link to="/#" >Payroll</Link></li>
                                            <li><Link to="/#" >Generate Payroll</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/#" >Leaves</Link></li>
                                    <li><Link to="/#" >Vacations</Link></li>
                                    <li>
                                        <Link to="/#">Appraisal <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Employee Aprraisal</Link></li>
                                            <li><Link to="/#" >Salary Increments</Link></li>
                                            <li><Link to="/#" >Bonus</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/#" >Training</Link></li>
                                    <li><Link to="/#" >End of Service</Link></li>
                                    <li><Link to="/#" >Complaints</Link></li>
                                    <li><Link to="/#" >Company Documents</Link></li>
                                    <li><Link to="/#" >Reports</Link></li>
                                </ul>
                            </li>


                            <li>
                                <Link to="/#"  ><i className="ion ion-md-cash"></i><span> Finance <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="/#" > Accounts Master</Link></li>
                                    <li>
                                        <Link to="/#">Recievables  <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Service Invoices</Link></li>
                                            <li><Link to="/#" >Reciept Vouchers</Link></li>
                                            <li><Link to="/#" >Reports</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/#">Payables  <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Purchase Inovices</Link></li>
                                            <li><Link to="/#" >Purchase Vouchers</Link></li>
                                            <li><Link to="/#" >Petty Cash</Link></li>
                                            <li><Link to="/#" >Reports</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/#">Banking  <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Foreign Exchange</Link></li>
                                            <li><Link to="/#" >Payment Vouchers</Link></li>
                                            <li><Link to="/#" >Reports</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/#">Journals  <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Journal Voucher</Link></li>
                                            <li><Link to="/#" >Opening Balances</Link></li>
                                            <li><Link to="/#" >Credit Note</Link></li>
                                            <li><Link to="/#" >Debit Note</Link></li>
                                            <li><Link to="/#" >Payroll Entries</Link></li>
                                            <li><Link to="/#" >Depreciation Entries</Link></li>
                                            <li><Link to="/#" >Inter-Division Journal Voucher</Link></li>
                                            <li><Link to="/#" >Reports</Link></li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li>

                            <li>
                                <Link to="/#"  ><i className="ion ion-ios-archive"></i><span> Inventory <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="/#" > Product Master</Link></li>
                                    <li>
                                        <Link to="/#">Stocks  <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Material Issue</Link></li>
                                            <li><Link to="/#" >Material Return</Link></li>
                                            <li><Link to="/#" >Custody Transfer</Link></li>
                                            <li><Link to="/#" >Location Transfer</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/#">Purchasing  <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Material Purchase Requests</Link></li>
                                            <li><Link to="/#" >Purchase Quotations</Link></li>
                                            <li><Link to="/#" >Purchase Orders</Link></li>
                                            <li><Link to="/#" >Material Reciept</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/#" > Disposal</Link></li>
                                    <li><Link to="/#" > Reports</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/#"  ><i className="ion ion-ios-copy"></i><span> Fixed Assets <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="/#" > Fixed Assets Master</Link></li>
                                    <li>
                                        <Link to="/#">Depreciation <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Post Depreciation Entries</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/#" > Maintenance</Link></li>
                                    <li><Link to="/#" > Asset Valuation</Link></li>
                                    <li><Link to="/#" > Location Transfer</Link></li>
                                    <li><Link to="/#" > Reports</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/#"  ><i className="ion ion-md-paper"></i><span> Projects <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="/#" > Projects Master</Link></li>
                                    <li>
                                        <Link to="/#">Contracts <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Customers</Link></li>
                                            <li><Link to="/#">Vendors</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/#" > Costing &  Budgeting</Link></li>
                                    <li><Link to="/#" > Forecasting</Link></li>
                                    <li><Link to="/#" > Tasks</Link></li>
                                    <li><Link to="/#" > Teams</Link></li>
                                    <li><Link to="/#" > Equipment</Link></li>
                                    <li><Link to="/#" > Reports</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/#"  ><i className="ion ion-md-train"></i><span> Transportation <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="pages-login-2">Fleet Master</Link></li>
                                    <li><Link to="pages-register-2">Fleet Management</Link></li>
                                    <li><Link to="pages-recoverpw-2">Fuel</Link></li>
                                    <li><Link to="pages-lock-screen-2">Maintenance</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/#"  ><i className="ion ion-md-desktop"></i><span> IT <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="/#" > Helpdesk Requests</Link></li>
                                    <li>
                                        <Link to="/#">IT Equipment  <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">IT Equipment Master</Link></li>
                                            <li><Link to="/#" >Maintenance Log</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/#"  ><i className="ion ion-md-clipboard"></i><span> Documentations <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="pages-login-2">Company Documentations</Link></li>
                                    <li><Link to="pages-register-2">Contracts</Link></li>
                                    <li><Link to="pages-recoverpw-2">Certificates</Link></li>
                                    <li><Link to="pages-lock-screen-2">Document Control</Link></li>
                                </ul>
                            </li>


                            <li>
                                <Link to="/#"  ><i className="ion ion-ios-person-add"></i><span> Admin <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                <ul className="submenu">
                                    <li><Link to="/#" > Company Settings</Link></li>
                                    <li><Link to="/#" > User Accounts</Link></li>
                                    <li>
                                        <Link to="/#">Roles  <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Access Levels </Link></li>
                                            <li><Link to="/#" >Approval Matrix </Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/#">Masters  <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/#">Division Master </Link></li>
                                            <li><Link to="/#" >Department Master </Link></li>
                                            <li><Link to="/#" >Services Master </Link></li>
                                            <li><Link to="/#" >Designations Master </Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/#" > Backup/Restore</Link></li>
                                    <li><Link to="/#" > Email Configuration</Link></li>
                                </ul>
                            </li>

                        </ul>
    </div>
}

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = { is_toggle: false }
    }

    componentDidMount() {
       new MetisMenu("#side-menu");
       
        var matchingMenuItem = null;
        var ul = document.getElementById("side-menu");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = (item) => {

        item.classList.add('mm-active');
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add('mm-active'); // li 
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");
              
                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add('mm-active'); // li
                    parent3.childNodes[0].classList.add('mm-active'); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add('mm-active');
                    }
                }
            }
            return false;
        }
        return false;
    }

    render() {
        return (
            <React.Fragment>
                <div className="left side-menu">
                    {this.props.is_toggle ? 
                        <PerfectScrollbar>
                             <SideNav />
                        </PerfectScrollbar>
                        :
                        <SideNav />
                        }
                    <div className="clearfix"></div>
                </div>
            </React.Fragment>
        );
    }
}


const mapStatetoProps = state => {
    const { is_toggle } = state.Layout;
    return {  is_toggle };
}

export default withRouter(connect(mapStatetoProps, { toggleSidebar })(Sidebar));












