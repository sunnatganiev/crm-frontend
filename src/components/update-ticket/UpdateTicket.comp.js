import { PropTypes } from "prop-types"
import { Form, Button } from "react-bootstrap"

const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <br />
            <Form.Text>Please reply your message here or update the ticket</Form.Text>
            <Form.Control
                name="detail"
                as="textarea"
                row="5"
                value={msg}
                onChange={handleOnChange}
            />
            <div className="text-end mt-3 mb-3">
                <Button variant="info" type="submit" className="text-light">Reply</Button>
            </div>
        </Form>
    )
}

UpdateTicket.propTypes = {
    msg: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
}

export default UpdateTicket