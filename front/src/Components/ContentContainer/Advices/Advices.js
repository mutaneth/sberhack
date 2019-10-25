import React from 'react';
import StoryPoint from "./StoryPoint";
import PullRequests from "./PullRequests";
import TrainingCourse from "./TrainingCourse";
import Defect from "./Defect";
import EditsInConfluence from "./EditsInConfluence";

export default function Advices() {
    return(
        <div className={'Notes-Container'}>

            <div className={'NotesList-Container'}>
                <StoryPoint/>
                <PullRequests/>
                <Defect/>
            </div>
                <div className={'NewNote-Container'}>
                <TrainingCourse/>
                <EditsInConfluence/>
            </div>
        </div>
    )
}
