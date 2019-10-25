import React, {useEffect, useState} from 'react';
import { Modal } from 'semantic-ui-react'
import bb from '../../../images/bb.png';
import j from '../../../images/j.png';
import con from '../../../images/con.png';
import projectArr from './projectArr';
import play from "../../../images/hui.png";
import TaskModal from "./TaskModal";

const ProjectList  = (props) => {
    const {page, actualInfoByBoards, allBoards} = props;
    const [sprintInfo, setSprintInfo] = useState({});

    const [projectsOnPage, setProjectsOnPage] = useState([]);
    const [thisPageArr, setThisPageArr] = useState([]);
    const [projects, setProjects] = useState([]);

    const [modalIsOpen, setModalIsOpen] = useState(false);


    useEffect(() => {
        console.log(actualInfoByBoards, "PROJEQTUE LIST");
        let plen = Math.ceil(actualInfoByBoards.length / 3);
        let newArr = actualInfoByBoards.reduce(function (p, c, i, a) {
            if (i % plen === 0) {
                p.push([]);
            }
            p[p.length - 1][i] = c;
            return p;
        }, []);
        setProjectsOnPage(newArr);
    }, [actualInfoByBoards]);

    useEffect(() => {
        switch (page) {
            case 0:
                setThisPageArr(projectsOnPage[0]);
                break;
            case 1:
                setThisPageArr(projectsOnPage[1]);
                break;
            case 2:
                setThisPageArr(projectsOnPage[2]);
                break;
        }
        if (thisPageArr) {
            const newProjectsOnPage = thisPageArr.map((sprint) => {
                console.log(sprint, 'AAAaa');
                return (
                    <div className={'ProjectList-ProjectCard'}>
                        <div className={'ProjectList-ProjectCard-Header'}>
                            <h1> {sprint.sprint.name} </h1>
                            <h3 className={'ProjectList-ProjectCard-Header-ProjectName'}>{sprint.project.name}</h3>
                        </div>
                        <div className={'ProjectList-ProjectCard-Content'}>
                            <div className={'ProjectList-ProjectCard-Content-InProgress'}>
                                <h2>Задачи в работе:</h2>
                                <div className={'ProjectList-ProjectCard-Content-TaskList'}>
                                    {
                                        sprint.issues.INPROGRESS ?
                                        sprint.issues.INPROGRESS.map((task, index) => {
                                            return (
                                                <Modal
                                                    trigger={
                                                        <div key={task.id}
                                                             className={'ProjectList-ProjectCard-Content-TaskContainer'}>
                                                            <h3>{task.name}</h3>
                                                            <img
                                                                className={'ProjectList-ProjectCard-Content-TaskContainer-PlayButton'}
                                                                src={play} alt={'play_timer'}/>
                                                        </div>
                                                    }
                                                    centered={true}>
                                                    <TaskModal setModalIsOpen={setModalIsOpen} task={task}/>
                                                </Modal>

                                            )
                                        }) : null}

                                </div>
                            </div>

                            <div className={'ProjectList-ProjectCard-Content-ToDo'}>
                                <h2>Поставленные задачи:</h2>
                                <div className={'ProjectList-ProjectCard-Content-TaskList'}>
                                    {
                                        sprint.issues.todo ?
                                        sprint.issues.todo.map((task, index) => {
                                            return (
                                                <Modal trigger={<div key={task.id}
                                                                     className={'ProjectList-ProjectCard-Content-TaskContainer'}>
                                                    <h3>{task.name}</h3>
                                                    <img
                                                        className={'ProjectList-ProjectCard-Content-TaskContainer-PlayButton'}
                                                        src={play} alt={'play_timer'}/>
                                                </div>} centered={true}>
                                                    <TaskModal task={task}/>
                                                </Modal>

                                            )
                                        }) : null}
                                </div>
                            </div>

                        </div>
                    </div>
                    // </Link>
                )
            });
            setProjects(newProjectsOnPage);
        }
    }, [thisPageArr, projectsOnPage, page]);


    return (
        <div className={'ProjectList-Container'}>
            {projects}
        </div>
    );
};

export default ProjectList;