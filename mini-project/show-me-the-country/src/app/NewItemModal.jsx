import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createCounrty, showModal } from '../ducks/country';

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* Stay in place */
  z-index: 100; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;
const Form = styled.form`
  box-sizing: border-box;
  padding: 40px 0 0;
  width: 600px;
  height: 500px;
  border-radius: 5px;
  background: #f6f6f6;
`;
const Input = styled.input`
  display: block;
  height: 30px;
  width: 400px;
  margin: 20px auto;
  border: none;
  border-bottom: 1.5px solid #51cf66;
  background: none;
  font-size: 20px;
`;

const ButtonWrapper = styled.button`
  display: block;
  height: 50px;
  width: 150px;
  margin: 50px auto 0;
  border: none;
  border-radius: 10px;
  background: #51cf66;
  font-size: 18px;
  color: #f8f9fa;
`
const CloseBtn = styled.button`
  display: block;
  height: 30px;
  width: 100px;
  margin: 20px auto 0;
  border: none;
  border-radius: 10px;
  background: #ffa8a8;
  font-size: 13px;
  color: #f8f9fa;
`;

function NewItemModal({ createCounrty, showModal, modalVisible}) {
  const callingCodesRef = useRef('');
  const nameRef = useRef('');
  const alpha2CodeRef = useRef('');
  const capitalRef = useRef('');
  const regionRef = useRef('');

  const addCountryData = e => {
    e.preventDefault();
    createCounrty({
      callingCodes: [callingCodesRef.current.value],
      name: nameRef.current.value,
      alpha2Code: alpha2CodeRef.current.value,
      capital: capitalRef.current.value,
      region: regionRef.current.value
    });
    showModal(false);
  }

  const closeModal = e => {
    e.preventDefault();
    showModal(false);
  }

  if(!modalVisible) return null;
  return (
    <ModalWrapper>
      <Form>
        <Input ref={callingCodesRef} placeholder="calling codes" type="text" />
        <Input ref={nameRef} placeholder="name" type="text" />
        <Input ref={alpha2CodeRef} placeholder="alpha 2 code" type="text" />
        <Input ref={capitalRef} placeholder="capital" type="text" />
        <Input ref={regionRef} placeholder="region" type="text" />
        <ButtonWrapper onClick={addCountryData}>Create</ButtonWrapper>
        <CloseBtn onClick={closeModal}>close</CloseBtn>
      </Form>
    </ModalWrapper>
  )
}

NewItemModal.propTypes = {

}

const mapStateToProps = ({country: {modalVisible}}) => ({modalVisible});
const mapDispatchToProps = { createCounrty, showModal }

export default connect(mapStateToProps, mapDispatchToProps)(NewItemModal);