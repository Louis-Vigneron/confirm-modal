import { ModalConfirmation }  from "../lib" ;

export default function ModalConfirm() {
  
    const handleCancelClick = () =>{
       alert('Cancel')
    }
    const handleConfirmClick = () =>{
       alert('Confirm')
    }
    return (        
      <ModalConfirmation 
      title='Modal Confirmation'  // Sets the title text
      handleCancelClick={handleCancelClick} // Defines the action for cancel button
      handleConfirmClick={handleConfirmClick} // Defines the action for confirm button
      textColor='blue' // Sets the text color for the entire modal
      borderRadiusButton={10} // Sets the border radius for the buttons
      textColorTitle='purple' // Sets the text color for the title
      backgroundColor='#F0F0F0' // Sets the background color for the entire modal
      padding='20px' // Sets the padding for the entire modal
      borderStyle='1px solid black' // Sets the border style for the entire modal
      borderRadius={15} // Sets the border radius for the entire modal
      fontSize={30} // Sets the font size for the entire modal
      fontFamily='Arial, sans-serif' // Sets the font family for the entire modal
      fontSizeTitle={28} // Sets the font size for the title
      fontFamilyTitle='Times New Roman, serif' // Sets the font family for the title
      backgroundColorTitle='#E0E0E0' // Sets the background color for the title
      borderStyleTitle='1px solid gray' // Sets the border style for the title
      borderRadiusTitle={5} // Sets the border radius for the title
      fontSizeButton={20} // Sets the font size for the buttons
      fontFamilyButton='Verdana, sans-serif' // Sets the font family for the buttons
      paddingButton='8px' // Sets the padding for the buttons
      borderStyleButton='1px solid #FFA500' // Sets the border style for the buttons
      widthButton='120px' // Sets the width for the buttons
      heightButton='40px' // Sets the height for the buttons
      marginButton='0 10px' // Sets the margin for the buttons
      margin='0 auto' // Sets the margin for the entire modal
    />       
    )
}


