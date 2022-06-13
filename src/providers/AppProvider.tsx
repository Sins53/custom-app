import React from "react";
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import store from '@/store';

import GlobalStyle from "@/theme/globalStyles";
import { ApplicationProvider } from "./ApplicationProvider";
import { ToastNotificationContainer } from "@/components/ToastNotifier/ToastNotifier";

import { useThemeStatus } from "@/hooks/useThemeStatus";

interface AppProviderProps {
  children: React.ReactNode;
}

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       /**
//        * If set to `true`, the query will refetch on window focus if the data is stale.
//        * If set to `false`, the query will not refetch on window focus.
//        * If set to `'always'`, the query will always refetch on window focus.
//        * Defaults to `true`.
//        */
//       refetchOnWindowFocus: false,

//       /**
//        * The time in milliseconds after data is considered stale.
//        * If set to `Infinity`, the data will never be considered stale.
//        */
//       staleTime: 20 * 1000,
//       /**
//        * If `false`, failed queries will not retry by default.
//        * If `true`, failed queries will retry infinitely., failureCount: num
//        * If set to an integer number, e.g. 3, failed queries will retry until the failed query count meets that number.
//        * If set to a function `(failureCount, error) => boolean` failed queries will retry until the function returns false.
//        */
//       retry: false

//       //and many more . you can check docs
//     }
//   }
// });

const AppProvider = ({ children }: AppProviderProps) => {
  const { theme, themeToggler } = useThemeStatus();

  return (
    <>
      {/* <Provider store={store}> */}
      <ThemeProvider theme={theme}>
        {/* <QueryClientProvider client={queryClient}> */}
        <ApplicationProvider themeToggler={themeToggler} theme={theme}>
          <Router>{children}</Router>
        </ApplicationProvider>
        {/* {process.env.NODE_ENV !== "production" && (
              <ReactQueryDevtools position="bottom-right" />
            )} */}
        {/* </QueryClientProvider> */}
        <GlobalStyle />
      </ThemeProvider>
      {/* </Provider> */}
      <ToastNotificationContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick
      />
    </>
  );
};

export default AppProvider;
