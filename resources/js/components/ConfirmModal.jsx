import React from 'react';
import Modal from "./Modal";
import Button from "./Button.jsx";

const ConfirmModal = ({show, loading, onConfirm, onCancel, label = 'Are you sure you want to delete this?'}) => {
    return (
        <Modal show={show} onClose={onCancel}>
            <h3 className={'text-2xl text-center my-4'}>{label}</h3>
            <div className={'my-4 flex gap-4'}>
                <Button outline className={'w-full'} onClick={onCancel}>Cancel</Button>
                <Button loading={loading} className={'w-full '} onClick={onConfirm}>Confirm</Button>
            </div>
        </Modal>
    );
};

export default ConfirmModal;
