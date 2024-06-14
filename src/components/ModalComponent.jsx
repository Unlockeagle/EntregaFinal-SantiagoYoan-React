import { useEffect } from "react";


export default function ModalComponent ({ show, onClose, orderID }) {
  useEffect(() => {
    const modal = document.getElementById('my_modal_5');
    if (show) {
      modal.showModal();
    } else {
      modal.close();
    }

    // Close modal on ESC key press
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [show, onClose]);

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-white">Hello!</h3>
        <p className="py-4 text-white">Your purchase has been made, please save your order number</p>
        <strong className="text-white">{orderID}</strong>
        <p className="py-4 text-white">Press ESC key or click the button below to close</p>
        <div className=" modal-action">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </dialog>
  );
};