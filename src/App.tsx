import React, { FunctionComponent, useEffect, useState } from "react";
import { Table, Button, Modal, Text, Spacer, useModal } from "@geist-ui/react";
import axios from "axios";
// import { TableContent } from "./TableContent";

const ClientTable: FunctionComponent = () => {
  const [loadingData, setLoadingData] = useState<boolean>(true);
  

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://clientsapi.gari.dev/clients")
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setLoadingData(false);
        });
    };
    if (loadingData) {
      getData();
    }
  }, []);

  return (
    <Table data={data}>
      <Table.Column prop="firstName" label="firstName" />
      <Table.Column prop="lastName" label="lastName" />
      <Table.Column prop="email" label="email" />
    </Table>
  );
};

const AddModal: FunctionComponent = () => {
  const { visible, setVisible, bindings } = useModal();
  return (
    <>
      <Button auto onClick={() => setVisible(true)}>
        Add client
      </Button>
      <Modal {...bindings}>
        <Modal.Title>Addition Of Client</Modal.Title>
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

