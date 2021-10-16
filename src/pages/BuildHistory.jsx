import './BuildHistory.scss';
import CommitCard from '../сomponents/CommitCard.jsx'
import CustomButton from '../сomponents/CustomButton.jsx'

import play from '../assets/icons/play.png'
import settings from '../assets/icons/settings.png'

import {Link} from "react-router-dom";
import Header from '../сomponents/Header.jsx'

import {useState} from 'react'

function BuildHistory(props) {

    const [isLoading, setIsLoading] = useState(false)

    let demoCommitCardInfo = {
        id: 1235,
        title: "lorem ipsum dolor sit amet",
        branchName: "master",
        commitId: "98fd45",
        author: "Lex Lop",
        date: "10.02.02",
        time: "1 h 20 min",
        commitStatus: 'fail'
    }

    const demoCommits = [
        {...demoCommitCardInfo},
        {...demoCommitCardInfo},
        {...demoCommitCardInfo},
    ]

    const [commits, setCommits] = useState(demoCommits)

    const showMore = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false);
            setCommits([...commits, {...demoCommitCardInfo}])
        }, 1000)
    }

    return (
      <>
        <div className="wrapper build-history">
            <Header 
                title='Awesomedfsdfrepo/oposdfsfsfsdfsdfsdfsdfsdfsdf'
            >
                <>
                    <CustomButton 
                        title="Run build"
                        icon={play}
                        backgroundColor='secondary'
                    />
                    <Link to="/settings">
                        <CustomButton 
                            backgroundColor='secondary'
                            icon={settings}
                        />
                    </Link>
                </>
            </Header>
            
            <div className="cards">
                {
                    commits.map((card, index) => 
                        <CommitCard 
                            key={index}
                            id={card.id} 
                            title={card.title} 
                            branchName={card.branchName}
                            commitId={card.commitId}
                            author={card.author}
                            date={card.date}
                            time={card.time} 
                            commitStatus={card.commitStatus}
                        />
                    )
                }
            </div>

            <CustomButton 
                onClick={showMore}
                loading={isLoading}
                title="Show more"
                backgroundColor="secondary"
                otherStyleOptions="sm-full-width"
            />
        </div>
      </>
    );
  }

export default BuildHistory;
