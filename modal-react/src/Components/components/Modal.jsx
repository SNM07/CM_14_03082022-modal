import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2;
`;
const ModalBackground = styled.div`
  background: rgba(52, 52, 52, 0.8);
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const ModalBody = styled.div`
  background: rgb(255, 255, 255);
  width: 50%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`;

const ModalTitleContainer = styled.div`
  background: #85c04e;
  color: #ffffff;
  padding: 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalTitle = styled.h4`
  font-family: sans-serif;
`;

const ModalCloseX = styled.span`
  font-family: sans-serif;
  font-size: 2rem;
  cursor: pointer;
`;

const ModalContent = styled.div``;

const ModalTextContainer = styled.div``;

const ModalText = styled.p`
  font-family: sans-serif;
  font-size: 1rem;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 2%;
  margin: 2%;
`;

const ModalButtonContainer = styled.div``;

const ModalButton = styled.button`
  display: block;
  font-size: 1rem;
  font-family: sans-serif;
  margin-left: auto;
  padding: 2% 4%;
  background: #5e8838;
  color: rgb(255, 255, 255);
  border: none;
  outline: none;
  cursor: pointer;
`;

/**
* You must use this modal with this kind of setup:
*
* const [showModal, setShowModal] = useState(false);
*
* const closeModal = () => setShowModal(!showModal);
*
/////////////////////////////////////////////////////////////////////
*
* @param {boolean} showModal - Display the modal
* @param {boolean} closeModal - Close the modal
* @param {string} modalTitle - Title of the modal
* @param {string} modalBody - Text of the modal
*
/////////////////////////////////////////////////////////////////////
*
* To override styles of components use these classNames:
*
* @param {object} ModalContainer       | className="modalContainer"
* @param {object} ModalBackground      | className="modalBackground"
* @param {object} ModalBody            | className="modalBody"
* @param {object} ModalTitleContainer  | className="modalTitleContainer"
* @param {object} ModalTitle           | className="modalTitle"
* @param {object} ModalCloseX          | className="modalCloseX"
* @param {object} ModalContent         | className="modalContent"
* @param {object} ModalTextContainer   | className="modalTextContainer"
* @param {object} ModalText            | className="modalText"
* @param {object} ModalButtonContainer | className="modalButtonContainer"
* @param {object} ModalButton          | className="modalButton"
*
/////////////////////////////////////////////////////////////////////
*
* @returns {component} - Modal
*/

export const Modal = ({ showModal, closeModal, modalTitle, modalBody }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <ModalContainer
      className="modalContainer"
      style={{ display: showModal ? "block" : "none" }}
    >
      <ModalBody className="modalBody" style={{}}>
        <ModalTitleContainer className="modalTitleContainer">
          <ModalTitle className="modalTitle">{modalTitle}</ModalTitle>
          <ModalCloseX onClick={closeModal} className="modalCloseX">
            x
          </ModalCloseX>
        </ModalTitleContainer>
        <ModalContent className="modalContent">
          <ModalTextContainer className="modalTextContainer">
            <ModalText className="modalText">{modalBody}</ModalText>
          </ModalTextContainer>
          <ModalButtonContainer className="modalButtonContainer">
            <ModalButton onClick={closeModal} className="modalButton">
              Close
            </ModalButton>
          </ModalButtonContainer>
        </ModalContent>
      </ModalBody>
      <ModalBackground
        className="modalBackground"
        onClick={closeModal}
      ></ModalBackground>
    </ModalContainer>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool,
  closeModal: PropTypes.bool,
  modalTitle: PropTypes.string,
  modalBody: PropTypes.string,
};
