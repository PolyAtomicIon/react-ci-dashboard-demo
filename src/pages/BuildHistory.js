import './BuildHistory.scss';
import CommitCard from '../сomponents/CommitCard.js'
import CustomButton from '../сomponents/CustomButton.js'

import BuildHeader from '../сomponents/BuildHeader.js'

function BuildHistory(props) {
    return (
      <>
        <main className="wrapper build-history">
            <BuildHeader 
                title='Awesomedfsdfrepo/oposdfsfsfsdfsdfsdfsdfsdfsdf'
            />
            
            <div className="cards">
                <CommitCard 
                    id="3456" 
                    title="lorem ipsum dolor sit amet" 
                    branchName="master"
                    commitId="98fd45"
                    author="Lex Lop" 
                    date="10.002.02" 
                    time="1 h 20 min" 
                />
                <CommitCard 
                    id="3456" 
                    title="lorem ipsum dolor sit amet" 
                    branchName="master"
                    commitId="98fd45"
                    author="Lex Lop" 
                    date="10.002.02" 
                    time="1 h 20 min" 
                    commitStatus="fail"
                />
                <CommitCard 
                    id="3456" 
                    title="lorem ipsum dolor sit amet" 
                    branchName="master"
                    commitId="98fd45"
                    author="Lex Lop" 
                    date="10.002.02" 
                    time="1 h 20 min" 
                    commitStatus="pending"
                />
            </div>

            <CustomButton 
                title="Show more"
                style="secondary"
                otherStyleOptions="sm-full-width"
            />
        </main>
      </>
    );
  }

export default BuildHistory;
