import { Container, Row, Col, Button } from "react-bootstrap"
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb"
import tickets from '../../assets/data/dummy-tickets.json'
import MessageHistory from "../../components/message-history/MessageHistory.comp"
import UpdateTicket from "../../components/update-ticket/UpdateTicket.comp"
import { useState } from "react"
import { useEffect } from "react"

const ticket = tickets[0]
const Ticket = () => {
    const [message, setMessage] = useState('')

    useEffect(() => { }, [message])

    const handleOnChange = e => {
        setMessage(e.target.value)
    }

    const handleOnSubmit = () => {
        alert('Form submitted')
    }

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Ticket" />
                </Col>
            </Row>
            <Row>
                <Col className="font-weight-bolder text-secondary">
                    <div className="subject">Subject: {ticket.subject}</div>
                    <div className="date">Ticket Opened: {ticket.addedAt}</div>
                    <div className="status">Status: {ticket.status}</div>
                </Col>
                <Col className="text-end">
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <MessageHistory msg={ticket.history} />
                </Col>
            </Row>
            <hr />
            <Row className="mt-5">
                <Col>
                    <UpdateTicket
                        msg={message}
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Ticket