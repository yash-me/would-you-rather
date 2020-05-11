let users = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: 'data:image/jpeg;base64,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',
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionTwo',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatarURL: 'https://miro.medium.com/max/3150/1*vU4NFEffXFZc77PVSAu6tg.jpeg',
      answers: {
        "vthrdm985a262al8qx3do": 'optionOne',
        "xj352vofupe1dqz9emx13r": 'optionTwo',
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
      id: 'johndoe',
      name: 'John Doe',
      avatarURL: 'https://bluerailroad.files.wordpress.com/2009/06/435px-john_doe1.jpg?w=584',
      answers: {
        "xj352vofupe1dqz9emx13r": 'optionOne',
        "vthrdm985a262al8qx3do": 'optionTwo',
        "6ni6ok3ym7mf1p33lnez": 'optionTwo'
      },
      questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
  }
  
  let questions = {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['sarahedo'],
        text: 'have horrible short term memory',
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory'
      }
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: '6ni6ok3ym7mf1p33lnez',
      author: 'johndoe',
      timestamp: 1468479767190,
      optionOne: {
        votes: [],
        text: 'become a superhero',
      },
      optionTwo: {
        votes: ['johndoe', 'sarahedo'],
        text: 'become a supervillain'
      }
    },
    "am8ehyc8byjqgar0jgpub9": {
      id: 'am8ehyc8byjqgar0jgpub9',
      author: 'sarahedo',
      timestamp: 1488579767190,
      optionOne: {
        votes: [],
        text: 'be telekinetic',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'be telepathic'
      }
    },
    "loxhs1bqm25b708cmbf3g": {
      id: 'loxhs1bqm25b708cmbf3g',
      author: 'tylermcginnis',
      timestamp: 1482579767190,
      optionOne: {
        votes: [],
        text: 'be a front-end developer',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'be a back-end developer'
      }
    },
    "vthrdm985a262al8qx3do": {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['tylermcginnis'],
        text: 'find $50 yourself',
      },
      optionTwo: {
        votes: ['johndoe'],
        text: 'have your best friend find $500'
      }
    },
    "xj352vofupe1dqz9emx13r": {
      id: 'xj352vofupe1dqz9emx13r',
      author: 'johndoe',
      timestamp: 1493579767190,
      optionOne: {
        votes: ['johndoe'],
        text: 'write JavaScript',
      },
      optionTwo: {
        votes: ['tylermcginnis'],
        text: 'write Swift'
      }
    },
  }
  
  function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  
  export function _getUsers () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...users}), 1000)
    })
  }
  
  export function _getQuestions () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...questions}), 1000)
    })
  }
  
  function formatQuestion ({ optionOneText, optionTwoText, author }) {
    return {
      id: generateUID(),
      timestamp: Date.now(),
      author,
      optionOne: {
        votes: [],
        text: optionOneText,
      },
      optionTwo: {
        votes: [],
        text: optionTwoText,
      }
    }
  }
  
  export function _saveQuestion (question) {
    return new Promise((res, rej) => {
      const authUser = question.author;
      const formattedQuestion = formatQuestion(question);
  
      setTimeout(() => {
        questions = {
          ...questions,
          [formattedQuestion.id]: formattedQuestion
        }
  
        users = {
          ...users,
          [authUser]: {
            ...users[authUser],
            questions: users[authUser].questions.concat([formattedQuestion.id])
          }
        }
  
        res(formattedQuestion)
      }, 1000)
    })
  }
  
  export function _saveQuestionAnswer ({ authUser, qid, answer }) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        users = {
          ...users,
          [authUser]: {
            ...users[authUser],
            answers: {
              ...users[authUser].answers,
              [qid]: answer
            }
          }
        }
  
        questions = {
          ...questions,
          [qid]: {
            ...questions[qid],
            [answer]: {
              ...questions[qid][answer],
              votes: questions[qid][answer].votes.concat([authUser])
            }
          }
        }
  
        res()
      }, 500)
    })
  }
  