import React, { FunctionComponent, useState } from "react";
import { Table, Button, Modal, Text, Spacer, useModal } from "@geist-ui/react";

interface ClientData {
  firstname: string;
  lastname: string;
  email: string;
}

const ClientTable: FunctionComponent = () => {
  const data = [
    {
      firstname: "Vernon",
      lastname: "Sivubwa",
      email: "vksivubwa@gmail.com",
    },
    {
      firstname: "Wendell",
      lastname: "Smith",

      email: "wsmith@gmail.com",
    },
    {
      firstname: "Hunter",
      lastname: "Schafer",
      email: "hunters@gmail.com",
    },
  ];
  return (
    <Table data={data}>
      <Table.Column prop="firstname" label="firstname" />
      <Table.Column prop="lastname" label="lastname" />
      <Table.Column prop="email" label="email" />
    </Table>
  );
};

const AddModal: FunctionComponent = () => {
  const { visible, setVisible, bindings } = useModal();
  return (
    <>
      <Button auto onClick={() => setVisible(true)}>
        Show Modal
      </Button>
      <Modal {...bindings}>
        <Modal.Title>Addition Of Clien</Modal.Title>
        <Modal.Subtitle>Submission to the table</Modal.Subtitle>
        <Modal.Content>
          <p>Are you sure you want to submit this entry?</p>
        </Modal.Content>
        <Modal.Action passive onClick={() => setVisible(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action>Submit</Modal.Action>
      </Modal>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Text h1 style={{ color: "#ccc" }}>
        CLIENT TABLE
      </Text>
      <ClientTable />
      <Spacer y={1} />
      <AddModal />
    </div>
  );
}

export default App;
