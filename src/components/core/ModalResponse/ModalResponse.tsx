import React, { useState } from 'react';
import { Button, Modal, Result } from 'antd';

interface IModalResponseProps {
  status: any;
  tittle: string,
  subTitle: string,
  isModalOpen: boolean,
  setIsModalOpen: (e: boolean) => void,
}

const ModalResponse: React.FC<IModalResponseProps> = ({ status, tittle, isModalOpen, setIsModalOpen, subTitle }) => {

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal footer={false} title="Respuesta" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Result
          status={status}
          title={tittle}
          subTitle={subTitle}
        />
      </Modal>
    </>
  );
};

export default ModalResponse;