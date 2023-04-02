// hooks/useSocket.js
import { useEffect, useRef,createContext,useMemo,useContext } from "react";



const useSocket = () => {
  const socketCreated = useRef(false)
  useEffect(() =>{
    if (!socketCreated.current) {
      const socketInitializer = async () => {
        await fetch ('/api/socket')
      }
      try {
        socketInitializer()
        socketCreated.current = true
      } catch (error) {
        console.log(error)
      }
    }
    console.log('socket connected')
  }, []);
};

export default useSocket