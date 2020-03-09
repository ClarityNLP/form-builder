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
      activityId: activityIdFromPath,
      groupSlug: groupSlugFromPath,
      questionSlug: questionSlugFromPath
    } = this.props;

    switch(event.keyCode) {
      case 37: { // LEFT ARROW KEY
        event.preventDefault();
        const currentGroupIndex = groupIds.findIndex(groupSlug => groupSlug === groupSlugFromPath);
        if (currentGroupIndex > 0) {
          return this.props.push(`/app/a/${activityIdFromPath}/g/${groupIds[currentGroupIndex - 1]}`);
        } else {
          const totalGroups = groupIds.length
          const prevGroup = groupIds[(currentGroupIndex+totalGroups-1)%totalGroups]
          return this.props.push(`/app/a/${activityIdFromPath}/g/${prevGroup}`);
        }
      }
      case 38: { // UP ARROW KEY
        event.preventDefault();
        const currentQuestionIndex = questionIds.findIndex(questionSlug => questionSlug === questionSlugFromPath);
        const currentGroupIndex = groupIds.findIndex(groupSlug => groupSlug === groupSlugFromPath);
        if (currentQuestionIndex > 0) {
          return this.props.push(`/app/a/${activityIdFromPath}/g/${groupSlugFromPath}/q/${questionIds[currentQuestionIndex - 1]}?scrollBehavior=smooth`);
        } else {
          const totalGroups = groupIds.length
          const prevGroup = groupIds[(currentGroupIndex+totalGroups-1)%totalGroups]
          return this.props.push(`/app/a/${activityIdFromPath}/g/${prevGroup}?isLast=true`);
        }
      }
      case 39: { // RIGHT ARROW KEY
        event.preventDefault();
        const currentGroupIndex = groupIds.findIndex(groupSlug => groupSlug === groupSlugFromPath);
        if (currentGroupIndex < groupIds.length - 1) {
          return this.props.push(`/app/a/${activityIdFromPath}/g/${groupIds[currentGroupIndex + 1]}`);
        } else {
          const totalGroups = groupIds.length
          const nextGroup = groupIds[(currentGroupIndex+totalGroups+1)%totalGroups]
          return this.props.push(`/app/a/${activityIdFromPath}/g/${nextGroup}`);
        }
      }
      case 40: { // DOWN ARROW KEY
        event.preventDefault();
        const currentQuestionIndex = questionIds.findIndex(questionSlug => questionSlug === questionSlugFromPath);
        const currentGroupIndex = groupIds.findIndex(groupSlug => groupSlug === groupSlugFromPath);
        if (currentQuestionIndex < questionIds.length - 1) {
          return this.props.push(`/app/a/${activityIdFromPath}/g/${groupSlugFromPath}/q/${questionIds[currentQuestionIndex + 1]}?scrollBehavior=smooth`);
        } else {
          const totalGroups = groupIds.length
          const nextGroup = groupIds[(currentGroupIndex+totalGroups+1)%totalGroups]
          return this.props.push(`/app/a/${activityIdFromPath}/g/${nextGroup}`);
        }
      }
    }
  }

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
