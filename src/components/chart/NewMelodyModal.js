import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>+ Add Melody</Button>}
    >
      <Modal.Header>Instrument</Modal.Header>
      <Modal.Content image>
       
        <Modal.Description>
          <Header>Instrument</Header>
       <input/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
          <button>hi</button>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='plus'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal
