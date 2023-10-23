import { ModalConfirmation }  from "../lib" ;

export default function ModalConfirm() {
  
    const handleCancelClick = () =>{
       alert('Cancel')
    }
    const handleConfirmClick = () =>{
       alert('Confirm')
    }
    return (        
            <ModalConfirmation title ='Modal Confirmation' handleCancelClick={handleCancelClick} handleConfirmClick={handleConfirmClick}/>        
    )
}