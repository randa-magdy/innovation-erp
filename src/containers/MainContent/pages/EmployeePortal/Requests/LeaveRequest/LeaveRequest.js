import React, { Component } from 'react';
import { activateAuthLayout } from '../../../../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../../../../Subpages/Settingmenu';
import { Row, Col, Card, CardBody  } from 'reactstrap';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import '../../scss/EmployeePortalStyle.scss'


class LeaveRequest extends Component {

    state = {};
      
    handleValidSubmit=(event, values)=> {
      this.setState({values});
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    } 


    render() {

        return (
            <React.Fragment>
                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/dashboard"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#"> Employee Portal </Link></li>
                                        <li className="breadcrumb-item active">Leave Request</li>
                                    </ol>
                                </div>
                                <div className="col-sm-6">
                                    <div className="float-right d-none d-md-block">
                                        <Settingmenu />
                                    </div>
                                </div>
                            </div>
                            <div className="leave-request padding">
                                <AvForm onValidSubmit={this.handleValidSubmit}>
                                   <div className="emp-info">
                                    <h5>Employee Information</h5>
                                    <Row>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Row>
                                                        <Col md="4">
                                                            <AvField name="app-id" label="Application ID "  type="text" value="LVA-19-0001" readOnly errorMessage="Enter Application ID" validate={{ required: { value: true } }} />
                                                        </Col>
                                                        
                                                        <Col md="4">
                                                            <div className="form-group">
                                                                <label>Date :</label>
                                                                <div className="input-group">
                                                                    <DatePicker
                                                                        className="form-control"
                                                                        selected={new Date()}
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md="4">
                                                            <AvField name="emp-id" label="Employee ID "  type="text" value="3010802" readOnly errorMessage="Enter Employee ID" validate={{ required: { value: true } }} />
                                                        </Col>
                                                        <Col md="4">
                                                            <AvField name="emp-name" label="Employee Name "  type="text" value="Waseem Altaf" readOnly errorMessage="Enter Employee Name" validate={{ required: { value: true } }} />
                                                        </Col>
                                                        <Col md="4">
                                                            <AvField type="text" name="department" label="Department" defaultValue="Operations" readOnly errorMessage="Enter Department" validate={{ required: { value: true } }}/>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md="4">
                                                            <AvField type="text" name="project" label="Project" defaultValue="Jubail Industrial Area" readOnly errorMessage="Enter Project" validate={{ required: { value: true } }}/>
                                                        </Col>
                                                        <Col md="4">
                                                            <AvField name="desination" label="Desination "  type="text" value="IT Engineer" readOnly errorMessage="Enter Desination" validate={{ required: { value: true } }} />
                                                        </Col>
                                                        <Col md="4">
                                                            <AvField name="appointment-date" label="Date of Appointment "  type="date" value="2019-09-07" readOnly errorMessage="Enter Date of Appointment" validate={{ required: { value: true } }} />
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="leaves">
                                    <h5>Leaves</h5>
                                    <Row>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Row className="mg-bottom">
                                                        <Col md="4">
                                                            <AvField name="leave-type" label="Leave Type"  type="checkbox"  id="invalidCheck1" errorMessage="Check Leave Type" validate={{ required: { value: true } }} />
                                                        </Col>
                                                        <Col md="4">
                                                            <AvField name="condition1" label="Condition 1 "  type="checkbox"  id="invalidCheck2" errorMessage="Check Condition 1" validate={{ required: { value: true } }} />
                                                        </Col>
                                                        <Col md="4">
                                                            <AvField name="condition2" label="Condition 2 "  type="checkbox"  id="invalidCheck3" errorMessage="Check Condition 2" validate={{ required: { value: true } }} />
                                                        </Col>
                                                    </Row>
                                                
                                                    <Row className="mg-bottom">
                                                        <Col md="4">
                                                            <AvField name="no-days" label="No of days Requested "  type="text" value="10 Days" readOnly errorMessage="Enter No of days Requested" validate={{ required: { value: true } }} />
                                                        </Col>
                                                        <Col md="4">
                                                            <AvField name="leave-sdate" label="Leave start date : " placeholder="Leave start date" type="Date" errorMessage="Enter Leave start date" validate={{ required: { value: true } }} />
                                                        </Col>
                                                        <Col md="4">
                                                            <AvField name="leave-edate" label="Leave End Date : " placeholder="Leave End Date" type="Date" errorMessage="Enter Leave End Date" validate={{ required: { value: true } }} />
                                                        </Col>
                                                    </Row>

                                                    <Row className="mg-bottom">
                                                        <Col md="4">
                                                            <AvField name="attachments" label="Attachments: " placeholder="Attachments" type="file" errorMessage="Enter Attachments" validate={{ required: { value: true } }} />
                                                        </Col>
                                                        <Col md="4">
                                                            <AvField name="address" label="Address "  type="text" value="House No b212 Hala Coloney Rawalpindi, pakistan" readOnly errorMessage="Enter Address" validate={{ required: { value: true } }} />
                                                        </Col>
                                                        <Col md="4">
                                                            <AvField name="phone" label="Phone "  type="text" value="925154789325" readOnly errorMessage="Enter Phone" validate={{ required: { value: true } }} />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mg-bottom">
                                                        <Col md="4">
                                                            <AvField name="justification " label="Justification  : " placeholder="Justification " type="textarea" errorMessage="Enter Justification" validate={{ required: { value: false } }} />
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card> 
                                        </Col>
                                    </Row>
                                </div>

                                <div className="hr">
                                    <h5>Hr</h5>
                                    <Row>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Row className="mg-bottom">
                                                        <Col md="6">
                                                            <AvField name="condition-hr-1" label="Condition 1 "  type="checkbox"  id="invalidCheck-hr-1" errorMessage="Check Condition 1" validate={{ required: { value: true } }} />
                                                        </Col>
                                                        <Col md="6">
                                                            <AvField name="justification " label="Justification  : " placeholder="Justification " type="textarea" errorMessage="Enter Justification" validate={{ required: { value: false } }} />
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </AvForm>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { activateAuthLayout })(LeaveRequest);


