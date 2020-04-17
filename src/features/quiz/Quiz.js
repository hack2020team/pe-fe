// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Button } from '@material-ui/core';
import { withFormik } from "formik";
import QuizQuestion from './QuizQuestion';



export default class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            score: 0,
            max_score: 0
        }


        let data = require("./template.json");
        console.log(data)

        const MyInnerForm = props => {
            const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
                setFieldValue
            } = props;
            console.log(data.questions)
            Object.keys(data.questions).forEach(e => { console.log(e) });
            return (
                <form onSubmit={handleSubmit}>

                    {Object.keys(data.questions).map((question, index) => (
                        <QuizQuestion data={data.questions[question]} sup_props={props} index={question} />
                    ))}

                    <Button
                        type="button"
                        className="outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >
                        Reset
                </Button>
                    <Button type="submit" disabled={isSubmitting}>
                        Submit
                </Button>
                <div>{(this.state.completed) ? "Completed with " + this.state.score + "/" + this.state.max_score + " points": null}</div>
                </form>
            );
        };


        const validate = values => {
            const errors = {};
            let correct = 0;
            let total = 0;
            console.log(values)
            Object.keys(data.questions).forEach((question, index) => {
                if (values[question] !== question + "-" + data.questions[question].correctAnswer) {
                    errors[question] = 'You answered Incorrectly!';
                    total += parseInt(data.questions[question].value);
                } else {
                    errors[question] = 'Your answer is correct!';
                    correct = correct + parseInt(data.questions[question].value);
                    total += parseInt(data.questions[question].value);
                };
            });
            this.setState({ completed: true, score: correct, max_score: total })
            
            return errors;
        };



        this.EnhancedForm = withFormik({
            validateOnChange: false,
            mapPropsToValues: () => ({ "000": "" }),
            handleSubmit: (values, { setSubmitting, validateForm }) => {
                setTimeout(() => {
                    validateForm();
                    setSubmitting(false);
                }, 1000);
            },
            validate,
            displayName: "BasicForm" // helps with React DevTools
        })(MyInnerForm);
    }

    render() {
        return (<Container><this.EnhancedForm /></Container>)
    }
}
