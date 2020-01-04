import React, { Component } from 'react';
import { activateAuthLayout } from '../../../../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../../../../Subpages/Settingmenu';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import "react-datepicker/dist/react-datepicker.css";
import '../../scss/EmployeePortalStyle.scss'

class LoanRequest extends Component {
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
                                        <li className="breadcrumb-item active">Loan Request</li>
                                    </ol>
                                </div>
                                <div className="col-sm-6">
                                    <div className="float-right d-none d-md-block">
                                        <Settingmenu />
                                    </div>
                                </div>
                            </div>
                            <div className="loan-request padding">
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
                                    
                                    <div className="loan">
                                        <h5>Loan</h5>
                                        <Row>
                                            <Col sm="12">
                                                <Card>
                                                    <CardBody>
                                                        <Row className="mg-bottom">
                                                        <Col md="4">
                                                                <AvField name="condition1" label="Condition 1 "  type="checkbox"  id="invalidCheckl1" errorMessage="Check Condition 1" validate={{ required: { value: true } }} />
                                                            </Col>
                                                            <Col md="4">
                                                                <AvField name="condition2" label="Condition 2 "  type="checkbox"  id="invalidCheckl2" errorMessage="Check Condition 2" validate={{ required: { value: true } }} />
                                                            </Col>
                                                            <Col md="4">
                                                                <AvField name="amount-requested" label="Amount Requested: " placeholder="Amount Requested" type="number" errorMessage="Enter Amount Requested" validate={{ required: { value: true } }} />
                                                            </Col>
                                                        </Row>
                                                    
                                                        <Row className="mg-bottom">
                                                            <Col md="4">
                                                                <AvField name="bank-account" label="Bank Account "  type="text" value="AL165465444566454" readOnly errorMessage="Enter Bank Account" validate={{ required: { value: true } }} />
                                                            </Col>
                                                            <Col md="4">
                                                                <AvField name="transfer-type" label="Transfer Type "  type="checkbox"  id="invalidCheckl3" errorMessage="Check Transfer Type" validate={{ required: { value: true } }} />
                                                            </Col>
                                                            <Col md="4">
                                                                <AvField name="attachments" label="Attachments: " placeholder="Attachments" type="file" errorMessage="Enter Attachments" validate={{ required: { value: true } }} />
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
                                                            <Col md="4">
                                                                <AvField name="condition-1" label="Condition 1 "  type="checkbox"  id="invalidCheckl1-1" errorMessage="Check Condition 1" validate={{ required: { value: true } }} />
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

export default connect(null, { activateAuthLayout })(LoanRequest);


