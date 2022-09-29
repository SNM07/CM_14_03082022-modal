# modal-snm07-p14

## Modal window plugin for OC Project 14

A simple react modal (conversion of the [jquery modal](https://github.com/kylefox/jquery-modal))

[Npm library link](https://www.npmjs.com/package/modal-snm07-p14)

1. [Installation](#Installation)
2. [Examples of use](#Example)
3. [Default option](#Default)

## Installation

You can install modal-snm07-p14 with npm:
`npm i modal-snm07-p14`

For import modal-snm07-p14:
`import {Modal} from "modal-snm07-p14"`

## Example of use

```js
const [showModal, setShowModal] = useState(false);
const closeModal = () => setShowModal(!showModal);

<Modal
    showModal={showModal}
    closeModal={closeModal}
    modalTitle="MyTitle"
    modalBody="MyModalText"
/>
```

## Default option

### Default type

```js
Modal.propTypes = {
  showModal: PropTypes.bool,
  closeModal: PropTypes.bool,
  modalTitle: PropTypes.string,
  modalBody: PropTypes.string,
};
```

### Default classNames for customization

```js
ModalContainer       | className="modalContainer"
ModalBackground      | className="modalBackground"
ModalBody            | className="modalBody"
ModalTitleContainer  | className="modalTitleContainer"
ModalTitle           | className="modalTitle"
ModalCloseX          | className="modalCloseX"
ModalContent         | className="modalContent"
ModalTextContainer   | className="modalTextContainer"
ModalText            | className="modalText"
ModalButtonContainer | className="modalButtonContainer"
ModalButton          | className="modalButton"
```