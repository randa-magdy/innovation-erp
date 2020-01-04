import React, { Component } from 'react';
import { activateAuthLayout } from '../../../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../../../Subpages/Settingmenu';
import { Row, Col, Card, CardBody  } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../scss/EmployeePortalStyle.scss'

class MonthlyClearance extends Component {
    
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
                                        <li className="breadcrumb-item active">Monthly Clearance</li>
                                    </ol>
                                </div>
                                <div className="col-sm-6">
                                    <div className="float-right d-none d-md-block">
                                        <Settingmenu />
                                    </div>
                                </div>
                            </div>
                            <div className="monthly-clearance padding">
                                <AvForm >
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
                                                                <AvField type="select" name="department" label="Department" defaultValue="Operations" readOnly errorMessage="Enter Department" validate={{ required: { value: true } }}>
                                                                    <option>Operations</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                </AvField>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="4">
                                                                <AvField type="select" name="site" label="Site" defaultValue="Jubail Industrial Area" readOnly errorMessage="Enter Site" validate={{ required: { value: true } }}>
                                                                    <option>Jubail Industrial Area</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                </AvField>
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

                                    <div className="clearance">
                                        <h5>Clearance</h5>
                                        <Row>
                                            <Col sm="12">
                                                <Card>
                                                    <CardBody>
                                                        <Row className="mg-bottom">
                                                            <Col md="4">
                                                                <AvField name="clearance-type" label="Clearance Type "  type="checkbox"  id="invalidCheckM1" errorMessage="Check Clearance Type" validate={{ required: { value: true } }} />    
                                                            </Col>
                                                        </Row>
                                                        <Row className="mg-bottom">
                                                            <Col md="4">
                                                                <AvField name="vacation-date" label="Vacation Date "  type="date" value="2019-10-10" readOnly errorMessage="Enter Vacation Date" validate={{ required: { value: true } }} />
                                                            </Col>
                                                            
                                                            <Col md="4">
                                                                <AvField name="vacation-days" label="Vacation Days "  type="text" value="30 Days" readOnly errorMessage="Enter Vacation Days" validate={{ required: { value: true } }} />
                                                            </Col>
                                                            
                                                            <Col md="4">
                                                                <AvField name="vacation-return-date" label="Vacation Return Date "  type="date" value="2019-10-11" readOnly errorMessage="Enter Vacation Returne Date" validate={{ required: { value: true } }} />
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

export default connect(null, { activateAuthLayout })(MonthlyClearance);


