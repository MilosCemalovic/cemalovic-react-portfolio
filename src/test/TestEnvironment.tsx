import { ReactNode } from "react"
import App from "../App"

type TestEnvironmentProps = {
  children?: ReactNode
}

const TestEnvironment = ({ children }: TestEnvironmentProps) => (
  <div style={{ height: "200vh" }}>
    <App />
    {children && <div>{children}</div>}
  </div>
)

export default TestEnvironment
