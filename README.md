![Build](https://github.com/hack2020team/pe-fe/workflows/Build/badge.svg?branch=master)

# YouLearn - Front-End
YouLearn - Taking personalized learning to another level. 
## Basics

YouLearn is a web tool for personalised education. It is especially developed with A.I. integration in mind, enabling the connection to websocket for sending live webcam ('sensor') data and receiving events based on that data - e.g. "User is not paying attention" or "User seemes very interested". Based on those events we can dynamically select the Videos that the User is seeing. We also feature after each video, which enable us to once again differentiate between students interest and assign them e.g. a more difficult video or let them repeat the previous video if they failed. Furthermore we offer the ability to enhance pre recorded lectures with an autoscrolling transcript as well as a chat which can be used to contact tutors for example.


## Functionality
- Live scrolling lecture script
- Intermitant quizzes that check study progress and attention
- Attention detection using the users web cam
- Display suggestion for a "Deep Dive" when the user seems interested *
- Chat function enabeling direct connection to e.g. tutors
`*` interest detection using ML has not been fully implemented


## Testing 
A [Live Demo](https://youlearn.kontr.io) is available.
The lectures are filled with dummy data, but most functionality can be tested:
e.g. Quizzes, Transcripts, Attention Detection

The attention detection uses the AI integration to notice when the user looks away and offers actions accordingly.

Further options are available through the 'debug' options in the top left corner.

## Further Info
[Devpost](https://devpost.com/software/youlearn-front-end)
[Live Demo](https://youlearn.kontr.io)
