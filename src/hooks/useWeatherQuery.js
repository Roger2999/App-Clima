import { useQuery } from "@tanstack/react-query";

export const useWeatherQuery = (URL_BASE, city, API_KEY) => {
  const fetchApi = async () => {
    if (!city) {
      // No hacer fetch si la ciudad está vacía
      return [];
    }
    const response = await fetch(`${URL_BASE}?q=${city}&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Error en la respuesta", response.status);
    }

    return response.json();
  };
  const {
    data: todos = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["todos", city],
    queryFn: fetchApi,
    staleTime: 60000,
  });

  return {
    isLoading,
    isError,
    error,
    todos,
    fetchApi,
  };
};
