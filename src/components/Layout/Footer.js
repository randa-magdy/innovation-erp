import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                © {new Date().getFullYear()} Innovation hub <span className="d-none d-sm-inline-block"> - Crafted with <i className="mdi mdi-heart text-danger"></i> by Innovation.</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;





