# **Modal-confirm**
A library of React components created using `create-react-app`.

## **Installation**

Run the following command:

```bash
npm install modal-confirm
```

## **How to use**

### **To install**
```javascript
`import { ModalConfirm }  from "" `
```

```javascript
import Modal from "../Modal/Modal";

function ModalConfirm() {
  
    const handleCancelClick = () =>{
       alert('Cancel')
    }
    const handleConfirmClick = () =>{
       alert('Confirm')
    }
    return (        
            <Modal title ='Modal Confirmation' handleCancelClick={handleCancelClick} handleConfirmClick={handleConfirmClick}/>        
    )
}
```
### **To personalize**

#### **For Modal**

**Example :**
```
.modal {
    position: absolute;
    top: 40%;
    left: 10%;
    z-index: 1;
    font-size: 40px;
    width: 80%;
    border-radius: 25px;
    text-align: center;
    display: block;
    background-color: rgba(147, 151, 153, 0.8);
    padding: 25px 0;
    border: 2px solid black;
}
```
#### **For Title**

**Example :** 
```
.modal__title {
    width: 100%;
    margin: 0;
    margin-bottom: 50px;
}
```
#### **For Box Buttons**

**Example :** 
```
.modal__box {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
```
#### **For Buttons**

**Example without animation :** 
```
.modal__box__button {
    width: 25%;
    padding: 5px 0;
    font-size: 24px;
    border-radius: 25px;
    border: 2px solid #2B3A3E;
    background-color: #ECECEE;
    transition: 0.5s;
}
```
**Example with animation :** 
```
.modal__box__button {
    width: 25%;
    padding: 5px 0;
    font-size: 24px;
    border-radius: 25px;
    border: 2px solid #2B3A3E;
    background-color: #ECECEE;
    transition: 0.5s;
}

.modal__box__button:hover {
    background-color: #C36244;
    color: #ECECEE;
    border: 2px solid black;
}
```