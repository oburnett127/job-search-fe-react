import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from './App';

const rootElement = document.getElementById('root');

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
      </QueryClientProvider>
    </React.StrictMode>,
    rootElement
);
