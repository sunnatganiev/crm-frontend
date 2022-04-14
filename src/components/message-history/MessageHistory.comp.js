import { PropTypes } from 'prop-types'
const MessageHistory = ({ msg }) => {
    return msg ?
        msg.map((row, i) => <div className='message-history mt-4' key={i}>
            <div className="send font-weight-bold text-secondary">
                <div className="sender">{row.messageBy}</div>
                <div className="date">{row.date}</div>
            </div>
            <div className="message">{row.message}</div>
        </div>) : null
}

MessageHistory.propTypes = {
    msg: PropTypes.array.isRequired
}

export default MessageHistory