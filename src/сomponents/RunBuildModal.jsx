import './RunBuildModal.scss'
import InputField from './InputField.jsx'
import CustomButton from './CustomButton.jsx'
import Modal from 'react-modal';
import {useState, useRef} from 'react'
import { createPortal } from 'react-dom';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
    }
  };

export default function RunBuildModal(props) {

    const [commitHash, setCommitHash] = useState('')
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [isSuggestionsActive, setIsSuggestionsActive] = useState(true)

    const initiateModal = () => {
        commitHashInputField.current.focus()
        setCommitHash('')
        setIsFormSubmitted(false)
        setIsSuggestionsActive(true)
    }

    const inputHandler = (value) => {
        setCommitHash(value)
        setIsSuggestionsActive(true)
    }

    const runBuild = () => {
        setIsFormSubmitted(true)
        setTimeout(() => {
            props.closeModal()
            props.onRunBuilt()
        }, 1000)
    }
    const commitHashInputField = useRef();
      
    let commits = props.commits
    const filteredCommits = (value) => {
        // let's say that it's an API call
        return commits.filter(item => 
            item.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
    }
  
    const onSuggestHandler = (value) => {
        setCommitHash(value)
        setIsSuggestionsActive(false)
    }

    const Suggestions = () => {
        
        let verticalOffset = 44
        let parent = commitHashInputField.current?.parentElement.parentElement
        parent = parent?.getBoundingClientRect()
        let [x, y, width] = [parent?.x, parent?.y, parent?.width]

        return createPortal(
            <div className="suggestions" style={{
                top: y + verticalOffset,
                left: x,
                width
            }}>
                {
                    filteredCommits(commitHash).map((item, index) => (
                        <button
                            className="suggestion"
                            key={index + item} 
                            onClick={() => onSuggestHandler(item)}
                        >
                            {item}
                        </button>
                    ))
                }
            </div>
            , document.body);
    }

    return ( 
        <Modal
            isOpen={props.modalIsOpen}
            onAfterOpen={initiateModal}
            onRequestClose={props.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h3 >New build</h3>
            <p className="text-grey mt-1">Enter the commit hash which you want to build.</p>
            
            <form className="form">
                <InputField 
                    parentRef={commitHashInputField}
                    value={commitHash}
                    onChange={inputHandler}
                    validator={() => !!commitHash}  
                    placeholder='Commit hash'      
                    type='search'
                />
                { isSuggestionsActive && <Suggestions /> }
            </form>
            
            <div className="buttons">
                <CustomButton 
                    title='Run build'
                    disabled={!commitHash}
                    onClick={runBuild}
                    loading={isFormSubmitted}
                    otherStyleOptions="sm-full-width"
                />
                <CustomButton 
                    title='Cancel'
                    onClick={props.closeModal}
                    backgroundColor='secondary'
                    otherStyleOptions="sm-full когда задача стоит в-width"
                />
            </div>

        </Modal>
    );
}

Modal.setAppElement('#root');
