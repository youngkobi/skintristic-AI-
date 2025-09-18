import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Modal = () => {
    const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true)};
  const handleCloseModal = () => {
    setShowModal(false)};
  const handleCloseModal2 = () => {
    setShowModal(false)
    navigate('/camera')};
  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {showModal && <Modal onClose={handleCloseModal}>
        {/* Modal content here */}
        <h1>ALLOW A.I. TO ACCESS YOUR CAMERA</h1>
        <button onClick={handleCloseModal}>DENY</button>
        <button onClick={handleCloseModal2}>ALLOW</button>
      </Modal>}
    </div>
  );
}

export default Modal
