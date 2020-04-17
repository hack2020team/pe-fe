import React from 'react';
import QuizAnswer from './QuizAnswer'
import { withFormik } from "formik";
import { Paper,Box, Container } from '@material-ui/core';

class QuizQuestion extends React.Component {

    render() {
        return (
            
            <Box component="span" m={1}>
                <Paper variant="outlined">
                    <label>{this.props.data.title}</label><br />
                    {Object.keys(this.props.data.answers).map((answer, index) => (
                        <QuizAnswer values={this.props.sup_props.values}
                            text={this.props.data.answers[answer]}
                            onChange={() => this.props.sup_props.setFieldValue(this.props.index, this.props.index + "-" + answer)}
                            id={answer}
                            questionIndex={this.props.index} />
                    ))}
                    {this.props.sup_props.errors[this.props.index] ? <div><p>{this.props.sup_props.errors[this.props.index]} <small>{this.props.data.reason}</small></p></div> : null}
                </Paper>
            </Box>
        )
    }
}

export default QuizQuestion;