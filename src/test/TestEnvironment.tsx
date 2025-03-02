import { ReactNode } from "react"
import App from "../App"

type TestEnvironmentProps = {
  children?: ReactNode
}

const TestEnvironment = ({ children }: TestEnvironmentProps) => (
  <div data-testid="test-environment-container" style={{ height: "200vh" }}>
    <App data-testid="app" />
    {children && <div>{children}</div>}
  </div>
)

export default TestEnvironment
