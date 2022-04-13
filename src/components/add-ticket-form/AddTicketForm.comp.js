import { Form, Button, Row, Col } from "react-bootstrap"
import PropTypes from 'prop-types'


const AddTicketForm = ({ handleOnSubmit, handleOnChange, formData, formDataError }) => {
    console.log(formData)
    return (
        <Form className="mt-5 add-new-ticket bg-light p-5" autoComplete="off" onSubmit={handleOnSubmit}>
            <h1 className="text-info text-center mb-5">Add New Ticket</h1>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Subject</Form.Label>
                <Col sm={9} className="mb-5">
                    <Form.Control
                        name="subject"
                        placeholder="Subject"
                        required
                        onChange={handleOnChange}
                        value={formData.subject}
                        className="mb-1"
                    />
                    <Form.Text className="text-danger">{formDataError.subject && "Subject is required"}</Form.Text>

                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Issue Found</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="date"
                        name="issueDate"
                        placeholder="Passwrord"
                        required
                        value={formData.issueDate}
                        onChange={handleOnChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group>
                <Form.Label>Details</Form.Label>
                <Form.Control
                    as="textarea"
                    name="detail"
                    placeholder="Details"
                    required
                    value={formData.detail}
                    onChange={handleOnChange}
                    rows="5"
                />
            </Form.Group>
            <Button type="submit" variant="info" className="d-block text-light">Login</Button>
        </Form>
    )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    formDataError: PropTypes.object.isRequired,
}

export default AddTicketForm