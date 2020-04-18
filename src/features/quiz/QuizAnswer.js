import React from 'react';
import Radio from '@material-ui/core/Radio';

class QuizAnswer extends React.Component {
      constructor(props){
        super(props)
        console.log(this.props)
      }
    render() {

        return (
            <label>
                  <Radio
                    name={this.props.questionIndex + "-" + this.props.id}
                    value={this.props.id}
                    checked={this.props.values[this.props.questionIndex] === this.props.questionIndex + "-" + this.props.id}
                    onChange={this.props.onChange}
                    disabled={this.props.disabled}
                  />{this.props.text}
                </label>
        )
    }
}

export default QuizAnswer;