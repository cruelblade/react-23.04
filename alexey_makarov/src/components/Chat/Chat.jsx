import React from "react";
import MessageForm from "../MessageForm/MessageForm";
import Messages from "../Messages/Messages";
import {withStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

const muiStyles = theme => {
    console.log(theme);
    return {
        paper: {
            marginTop: theme.spacing(7),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    };
};

class Chat extends React.Component {

    //Note:Благодаря Proposal не требуется конструктор.
    state = {
        messages:[{text:"Hello", author:"Bot"}],
        isVisible:false,
    }

    toggle = () =>{
        this.setState((prev)=>({
            isVisible:!prev.isVisible
        }));
    }

    addMessage_Deprecated = () => {
        //Note:Устаревашая версия отправки сообщения, работает без формы
        this.setState((prev)=>({
            messages:[...prev.messages, {text:"add",author:"I'm"}]
        }));
        console.log("Send Message v.1")
    }

    addMessage = (eventData) =>{
        //Note: Новая версия сообщения работает при помощи формы
        console.log(`${eventData.text}`)
        this.setState(({messages})=>({messages:[...messages,eventData]}));
        console.log("Send Message v.2")
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const {messages} = this.state;
        if(messages.length%2 === 0){
            setTimeout(()=>{
                this.setState(({messages})=>({
                    messages:[...messages,{text:"Hello", author:"Bot"}]
                }));
            },1000);
        }
    }

    render() {
        //TODO:Замечание Замечание 1.1 (Исправлено) . переменные из this.state и this.props лучше объявлять перед return,
        // так код будет элегантнее смотреться и форматирование по приятнее будет
        const {messages,isVisible} = this.state;
        const {name, classes} = this.props;

        return (<Box /*className={classes.paper}*/ /*className={styles.container}*/>
            <Messages messages={messages}/>
            <MessageForm addMessage={this.addMessage}/>
            {/*<MessageButton run={this.addMessage_Deprecated}/>*/}
            {/*<button onClick={this.toggle}>Visible</button>*/}
            {/*    {isVisible && <Counter/>}*/}
        </Box>);
    }


}

Chat.defaultProps={}

//Note: Обертывание компонента стилями, которые полетят через Props
export default withStyles(muiStyles)(Chat);