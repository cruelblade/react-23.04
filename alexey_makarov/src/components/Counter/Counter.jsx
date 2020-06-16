import React, {PureComponent} from "react";
import CountTitle from "./CountTitle";
import "./index.css"

let interval = null;

//!!! PureComponent не дает ререндериться, если нет изменений.
class Counter extends PureComponent{
    state ={count:0};

    componentDidMount() {
        //Вызывается монтирование после рендера
        console.log("Component Counter did mount");
        interval = setInterval((()=>{
            console.log("Counter Interval timing 6000 milisec")
            }),6000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component Counter Did update");
    }

    componentWillUnmount() {
        console.log("Component Counter Will UnMount");
        clearInterval(interval);
    }

    // shouldComponentUpdate(prevProps, prevState) {
    //Метод определяет нужно ли ререндерить данный компонет!
    //     return prevProps==this.props;
    // Не дает рендереиться заново данному компоненту, ТАК НЕ ДЕЛАТЬ!!!
    // т.к. сравниваться ссылки и можно много где накосячить и муторно
    // ИСПОЛЬЗУЕМ для классов PureComponent, а для ФУНКЦИЙ memo
    // }

    increment =() => {
        this.setState(({count}) => ({count:count+1}));
    };
    decrement =() => {
        this.setState(({count}) => ({count:count-1}));
    };

    render() {
        //Note: Используем деструкторизацию, чтобы достучаться до свойства count в объекте state
        console.log("Render Counter");
        const {count} = this.state;
        return (
            <div>
                <CountTitle count={count}/>
                <p>{count}</p>
                <span>
                    <button className="button" onClick={this.increment}>+</button>
                    <button className="button"  onClick={this.decrement}>-</button>
                </span>
            </div>
        );
    }
}

export default Counter;