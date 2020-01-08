import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class HotKeys extends Component {
  constructor(props) {
    super(props);
  }

  keyPressed = (event) => {
    const {
      groupsAllIds: groupIds,
      questionsAllIds: questionIds,
      formSlug: formSlugFromPath,
      groupSlug: groupSlugFromPath,
      questionSlug: questionSlugFromPath
    } = this.props;

    switch(event.keyCode) {
      case 37: { // LEFT ARROW KEY
        const currentGroupIndex = groupIds.findIndex(groupSlug => groupSlug === groupSlugFromPath);
        if (currentGroupIndex > 0) {
          return this.props.push(`/app/f/${formSlugFromPath}/g/${groupIds[currentGroupIndex - 1]}`);
        } else {
          const totalGroups = groupIds.length
          const prevGroup = groupIds[(currentGroupIndex+totalGroups-1)%totalGroups]
          return this.props.push(`/app/f/${formSlugFromPath}/g/${prevGroup}`);
        }
      }
      case 38: { // UP ARROW KEY
        const currentQuestionIndex = questionIds.findIndex(questionSlug => questionSlug === questionSlugFromPath);
        const currentGroupIndex = groupIds.findIndex(groupSlug => groupSlug === groupSlugFromPath);
        if (currentQuestionIndex > 0) {
          return this.props.push(`/app/f/${formSlugFromPath}/g/${groupSlugFromPath}/q/${questionIds[currentQuestionIndex - 1]}`);
        } else {
          const totalGroups = groupIds.length
          const prevGroup = groupIds[(currentGroupIndex+totalGroups-1)%totalGroups]
          return this.props.push(`/app/f/${formSlugFromPath}/g/${prevGroup}?isLast=true`);
        }
      }
      case 39: { // RIGHT ARROW KEY
        const currentGroupIndex = groupIds.findIndex(groupSlug => groupSlug === groupSlugFromPath);
        if (currentGroupIndex < groupIds.length - 1) {
          return this.props.push(`/app/f/${formSlugFromPath}/g/${groupIds[currentGroupIndex + 1]}`);
        } else {
          const totalGroups = groupIds.length
          const nextGroup = groupIds[(currentGroupIndex+totalGroups+1)%totalGroups]
          return this.props.push(`/app/f/${formSlugFromPath}/g/${nextGroup}`);
        }
      }
      case 40: { // DOWN ARROW KEY
        const currentQuestionIndex = questionIds.findIndex(questionSlug => questionSlug === questionSlugFromPath);
        const currentGroupIndex = groupIds.findIndex(groupSlug => groupSlug === groupSlugFromPath);
        if (currentQuestionIndex < questionIds.length - 1) {
          return this.props.push(`/app/f/${formSlugFromPath}/g/${groupSlugFromPath}/q/${questionIds[currentQuestionIndex + 1]}`);
        } else {
          const totalGroups = groupIds.length
          const nextGroup = groupIds[(currentGroupIndex+totalGroups+1)%totalGroups]
          return this.props.push(`/app/f/${formSlugFromPath}/g/${nextGroup}`);
        }
      }
    }
  }
    //38 //up arrow
    //40 down arrow
    // if (event.keyCode === 37) { // left arrow
    //   event.preventDefault();
    //   console.log('PRESSED: ',event.keyCode);
      // const currentGroupIndex = form.groups.allIds.findIndex(groupSlug => groupSlug === groupSlugFromPath);
      // if (currentGroupIndex > 0) {
      //   this.props.push(form.groups.allIds[currentGroupIndex - 1]);
      //   this.refs[form.groups.allIds[currentGroupIndex - 1]].current.scrollIntoView({
      //     behavior: 'smooth',
      //     block: 'center',
      //   });
      // }
    // }
    // if (event.keyCode === 39) { // right arrow
    //   event.preventDefault();
    //   console.log('PRESSED: ',event.keyCode);
      // const currentGroupIndex = form.groups.allIds.findIndex(groupSlug => groupSlug === groupSlugFromPath);
      // if (currentGroupIndex < form.groups.allIds.length - 1) {
      //   this.props.push(form.groups.allIds[currentGroupIndex + 1]);
      //   this.refs[form.groups.allIds[currentGroupIndex + 1]].current.scrollIntoView({
      //     behavior: 'smooth',
      //     block: 'center',
      //   });
      // }
  //   }
  // }

  componentDidMount(){
    document.addEventListener("keydown", this.keyPressed, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default withRouter(HotKeys);
