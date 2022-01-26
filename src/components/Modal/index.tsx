import React,{ReactElement,useState} from "react";

interface defaultProps {
  children:ReactElement
}
export const ModalContext = React.createContext<{setModal:Function} | null>(null); // 用来存储全局装载的Modal组件

const Modal = (props:defaultProps)=>{
     

   const [ modal, updateModal ] = useState<ReactElement | null>(null);
   
   const setModal = (Ele:Function | null,props:any = {})=>{
       
      if(Ele == null){
          updateModal(null);
      }else{
          props.close = ()=>{
            updateModal(null);
          } 
          updateModal(<Ele {...props}/>);
      }

   }
    
  
    return <ModalContext.Provider value={{setModal}}>
       {props.children}
       {modal?modal:null}
    </ModalContext.Provider>;
}

export default Modal;