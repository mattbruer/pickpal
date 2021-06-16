import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import NewInstSelect from './NewInstSelect'

function ModalExampleShorthand() {
  return (
            <Modal
                style={{position:"relative", top:'0',left:"0", height:"40%",width:"70%"}}
                trigger={<Button>+ New Part</Button>}
                
                content=
                {
                <div style={{display:"flex",height:"50%"}}>
                   
                 <NewInstSelect/>
                </div>
                }
                actions={['Cancel', { key: 'done', content: 'Create', disabled:true,positive: true, onClick:()=>{alert("create")} }]}
            />
     
  
  )
}

export default ModalExampleShorthand
