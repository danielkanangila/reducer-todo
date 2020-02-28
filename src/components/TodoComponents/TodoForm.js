import React from 'react';
import CheckBox from '../CheckBox';

class TodoForm extends React.Component {

    handleChange(e){
        this.setState({todo: e.target.value});
        if (this.props.isSearch) {
            this.props.handleInput(e.target.value);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.todo) {
            this.props.handleInput(this.state.todo);
            this.setState({
                todo: ''
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="text-field" type="text"  name="todo" placeholder="Todo" value={this.state.todo} onChange={this.handleChange} />
                {/* <button type="submit">Add</button> */}
                <div className="search-box">
                    <CheckBox toggle={this.props.toggleSearch} value={this.props.isSearch} />
                    Search
                </div>
            </form>
        )
    }
}

export default TodoForm;