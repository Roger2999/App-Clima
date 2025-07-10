import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home/";
export const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </>
  );
};
