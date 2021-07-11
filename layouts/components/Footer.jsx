import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid className="d-table">
          <nav className="float-left">
            <ul>
              <li>
                <a href="https://github.com/phungnlg/demo-firebase-nextjs-react-bootstrap" target="_blank">Git</a>
              </li>
              <li>
                <a href="https://phungnlg.github.io" target="_blank">My Website</a>
              </li>
            </ul>
          </nav>
          <p className="copyright float-right">
            &copy; {new Date().getFullYear()}{" - "}
            <a href="https://phungnlg.github.io" target="_blank" className="text-success">
            phungnlg
            </a>
          </p>
        </Container>
      </footer>
    )
  }
}

export default Footer