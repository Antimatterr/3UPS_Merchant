import React, { useState } from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CInputGroupPrepend,
  CInputGroup,
  CInput,
  CForm,
  CLabel,
  CImg,
  CInputGroupAppend,
  CButton,
  CFormGroup,
  CTextarea,
  CInputFile,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import "./profile.css"

const Profile = () => {
  const [warning, setWarning] = useState(false)
  const [success, setSuccess] = useState(false)
  return (
    <>
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardBody>
            <CTabs activeTab="profile">
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink data-tab="profile">
                    Profile
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="Business_details">
                    Business Details
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane data-tab="profile">
                  <CForm>
                    <div className="d-flex">
                      <div className="p-avatar">
                        <CImg
                          src={'avatars/6.png'}
                          className="p-avatar-img"
                          alt="profile_img"
                        />

                      </div>
                      <div className="p-avatar">
                        <CImg
                          src={'avatars/6.png'}
                          className="p-avatar-img"
                          alt="business_logo"
                        />
                      </div>
                    </div>
                    <div className="d-flex">
                      <CCol sm="12" md="6" lg="6" xl="6">
                        <CFormGroup row>
                          <CLabel col md="6" htmlFor="file-input" style={{ textAlign: 'end' }}>Upload Profile Photo</CLabel>
                          <CCol xs="12" md="6">
                            <CInputFile id="file-input" name="file-input" />
                          </CCol>
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="6" lg="6" xl="6">
                        <CFormGroup row>
                          <CLabel col md="6" htmlFor="file-input" style={{ textAlign: 'end' }}>Upload Business Logo</CLabel>
                          <CCol xs="12" md="6">
                            <CInputFile id="file-input" name="file-input" />
                          </CCol>
                        </CFormGroup>
                      </CCol>
                    </div>
                    <CRow>
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3 mt-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="Full Name" autoComplete="username" required />
                        </CInputGroup>
                      </CCol>
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3 mt-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-x" style={{ color: 'red' }} />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput id="appendedInputButton" type="tel" placeholder="Phone Number" autoComplete="PhoneNo" minlength="10" maxlength="10" pattern="[0-9]{10}" required />
                          <CInputGroupAppend>
                            <CButton color="secondary" onClick={() => setSuccess(!success)} className="mr-1">Edit</CButton>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </CCol>
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3 mt-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-check" style={{ color: 'green' }} />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput id="appendedInputButton" type="email" placeholder="Email" autoComplete="email" required />
                          <CInputGroupAppend>
                            <CButton color="secondary" onClick={() => setWarning(!warning)} className="mr-1">Edit</CButton>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </CCol>
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="Business Name" autoComplete="b_name" required />
                        </CInputGroup>
                      </CCol>
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-pencil" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="Business Type" autoComplete="business-type" />
                        </CInputGroup>
                      </CCol>
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-pencil" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="Business Category" autoComplete="business-category" />
                        </CInputGroup>
                      </CCol>

                    </CRow>
                    <CCol style={{ textAlign: 'center', margin: 'auto' }} sm="12" md="6" lg="4" xl="4">
                      <CButton color="success" block>Update Profile</CButton>
                    </CCol>
                  </CForm>
                </CTabPane>
                <CTabPane data-tab="Business_details">
                  <CForm>
                    <CRow className="mt-3">
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-location-pin" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="Pin Code" autoComplete="pincode" required />
                        </CInputGroup>
                      </CCol>
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-map" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="State" autoComplete="state" required />
                        </CInputGroup>
                      </CCol>
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-location-pin" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="City" autoComplete="city" required />
                        </CInputGroup>
                      </CCol>
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-4">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-location-pin" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="Shop no, Apartment, Area, Locality" autoComplete="address" />
                        </CInputGroup>
                      </CCol>
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-location-pin" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="Nearby Airport" autoComplete="airport" required />
                        </CInputGroup>
                      </CCol>
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-pencil" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="GST Number" autoComplete="gst-number" />
                        </CInputGroup>
                      </CCol>

                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-pencil" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="Pan Card Number" autoComplete="Pan Number" req />
                        </CInputGroup>
                      </CCol>
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-bell" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="time" placeholder="Opening Time" autoComplete="time" />
                        </CInputGroup>
                      </CCol>
                      <CCol sm="12" md="6" lg="4" xl="4">
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-bell" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="time" placeholder="Closing Time" autoComplete="time" />
                        </CInputGroup>
                      </CCol>


                      <CCol sm="12" md="12" lg="12" xl="12">
                        <CInputGroup className="mb-4">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-speech" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CTextarea name="textarea-input" id="textarea-input" rows="1" placeholder="Business Desctiption" />
                        </CInputGroup>
                      </CCol>
                    </CRow>
                  </CForm>
                </CTabPane>
                {/* <CTabPane data-tab="messages">
                  nvnsd;vns
                </CTabPane> */}
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
         
{/* ============= Modals for  Start ============ */}

      <CModal
        show={success}
        onClose={() => setSuccess(!success)}
        color="warning"
      >
        <CModalHeader closeButton>
          <CModalTitle>Verify Contact Number</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <CCol style={{ textAlign: 'center', margin: 'auto' }} sm="12" md="6" lg="8" xl="8">
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-phone" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput id="appendedInputButton" type="tel" placeholder="Phone Number" autoComplete="PhoneNo" minlength="10" maxlength="10" pattern="[0-9]{10}" required />
              </CInputGroup>
            </CCol>
            <CCol style={{ textAlign: 'center', margin: 'auto' }} sm="12" md="6" lg="4" xl="4">
              <CButton color="warning" className="mt-3" style={{ color: 'white' }} block>Verify</CButton>
            </CCol>
            <br />
            <CCol style={{ textAlign: 'center', margin: 'auto' }} sm="12" md="6" lg="8" xl="8">
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-pencil" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput id="appendedInputButton" type="otp" placeholder="Enter OTP" autoComplete="otp" required />
              </CInputGroup>
            </CCol>
          </CModalBody>
        </CForm>
        <CModalFooter style={{ justifyContent: 'space-evenly' }}>
          <CButton color="warning" style={{ color: 'white' }} onClick={() => setWarning(!warning)}>Submit</CButton>{' '}
          <CButton color="secondary" onClick={() => setWarning(!warning)}>Cancel</CButton>
        </CModalFooter>
      </CModal>


      <CModal
        show={warning}
        onClose={() => setWarning(!warning)}
        color="warning"
      >
        <CModalHeader closeButton>
          <CModalTitle>Verify Email ID</CModalTitle>
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
                <CInput id="appendedInputButton" type="email" placeholder="Email" autoComplete="email" required />
              </CInputGroup>
            </CCol>
            <CCol style={{ textAlign: 'center', margin: 'auto' }} sm="12" md="6" lg="4" xl="4">
              <CButton color="warning" className="mt-3" style={{ color: 'white' }} block>Verify</CButton>
            </CCol>
            <br />
            <CCol style={{ textAlign: 'center', margin: 'auto' }} sm="12" md="6" lg="8" xl="8">
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-pencil" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput id="appendedInputButton" type="otp" placeholder="Enter OTP" autoComplete="otp" required />
              </CInputGroup>
            </CCol>
          </CModalBody>
        </CForm>
        <CModalFooter style={{ justifyContent: 'space-evenly' }}>
          <CButton color="warning" style={{ color: 'white' }} onClick={() => setWarning(!warning)}>Submit</CButton>{' '}
          <CButton color="secondary" onClick={() => setWarning(!warning)}>Cancel</CButton>
        </CModalFooter>
      </CModal>

      {/* ============= Modals for End ============ */}

    </>
  )
}

export default Profile
