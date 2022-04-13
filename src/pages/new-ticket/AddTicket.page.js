import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import AddTicketForm from "../../components/add-ticket-form/AddTicketForm.comp"
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb"

import { shortText } from "../../utils/validation"

const initFrmData = {
    subject: '',
    issueDate: '',
    detail: ''
}

const initFormError = {
    subject: false,
    issueDate: false,
    detail: false
}
const AddTicket = () => {
    const [formData, setformData] = useState(initFrmData)
    const [formDataError, setFormDataError] = useState(initFormError)

    useEffect(() => {

    }, [formData, formDataError])

    const handleOnChange = e => {
        const { name, value } = e.target

        setformData(prevData => { return { ...prevData, [name]: value } })

    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        setFormDataError(initFormError)
        const isSubjectValid = shortText(formData.subject)


        setFormDataError(prevData => { return { ...prevData, subject: !isSubjectValid } })

        console.log('Form submit request recieved', formData)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm
                        handleOnChange={handleOnChange}
                        formData={formData}
                        handleOnSubmit={handleOnSubmit}
                        formDataError={formDataError}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default AddTicket