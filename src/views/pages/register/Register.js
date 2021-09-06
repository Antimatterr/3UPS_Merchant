import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormGroup,
  CSelect,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CLabel,
  CTextarea,
  CInputFile,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import "./register.css"

const Register = () => {
  return (
    <div className="register_page">
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="12" lg="12" xl="12">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1 style={{textAlign:'center'}}>Register</h1>
                  <p className="text-muted" style={{textAlign:'center'}}>Create your account</p>
                  <CRow>
                  <CCol sm="12" md="6" lg="4" xl="4">
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Full Name" autoComplete="username" required/>
                  </CInputGroup>
                  </CCol>
                  <CCol sm="12" md="6" lg="4" xl="4">
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                    <CInputGroupText>
                        <CIcon name="cil-phone" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="tel" placeholder="Phone Number" autoComplete="PhoneNo" minlength="10" maxlength="10" pattern="[0-9]{10}" required/>
                  </CInputGroup>
                  </CCol>
                  <CCol sm="12" md="6" lg="4" xl="4">
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="email" placeholder="Email" autoComplete="email" required/>
                  </CInputGroup>
                  </CCol>
                  <CCol sm="12" md="6" lg="4" xl="4">
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-location-pin" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Pin Code" autoComplete="pincode" required/>
                  </CInputGroup>
                  </CCol>
                  <CCol sm="12" md="6" lg="4" xl="4">
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                      <CIcon name="cil-map" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="State" autoComplete="state" required/>
                  </CInputGroup>
                  </CCol>
                  <CCol sm="12" md="6" lg="4" xl="4">
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-location-pin" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="City" autoComplete="city" required/>
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
                    <CInput type="text" placeholder="Nearby Airport" autoComplete="airport" required/>
                  </CInputGroup>
                  </CCol>
                  <CCol sm="12" md="6" lg="4" xl="4">
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                      <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Business Name" autoComplete="b_name" required/>
                  </CInputGroup>
                  </CCol>
                  <CCol sm="12" md="6" lg="3" xl="3" style={{margin:'auto'}}>
                  <CFormGroup className="mb-3">
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option selected disabled>Select Business Type</option>
                      <option value="Private Limited">Private Limited</option>
                      <option value="Proprietorship">Proprietorship</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Public Limited">Public Limited</option>
                      <option value="LLP">LLP</option>
                      <option value="Not Registered">Not Registered</option>
                    </CSelect>
                  </CFormGroup>
                  </CCol>
                  <CCol sm="12" md="6" lg="3" xl="3" style={{margin:'auto'}}>
                  <CFormGroup className="mb-3">
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option selected disabled>Select Business Category</option>
                      <option value="Food and Beverage">Food and Beverage</option>
                      <option value="Fashion and Lifestyle">Fashion and Lifestyle</option>
                      <option value="Grocery">Grocery</option>
                      <option value="Caterers">Caterers</option>
                    </CSelect>
                  </CFormGroup>
                  </CCol>
                 
                  <CCol sm="12" md="6" lg="3" xl="3">
                  <CLabel htmlFor="ccmonth">Opening Time</CLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-bell" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="time" placeholder="Opening Time" autoComplete="time" />
                  </CInputGroup>
                  </CCol>
                  <CCol sm="12" md="6" lg="3" xl="3">
                  <CLabel htmlFor="ccmonth">Closing Time</CLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                      <CIcon name="cil-bell" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="time" placeholder="Closing Time" autoComplete="time" />
                  </CInputGroup>
                  </CCol>
                  <CCol sm="12" md="6" lg="3" xl="3">
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
                  <CFormGroup row>
                  <CLabel col md="6" htmlFor="file-input">GST Registration</CLabel>
                  <CCol xs="12" md="6">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                </CFormGroup>
                </CCol>
                <CCol sm="12" md="6" lg="4" xl="4">
                <CFormGroup row>
                  <CLabel col md="6" htmlFor="file-input">Business Registration</CLabel>
                  <CCol xs="12" md="6">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                </CFormGroup>
                </CCol>
                  <CCol sm="12" md="6" lg="3" xl="3">
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-pencil" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Pan Card Number" autoComplete="Pan Number" req/>
                  </CInputGroup>
                  </CCol>
                  <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">Pan Card</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                </CFormGroup>
                <CCol sm="12" md="6" lg="4" xl="4">
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-speech" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CTextarea name="textarea-input" id="textarea-input" rows="2" placeholder="Business Description" />
                  </CInputGroup>
                  </CCol>
                  </CRow>
                  <CCol style={{textAlign:'center',margin:'auto'}} sm="12" md="6" lg="4" xl="4">
                  <CButton color="success" block>Create Account</CButton>
                  </CCol>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    </div>
  )
}

export default Register
