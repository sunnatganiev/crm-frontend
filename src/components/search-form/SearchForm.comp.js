import { Form, Row, Col } from "react-bootstrap"
import { PropTypes } from 'prop-types'

const SearchForm = ({ handleOnChange, str }) => {
    return (
        <Form>
            <Form.Group as={Row}>
                <Form.Label as={Col} sm='3'>Search:{" "} </Form.Label>
                <Col sm='9'>
                    <Form.Control
                        name="searchStr"
                        placeholder="Search..."
                        onChange={handleOnChange}
                        value={str}
                    />
                </Col>
            </Form.Group>
        </Form>
    )
}

SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
}

export default SearchForm