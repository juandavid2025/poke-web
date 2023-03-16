import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const sendRequest = useCallback(async (requestConfig, transformFuntion: ()=>void) => {

  // }, [])
};

export default useHttp;
