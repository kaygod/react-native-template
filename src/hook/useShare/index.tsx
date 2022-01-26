import { useModal } from "@/utils/common";
import Share from "@/components/Share";
export const useShare = () => {
   
  const setModal = useModal();

  const showShare = ()=>{
      setModal(Share,{
        close:hideShare
      });
  }

  const hideShare = ()=>{
      setModal(null)
  }

  return [showShare,hideShare];

}

