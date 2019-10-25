import React from 'react';
import {Route, Switch} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import Notes from "./Notes/Notes";
import Sprints from "./sprints/Sprints";
import Standart from "./Standart";
import Profile from "./Profile";
import Advices from "./Advices/Advices";
import Shop from "../Shop/Shop";

export default function ContentContainer (props) {
    const {actualInfoByBoards, allBoards} = props;
    return (
        <div className={"ContentContainer"}>
            <Switch>

                {/*<Route exact path={'/'} component={Standart}/>*/}
                <Route exact path={'/sprints'} render={() => <Sprints  actualInfoByBoards={actualInfoByBoards} allBoards={allBoards}/>}/>
                <Route exact path={'/shop'} component={Shop}/>
                <Route exact path={'/advices'} component={Advices}/>
                <Route exact path={'/notes'} component={Notes}/>
                <Route exact path={'/profile'} component={Profile}/>
            </Switch>
        </div>
    );
}
