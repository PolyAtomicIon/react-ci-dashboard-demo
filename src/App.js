import './App.scss';
import CommitCard from './сomponents/CommitCard.js'
import Footer from './сomponents/Footer.js'

import BuildHeader from './сomponents/BuildHeader.js'

function App(props) {
    return (
      <>

      <BuildHeader 
        title='Awesomerepo/opo'
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
        />
        <CommitCard 
          id="3456" 
          title="lorem ipsum dolor sit amet" 
          branchName="master"
          commitId="98fd45"
          author="Lex Lop" 
          date="10.002.02" 
          time="1 h 20 min" 
        />
      </div>
      <Footer />
      </>
    );
  }

export default App;
