import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ScrollArea from '@xico2k/react-scroll-area';



export default class Script extends React.Component {

    constructor(props) {
        super(props);
        this._scrollControl = React.createRef();
        this.state = {
            readyInfo: false,
            readyScript: false,
            info: null,
            script: null,
            videoId: props.videoId
        };
    }

    componentDidUpdate= () => {
        this._scrollControl.current.triggerScroll();
        let scrollDistance = this._innerHeight * this.props.scrollPercentage;
        this._scrollControl.current.goToPos(scrollDistance, 400);
    }

    componentWillReceiveProps(props, prevProps) {
        if (this.props.videoId !== this.state.videoId) {
        fetch(this.props.source + "i" + this.props.videoId + ".json")
            .then(response => response.json())
            .then(d => this.setState({
                readyInfo: true,
                readyScript: this.state.readyScript,
                info: d,
                script: this.state.script,
                videoId: this.props.videoId
            }));



        fetch(this.props.source + "s" + this.props.videoId + ".json")
            .then(response => response.json())
            .then(d => this.setState({
                readyInfo: this.state.readyInfo,
                readyScript: true,
                info: this.state.info,
                script: d,
                videoId: this.props.videoId
            }));}
    }



    render() {
        return (<div >
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Lecture Info</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
        {(this.state.readyInfo) ? Object.keys(this.state.info.meta).map((e, i) => {return (<p>{e}: {this.state.info.meta[e]}</p>)}) : "Loading"}
            </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Script</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ScrollArea height="300px" ref={this._scrollControl} onScroll={(e) => {this._innerHeight = e.innerHeight}}>
                    {(this.state.readyScript) ? this.state.script.script : "Loading"}

                    </ScrollArea>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>)
    }

};
