import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Messages.css'

class Messages extends Component {
    render() {
        const { messages } = this.props;
       
        return (
            <ul className={styles.list}>
                { messages.map(({author,text}, index) => (
                    <li
                        className={cx(styles.item, {
                            [styles.right]: author === "Bot",
                            [styles.left]: author !== "Bot",
                        })}
                        key={index}
                    >
                        {`${author}: ${text}`}
                    </li>
                )) }
            </ul>
        )
    }
}

Messages.propTypes = {
    messages: PropTypes.array.isRequired,
}

export default Messages;