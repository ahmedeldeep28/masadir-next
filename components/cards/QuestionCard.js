import { useState } from 'react'

function QuestionCard({ data }) {
  const { title, content } = data
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show)
  }
  return (
    <div className="question-card">
      <div className="head" onClick={toggleShow}>
        <i className="fi-rr-angle-small-down icon mr-3"></i>
        <h2 className="m-3 question-title">{title}</h2>
      </div>
      <div className={`content ${show ? 'show' : ''}`}>
        {content}
      </div>
    </div>
  )
}

export default QuestionCard