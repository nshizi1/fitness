import React, {useState} from 'react';

function Accordion() {

    const [selected, setSelected] = useState(null)

    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

  return (
    <div className='wrapper'>
        <div className="accordion">

            {data.map((item, i) => (
                <div className="item">
                    <div className="title" onClick={() => toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    {/* <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div> */}
                    {/* <div className={selected === i ? 'content show' : 'content'}>{item.response}</div> */}
                    <div className={selected === i ? 'content show' : 'content'}>
                        <div className="card">{item.answer}</div>
                        <div className="card">{item.response}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

const data = [
    {
        question: 'Question One',
        answer: 'Interested in joining.',
        response: 'Interested in joining.'
    },
    {
        question: 'Question Two',
        answer: 'Interested in joining.',
        response: 'Interested in joining.'
    },
    {
        question: 'Question Three',
        answer: 'Interested in joining.',
        response: 'Interested in joining.'
    },
    {
        question: 'Question Four',
        answer: 'Interested in joining.',
        response: 'Interested in joining.'
    },
    {
        question: 'Question Five',
        answer: 'Interested in joining.',
        response: 'Interested in joining.'
    },
]

export default Accordion;