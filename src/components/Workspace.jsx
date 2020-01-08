import React, { Component } from 'react';
import Catalog from '../containers/catalog_container';
import NavbarLeft from '../containers/navbar_left_container';
import NavbarTop from '../containers/navbar_top_container';
import FormPanel from '../containers/form_panel_container';
import Wizard from '../containers/wizard_container';
import HotKeys from '../containers/hot_keys_container';
import EvidenceSidebar from '../containers/evidence_sidebar_container';
import { Route, withRouter, Switch } from 'react-router-dom';

class Workspace extends Component {

  constructor(props) {
    super(props);

    this.state = {
      focusedQuestionSlug: null,
    };

    this.refs = {};
  }

  // getQuestionBlockClasses = (questionSlug, question) => {
  //   let classes = '';
  //
  //   if (this.state.focusedQuestionSlug == questionSlug) {
  //     classes = `${classes} is-focus`;
  //   }
  //
  //   const oneEvidence = idx(question, _ => _.evidence);
  //
  //   if (!oneEvidence) {
  //     return classes;
  //   }
  //
  //   const expandedEvidence = this.props.evidences[oneEvidence];
  //
  //   if (!expandedEvidence || expandedEvidence.isLoading) {
  //     return `${classes} is-loading`;
  //   }
  //
  //   if (expandedEvidence.isLoadError) {
  //     return `${classes} is-error`;
  //   }
  //
  //   if (expandedEvidence.isEvidence) {
  //     return `${classes} is-evidence`
  //   }
  //
  //   return classes;
  // }
  //
  // getRefs = (questions) => {
  //   return questions.reduce((acc, questionSlug) => {
  //     acc[questionSlug] = React.createRef();
  //     return acc;
  //   }, {});
  // }
  //
  // scrollToQuestion = (questionSlug, behavior) => {
  //   this.refs[questionSlug].current.scrollIntoView({
  //     behavior: behavior || 'auto',
  //     block: 'center',
  //   });
  // }
  //
  // focusQuestion = (questionSlug) => {
  //   this.setState({
  //     focusedQuestionSlug: questionSlug
  //   });
  //   return this.props.focusQuestion(questionSlug);
  // }
  //
  // handleQuestionClick = (questionSlug, behavior) => {
  //   this.scrollToQuestion(questionSlug, behavior);
  //   return this.focusQuestion(questionSlug);
  // }
  //
  // getInitialValues = (questions) => {
  //   const initialValues = questions.allIds.reduce((acc, q) => {
  //     acc[q] = questions.byId[q].value;
  //     return acc;
  //   }, {});
  //   console.log('initialValues: ',initialValues);
  //   return initialValues;
  // }
  //
  // keyPressed = (event) => {
  //   const { questions, groups, formSlug, groupSlug } = this.props;
  //
  //   if (event.keyCode === 38) { // up arrow
  //     event.preventDefault();
  //     const focusedQuestionIndex = questions.allIds.findIndex(questionSlug => questionSlug === this.state.focusedQuestionSlug);
  //     if (focusedQuestionIndex > 0) { // Go to previous question
  //       const focusedQuestionSlug = questions.allIds[focusedQuestionIndex - 1];
  //       this.focusQuestion(focusedQuestionSlug);
  //       return this.scrollToQuestion(focusedQuestionSlug, 'smooth');
  //     }
  //     if (focusedQuestionIndex === 0){ // Go to last question in previous group
  //       const totalGroups = groups.length;
  //       const currentGroupIndex = groups.findIndex(group => group === groupSlug);
  //       const prevGroup = groups[(currentGroupIndex+totalGroups-1)%totalGroups];
  //       return this.props.push(`/app/${formSlug}/${prevGroup}?pos=end`);
  //     }
  //   }
  //   if (event.keyCode === 40) { // down arrow
  //     event.preventDefault();
  //     const focusedQuestionIndex = questions.allIds.findIndex(questionSlug => questionSlug === this.state.focusedQuestionSlug);
  //     if (focusedQuestionIndex < questions.allIds.length - 1) {
  //       const focusedQuestionSlug = questions.allIds[focusedQuestionIndex + 1];
  //       this.focusQuestion(focusedQuestionSlug);
  //       return this.scrollToQuestion(focusedQuestionSlug, 'smooth');
  //     }
  //     if (focusedQuestionIndex === questions.allIds.length - 1) {
  //       const totalGroups = groups.length;
  //       const currentGroupIndex = groups.findIndex(group => group === groupSlug);
  //       const nextGroup = groups[(currentGroupIndex+totalGroups+1)%totalGroups];
  //       return this.props.push(`/app/${formSlug}/${nextGroup}`);
  //     }
  //   }
  // }

