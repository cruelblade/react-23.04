import React from "react";
import ReactDOM from "react-dom";
import styles from "../../index.css"

class MessageButton extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <button className={styles.deprecated} onClick={()=>this.props.run()}>Send Message (deprecated)</button>
    };

}


//TODO: Замечание 1.2. такой компонент лучше функцией делать - в работе, есть вопросы
//TODO: ВОПРОС. Не знаю как передать вызов функции в функциональный компонент, все крашиться

// function MessageButton(props) {
//     const run = this.props.run;
//
//     return (<button onClick={run()}>Send Message</button>);
// }

export default MessageButton;