import React, {useState, useEffect} from 'react';
import { Card, Feed } from 'semantic-ui-react';
import BitBucketGraph from "../Grafics/BitBucketGraph";
import ProjectList from "./ProjectList";



export default function Sprints(props) {
    const {actualInfoByBoards, allBoards} = props;
    const [page, setPage] = useState(0);

    const handleNextPage = () => {
        page < 2 ? setPage(page + 1) : setPage(0);
    };
    const pagesArr = [{
        id: 0
    },
    {
        id: 1
    },
    {
        id: 2
    },
];

    const pages = pagesArr.map((item, index) => {
        const pageClass = item.id === page ? 'pageCircle activePageCircle' : 'pageCircle';
       return (
           <div className={pageClass}>
           </div>
       )
    });


    return (
        <div className={'ProjectsPage-Container'}>
           <ProjectList
               actualInfoByBoards={actualInfoByBoards}
               allBoards={allBoards}
               page={page}
           />

            <div className={'ProjectList-NextButton-Container'}>
                    <div className={'ProjectList-NextButton'}
                        onClick={handleNextPage}
                    >
                    </div>
            </div>

            <div className={'ProjectList-Pagination-Container'}>
                    <div className={'ProjectList-Pagination'}>
                        {pages}
                    </div>
            </div>
        </div>
    )
}