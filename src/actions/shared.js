import { getInitialData } from '../utils/wyrAPI';
import { receiveUsers, addQuestionToUser, addAnswerToUser } from './users';
import { receiveQuestions, addQuestion, addAnswerToQuestion } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading';
import { saveQuestion, saveQuestionAnswer } from '../utils/wyrAPI';

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      });
  };
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      author: authUser,
      optionOneText,
      optionTwoText,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(authUser, question.id));
      })
      .then(() => dispatch(hideLoading()));
  }
}

export function handleSaveAnswer (question, answer) {
  return (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(showLoading());

    return saveQuestionAnswer({
      authUser: authUser,
      qid: question.id,
      answer,
    })
      .then(() => {
        dispatch(addAnswerToQuestion(question.id, answer, authUser));
        dispatch(addAnswerToUser(authUser, question.id, answer));
      })
      .then(() => dispatch(hideLoading()));
  }
}
