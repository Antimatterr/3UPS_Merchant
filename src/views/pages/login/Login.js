import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import "./login.css"

const Login = () => {
  const [warning, setWarning] = useState(false)
  return (
    <div className="login_page">
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="9">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>

                    <CTabs activeTab="profile">
                      <CNav variant="tabs">
                        <CNavItem>
                          <CNavLink data-tab="profile">
                            Login Using Password
                          </CNavLink>
                        </CNavItem>
                        <CNavItem>
                          <CNavLink data-tab="Business_details">
                            Login Using OTP
                          </CNavLink>
                        </CNavItem>
                      </CNav>
                      <CTabContent>
                        <CTabPane data-tab="profile">
                          <CForm>
                            <CRow className="mt-3" style={{ padding: '20px' }}>
                              <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                  <CInputGroupText>
                                    <CIcon name="cil-user" />
                                  </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="Email / Phone Number" autoComplete="username" required />
                              </CInputGroup>
                              <CInputGroup className="mb-4">
                                <CInputGroupPrepend>
                                  <CInputGroupText>
                                    <CIcon name="cil-lock-locked" />
                                  </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="password" placeholder="Password" autoComplete="current-password" required />
                              </CInputGroup>
                              <CCol xs="12" lg="12" style={{ textAlign: 'center' }}>
                                <CButton color="primary" className="px-4" style={{ margin: 'auto' }}>Login</CButton>
                              </CCol>
                              <CCol xs="12" className="text-right mt-3">
                                <CButton color="link" className="px-0"  onClick={() => setWarning(!warning)} >Forgot password?</CButton>
                              </CCol>
                            </CRow>
                          </CForm>
                        </CTabPane>
                        <CTabPane data-tab="Business_details">
                          <CForm>
                            <CRow className="mt-3" style={{ padding: '20px' }}>
                              <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                  <CInputGroupText>
                                    <CIcon name="cil-user" />
                                  </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="Email / Phone Number" autoComplete="username" required />
                              </CInputGroup>
                              <CInputGroup className="mb-4">
                                <CInputGroupPrepend>
                                  <CInputGroupText>
                                    <CIcon name="cil-lock-locked" />
                                  </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="otp" placeholder="Enter OTP" autoComplete="current-password" required />
                              </CInputGroup>

                              <CCol xs="12" lg="12" style={{ textAlign: 'center' }}>
                                <CButton color="primary" className="px-4" style={{ margin: 'auto' }}>Login</CButton>
                              </CCol>
                            </CRow>
                          </CForm>
                        </CTabPane>
                      </CTabContent>
                    </CTabs>

                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5 d-md-down">
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <h6>Register as <strong>Merchant</strong> at <strong>3UPS</strong></h6>
                      <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>


      <CModal
        show={warning}
        onClose={() => setWarning(!warning)}
        color="warning"
      >
        <CModalHeader closeButton>
          <CModalTitle>Forgot Password</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <CCol style={{ textAlign: 'center', margin: 'auto' }} sm="12" md="6" lg="8" xl="8">
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-envelope-closed" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput id="appendedInputButton" type="email" placeholder="Registered Email ID" autoComplete="email" required />
              </CInputGroup>
            </CCol>
          </CModalBody>
        </CForm>
        <CModalFooter style={{ justifyContent: 'space-evenly' }}>
          <CButton color="warning" style={{ color: 'white' }} onClick={() => setWarning(!warning)}>Submit</CButton>{' '}
          <CButton color="secondary" onClick={() => setWarning(!warning)}>Cancel</CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default Login
