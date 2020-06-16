import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Messages from '../../components/Messages';
import { addMessage } from '../../actions/chatsActions';
import { getChatsMessages } from '../../selectors/chatSelectors';
import styles from './Chats.css'

class Chats extends Component {
     state = {
        messages: [ { text: 'Hello', author: 'Bot'}],
    };    
    
    addNewMessage = data => {  
        const {
            addMessage,
            match: { params }
        } = this.props;
        const { chatId } = params;
        addMessage({...data, chatId});
    };

    onChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
      };
    
    onSubmit = (e) => {
        e.preventDefault();
        this.sendMessage();
    };

    sendMessage = () => {
        const {text} = this.state;
        this.addNewMessage({text, author:'Nick'});
        this.setState({'text':''});
    }

    onKeyUP = (event) => {
        if(event.keyCode === 13) {
            this.sendMessage();
        }
    }
    
    render() {
        const { text } = this.state;
        const { messages } = this.props;
        
        return (
            <div className={styles.container}>             
                <Messages messages={ messages } />
                <form className={styles.form} onSubmit={this.onSubmit} onKeyUp={this.onKeyUP}>
                    <textarea
                        className={styles.messageField}
                        name="text" 
                        onChange={this.onChange}
                        value={text}
                    />
                    <Button
                        className={styles.button} 
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Add message
                    </Button>
                </form>
            </div>
            
        );
    }
}

Chats.propTypes = {
    messages: PropTypes.array.isRequired,
}

const mapStateToProps = (store, ownProps) => ({
    messages: getChatsMessages(store, ownProps),
});

Chats.defaultProps = {
    messages: []
}

const mapDispatchToProps = {
    addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);