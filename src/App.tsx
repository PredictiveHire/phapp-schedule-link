import { StyleProvider } from "@ant-design/cssinjs"
import { ApolloProvider } from "@apollo/client"
import { Provider } from "@rollbar/react"
import { App as AntdApp, ConfigProvider } from "antd"
import { RouterProvider } from "react-router-dom"
import Rollbar from "rollbar"

import { ANTD_NOTIFICATION_STACK_THRESHOLD, ENVIRONMENT, ROLLBAR_TOKEN } from "@/constants"
import { router } from "@/router"

import { getApolloClient } from "./apollo"
import { RBErrorBoundary } from "./components/RBErrorBoundary"
import themeJson from "./config/theme.json"

// rollbar configuration
const rollbarConfig: Rollbar.Configuration = {
  accessToken: ROLLBAR_TOKEN,
  enabled: ENVIRONMENT !== "local",
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: ENVIRONMENT,
  payload: {
    environment: ENVIRONMENT,
  },
}

const gqlClient = getApolloClient()

const App = () => {
  return (
    <Provider config={rollbarConfig}>
      <RBErrorBoundary>
        <ApolloProvider client={gqlClient}>
          {/* <AuthProvider> */}
          <ConfigProvider theme={themeJson}>
            {/* change the hashed theme style injection position from document.head to document.body to avoid style overriding by default antd styles injected by vite*/}
            <StyleProvider hashPriority="high" container={document.body}>
              <AntdApp notification={{ stack: { threshold: ANTD_NOTIFICATION_STACK_THRESHOLD } }}>
                <RouterProvider router={router} />
              </AntdApp>
            </StyleProvider>
          </ConfigProvider>
          {/* </AuthProvider> */}
        </ApolloProvider>
      </RBErrorBoundary>
    </Provider>
  )
}

export default App
