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
            scrollPercentage: props.scrollPercentage
        }
    }

    scollToPercentage = (percentage) => {
        this._scrollControl.current.triggerScroll();
        let scrollDistance = this._innerHeight * percentage;
        console.log(this._innerHeight);
        this._scrollControl.current.goToPos(scrollDistance, 400);
    }

    componentDidUpdate= () => {
        this._scrollControl.current.triggerScroll();
        let scrollDistance = this._innerHeight * this.props.scrollPercentage;
        console.log(this._innerHeight);
        this._scrollControl.current.goToPos(scrollDistance, 400);
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                        <button onClick={() => this.scollToPercentage(50)}>Scroll</button>
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
                        

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed justo velit. Etiam dapibus, libero ac tempor lobortis, arcu odio suscipit nunc, at imperdiet ante quam in arcu. In et purus interdum, imperdiet sem in, pretium risus. Aliquam enim felis, tempus eu suscipit ac, ultrices id velit. Etiam vehicula tristique mi. Aenean auctor, nunc aliquet dapibus pretium, quam tortor tempus ligula, in viverra felis mauris euismod odio. Sed efficitur sapien ut nunc volutpat, vel gravida ante rhoncus. Fusce pharetra erat felis, a volutpat est iaculis ut.

Ut finibus tincidunt justo, posuere vulputate quam suscipit et. Fusce tellus est, vehicula quis euismod a, rutrum ac dui. Duis malesuada varius rutrum. Curabitur laoreet non ante sit amet dignissim. Donec eu orci fringilla, vulputate nisi in, sollicitudin orci. Aliquam erat volutpat. Proin eget massa ut velit sollicitudin convallis et quis orci.

Mauris dignissim suscipit est, et varius risus sollicitudin non. Sed id vulputate libero, et placerat est. Suspendisse lorem nibh, venenatis eget tempus ac, porttitor at justo. Sed ac sollicitudin nisl, quis interdum dolor. Aenean ipsum eros, porttitor a aliquet quis, varius ac libero. Morbi placerat vitae elit vel faucibus. Aliquam pretium sodales ligula, non vehicula felis venenatis ut. Nam tempor dapibus velit vitae egestas. Fusce vel aliquam nunc, non porttitor lacus. Etiam sit amet dui a ante aliquet interdum.

Vestibulum aliquet id dolor eu auctor. Fusce imperdiet quam non rhoncus imperdiet. Donec et commodo orci, id condimentum erat. Donec ac purus eget lacus ullamcorper dictum in faucibus nisi. Cras elementum facilisis neque sit amet convallis. Vestibulum ultricies justo in pulvinar consectetur. Nunc in leo ut ante pharetra interdum. Aenean tempor pulvinar dui, nec porttitor odio consequat eu. Aliquam ullamcorper, nisi in eleifend porttitor, urna augue finibus eros, vel aliquam purus enim vitae eros. Donec ex sapien, viverra ut sagittis in, ullamcorper at ligula. Suspendisse id varius tortor. Sed dui ipsum, lobortis a metus sit amet, consectetur auctor ipsum. Proin consectetur eros quis congue lacinia. Integer auctor ligula non est venenatis, gravida eleifend orci dictum. Suspendisse volutpat sollicitudin risus non auctor. Nulla facilisi.

Pellentesque sed rutrum tellus. Nam vestibulum consectetur est eget consequat. Vivamus rhoncus velit eu nulla mattis tincidunt. Integer orci nulla, congue ut faucibus sit amet, efficitur at nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque justo justo, tincidunt vel cursus sit amet, accumsan eu sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet congue ipsum, sed mattis orci. Proin leo diam, porttitor sit amet consectetur ut, viverra ut sem. Proin lectus nisi, rhoncus vitae eleifend eu, varius sit amet turpis. Aenean ac tempor ex, eget pellentesque orci. Morbi commodo, turpis id lobortis malesuada, neque mauris porta magna, id venenatis ante est vel purus. Duis nec enim diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque lobortis eu nisl eget ultricies. 
                    </ScrollArea>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>)
    }

};
