import { useMemo } from "react";

export const useConstructor = (constructor:Function) => {
   useMemo(()=>{
      constructor();
   },[])
}

