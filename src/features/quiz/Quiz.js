// Render Prop
import React from 'react';
import { Container, Button, Typography } from '@material-ui/core';
import { withFormik } from "formik";
import QuizQuestion from './QuizQuestion';



export default class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            score: 0,
            max_score: 0,
            data: null,
            ready: false
        }
    }

    generateLayout = () => {
        let data = this.state.data;
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

            Object.keys(data.questions).forEach(e => { console.log(e) });
            return (
                <form onSubmit={handleSubmit}>
                    <Typography variant="h4" component="h4">
                        {data.meta.title}

                    </Typography>
                    <Typography variant="p" component="p">
                        <small>By {data.meta.creator} on {data.meta.created}</small>
                    </Typography>
                    {Object.keys(data.questions).map((question, index) => (
                        <QuizQuestion data={data.questions[question]} sup_props={props} index={question} disabled={this.state.completed} />
                    ))}

                    <Button
                        type="button"
                        className="outline"
                        onClick={handleReset}
                        disabled={!dirty || this.state.completed}
                    >
                        Reset
                </Button>
                    <Button type="submit" disabled={this.state.completed} onClick={() => this.props.onSubmit()}>
                        Submit
                </Button>
                    <div>{(this.state.completed) ? "Completed with " + this.state.score + "/" + this.state.max_score + " points" : null}</div>
                    <div>{(this.state.completed) ? <Button variant="contained" color="secondary" onClick={() => this.props.onClose()}>Close</Button> : null}</div>
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
        this.setState(d => this.setState({
            completed: false,
            score: 0,
            max_score: 0,
            data: data,
            ready: true
        }))

    }


    componentDidMount() {
        fetch(this.props.source)
            .then(response => response.json())
            .then(d => this.setState({
                completed: false,
                score: 0,
                max_score: 0,
                data: d,
                ready: false
            })).then(this.generateLayout);
    }

    render() {
        return (<Container>{(this.state.ready) ? <this.EnhancedForm /> : "Loading"}</Container>)
    }
}
