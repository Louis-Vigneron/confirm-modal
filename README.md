# **Modal-confirm**
A library of React components created using `create-react-app`.


## **Introduction**
The Modal Confirmation Component is a reusable React component that provides a flexible and customizable modal dialog for use in your web applications. This component is designed to allow you to easily create modal dialogs for various use cases, such as confirming user actions or displaying important information.

## **Installation**

Run the following command:

```bash
npm install confirmation-modal
```

## **How to use**

### **To import**

```javascript
import { ModalConfirmation }  from "confirmation-modal" ;

function ModalConfirm() {
  
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
```
### **To personalize**

To use the Modal Confirmation Component, you can import it into your React application and pass various props to customize its appearance and behavior.

#### *Action Props*
You can specify the actions to be taken when the buttons are clicked with the following props:

* **handleCancelClick**: Defines the action when the "Cancel" button is clicked.
* **handleConfirmClick**: Defines the action when the "Confirm" button is clicked.


#### *Styling Props*
The component provides a wide range of styling props to customize the modal, title, and buttons. Here are the available styling props:

### **For Modal**

**Modifiers**

```javascript
    fontFamily: fontFamily, // Specifies the font family for the element.
    fontSize: `${fontSize}px`, // Sets the font size for the element using the `fontSize` variable (in pixels) and adds "px" to the value.
    color: textColor, // Defines the text color for the element.
    backgroundColor: backgroundColor, // Sets the background color for the element.
    display: display, // Determines the display property for the element, controlling how it is rendered.
    padding: padding, // Specifies the padding for the element, creating space around the content inside.
    border: borderStyle, // Sets the border style for the element, defining its border characteristics.
    borderRadius: borderRadius, // Controls the border radius, determining the roundness of the element's corners.
    width: width, // Defines the width of the element.
    height: height, // Specifies the height of the element.
    margin: margin, // Sets the margin for the element, controlling the space around the outside.
    />   
```

### **For Title**

**Modifiers**

```javascript
     fontFamily: fontFamilyTitle, // Specifies the font family for the title.
    fontSize: `${fontSizeTitle}px`, // Sets the font size for the title using the `fontSizeTitle` variable (in pixels) and adds "px" to the value.
    color: textColorTitle, // Defines the text color for the title.        backgroundColor: backgroundColorTitle, // Sets the background color for the title.
    display: displayTitle, // Determines the display property for the title, controlling how it is rendered.
    padding: paddingTitle, // Specifies the padding for the title, creating space around the content inside.
    border: borderStyleTitle, // Sets the border style for the title, defining its border characteristics.
    borderRadius: borderRadiusTitle, // Controls the border radius for the title, determining the roundness of its corners.
    width: widthTitle, // Defines the width of the title.
    height: heightTitle, // Specifies the height of the title.
    margin: marginTitle, // Sets the margin for the title, controlling the space around the outside.
      
```
### **For Buttons**

**Modifiers**

```javascript
    fontFamily: fontFamilyButton, // Specifies the font family for the button.
    fontSize: `${fontSizeButton}px`, // Sets the font size for the button using the `fontSizeButton` variable (in pixels) and adds "px" to the value.
    color: textColorButton, // Defines the text color for the button.
    backgroundColor: backgroundColorButton, // Sets the background color for the button.
    padding: paddingButton, // Specifies the padding for the button, creating space around the content inside.
    border: borderStyleButton, // Sets the border style for the button, defining its border characteristics.
    borderRadius: borderRadiusButton, // Controls the border radius for the button, determining the roundness of its corners.
    width: widthButton, // Defines the width of the button.
    height: heightButton, // Specifies the height of the button.
    margin: marginButton, // Sets the margin for the button, controlling the space around the outside.
    transition: transitionButton, // Defines the transition property for the button, controlling how changes are animated.
          
```

**Example :**
```javascript
   <ModalConfirmation 
      title='Modal Confirmation' 
      handleCancelClick={handleCancelClick} 
      handleConfirmClick={handleConfirmClick} 
      textColor='blue' 
      borderRadiusButton={10} 
      textColorTitle='purple' 
      backgroundColor='#F0F0F0' 
      padding='20px' 
      borderStyle='1px solid black' 
      borderRadius={15} 
      fontSize={30} 
      fontFamily='Arial, sans-serif' 
      fontSizeTitle={28}
      fontFamilyTitle='Times New Roman, serif' 
      backgroundColorTitle='#E0E0E0' 
      borderStyleTitle='1px solid gray' 
      borderRadiusTitle={5} 
      fontSizeButton={20} 
      fontFamilyButton='Verdana, sans-serif' 
      paddingButton='8px' 
      borderStyleButton='1px solid #FFA500' 
      widthButton='120px' 
      heightButton='40px'
      marginButton='0 10px' 
      margin='0 auto' 
    />    
```

### **Animation** 

For animations, simply modify the .modal__box__button:hover class in your css and add your code

**Example :**
```css
.modal__box__button:hover {
    background-color: #C36244;
    color: #ECECEE;
    border: 2px solid black;
}
```