import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Auth/Login';
import RoleList from './Components/Roles/RoleList';
import ErrorPage from './error-page';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { setContext } from '@apollo/client/link/context';
import theme from './theme';
import '@fontsource/itim'
import { offsetLimitPagination } from '@apollo/client/utilities';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/roles",
    element: <RoleList/>,
    errorElement: <ErrorPage/>
  },
]);

const httpLink = createHttpLink({
  uri: 'http://127.0.0.1:8000/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          feed: offsetLimitPagination()
        }
      }
    }
  }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <RouterProvider router={router}>
          <App/>
        </RouterProvider>
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