  componentDidMount(){
    // document.addEventListener("keydown", this.keyPressed, false); //Need form to exist before keyPressed can be called.

    // const {
    //   formSlug,
    //   groupSlug: groupSlugFromPath,
    //   pos,
    // } = this.props;

    const { formSlug } = this.props.match.params;

    console.log("FORM SLUG...",formSlug);
    console.log('this.props!!: ',this.props);

    // console.log('groupSlugFromPath: ',groupSlugFromPath);

    // console.log('groups: ',groups);

    if (formSlug) {
      return this.props.getForm(formSlug)
        .then(() => {
          // console.log("FORM: ",form);
          // const groups = [];
          // const questions = {};
          // if (!groups.includes(groupSlugFromPath)) {
          //   // EXPLAIN: if groupSlug in path doesn't match with possible groupSlugs,
          //   // default to the first groupSlug in groups
          //   return this.props.push(`/app/${formSlug}/${groups[0]}`);
          // }
          // this.refs = this.getRefs(questions.allIds);
          //
          // console.log('this.refs: ',this.refs);
          //
          // return this.setState({
          //   focusedQuestionSlug: (
          //     pos === 'end'
          //     ?
          //     questions.allIds[questions.allIds.length - 1]
          //     :
          //     questions.allIds[0]
          //   )
          // });
        })
        .catch(error => {
          //TODO just handle catch in .getForm action and open Catalog via props
        })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { formSlug } = this.props.match.params;
    const { formSlug : prevFormSlug } = prevProps.match.params;

    // const {
    //   formSlug,
    //   groupSlug : groupSlugFromPath,
    //   pos,
    //   questions,
    //   groups,
    //   isLoading
    // } = this.props;

    if (formSlug !== prevFormSlug) {
      if (formSlug) {
        return this.props.getForm(formSlug)
        // return this.props.resetForm()
          // .then(() => this.props.getForm(formSlug))
          // .then((form) => {
          //   return !groups.includes(groupSlugFromPath) ? (
          //     this.props.push(`/app/${formSlug}/${groups[0]}`)
          //   ) : (
          //     this.props.push(`/app/${formSlug}/${groupSlugFromPath}`)
          //   )
          // })
      }
    }
  }

  // componentWillUnmount(){
  //   document.removeEventListener("keydown", this.keyPressed, false);
  // }

  updateValues = () => {
    console.log('clicked...');
    this.props.testUpdateValue();
  }

  render() {
    const { formIsLoaded } = this.props;

    // const initialValues = questions.allIds.reduce((acc, q) => {
    //   acc[q] = questions.byId[q].value;
    //   return acc;
    // }, {});

    // const initialValues = {};

    // const validationSchema = Yup.object().shape({
    //   question1: Yup.string()
    //     .required('Required'),
    //   question2: Yup.string()
    //     .required('Required')
    // });

    return (
      <div className="form-builder">
        <NavbarTop/>
        <div>
          <button onClick={this.updateValues}>Update Value...</button>
        </div>
        <div className="workspace">
          <NavbarLeft/>
          <Wizard/>
          <EvidenceSidebar/>
          <Switch> {/* NOTE: switch here because we want to *disable* hotkeys if catalog is open */}
            <Route exact path="/app/catalog">
              <Catalog/>
            </Route>
            { formIsLoaded &&
              <Route path={`/app/f/:formSlug/g/:groupSlug/q/:questionSlug`}>
                <HotKeys/>
              </Route>
            }
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(Workspace)
