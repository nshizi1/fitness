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
                        <h2>{item.day}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className={selected === i ? 'content show' : 'content'}>
                        <div className="cards">
                            <div className="card">
                                <p>{item.cardOne[0]}</p>
                                <p>{item.cardOne[1]}</p>
                                <div className="line"></div>
                                <p>{item.cardOne[2]}</p>
                                <p>{item.cardOne[3]}</p>
                            </div>
                            <div className="card">
                                <p>{item.cardTwo[0]}</p>
                                <p>{item.cardTwo[1]}</p>
                                <div className="line"></div>
                                <p>{item.cardTwo[2]}</p>
                                <p>{item.cardTwo[3]}</p>
                            </div>
                            <div className="card">
                                <p>{item.cardThree[0]}</p>
                                <p>{item.cardThree[1]}</p>
                                <div className="line"></div>
                                <p>{item.cardThree[2]}</p>
                                <p>{item.cardThree[3]}</p>
                            </div>
                            <div className="card">
                                <p>{item.cardFour[0]}</p>
                                <p>{item.cardFour[1]}</p>
                                <div className="line"></div>
                                <p>{item.cardFour[2]}</p>
                                <p>{item.cardFour[3]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

const data = [
    {
        day: 'Monday',
        cardOne : ['10:00','cross fit', '60 min', 'ethan bell'],
        cardTwo : ['11:00','pilates', '90 min', 'jenny mcKinney'],
        cardThree : ['12:30','boxing', '120 min', 'michael lee'],
        cardFour : ['14:30','yoga', '90 min', 'annie smith']
    },
    {
        day: 'Tuesday',
        cardOne : ['10:00','cross fit', '60 min', 'ethan bell'],
        cardTwo : ['11:00','pilates', '90 min', 'jenny mcKinney'],
        cardThree : [],
        cardFour : ['14:30','yoga', '90 min', 'annie smith']
    },
    {
        day: 'Wednesday',
        cardOne : ['10:00','cross fit', '60 min', 'ethan bell'],
        cardTwo : ['11:00','pilates', '90 min', 'jenny mcKinney'],
        cardThree : ['12:30','boxing', '120 min', 'michael lee'],
        cardFour : ['14:30','yoga', '90 min', 'annie smith']
    },
    {
        day: 'Thursday',
        cardOne : ['10:00','cross fit', '60 min', 'ethan bell'],
        cardTwo : ['11:00','pilates', '90 min', 'jenny mcKinney'],
        cardThree : ['12:30','boxing', '120 min', 'michael lee'],
        cardFour : ['14:30','yoga', '90 min', 'annie smith']
    },
    {
        day: 'Friday',
        cardOne : ['10:00','cross fit', '60 min', 'ethan bell'],
        cardTwo : ['11:00','pilates', '90 min', 'jenny mcKinney'],
        cardThree : ['12:30','boxing', '120 min', 'michael lee'],
        cardFour : ['14:30','yoga', '90 min', 'annie smith']
    },
    {
        day: 'Saturday',
        cardOne : ['10:00','cross fit', '60 min', 'ethan bell'],
        cardTwo : ['11:00','pilates', '90 min', 'jenny mcKinney'],
        cardThree : ['12:30','boxing', '120 min', 'michael lee'],
        cardFour : ['14:30','yoga', '90 min', 'annie smith']
    },
    {
        day: 'SUnday',
        cardOne : ['10:00','cross fit', '60 min', 'ethan bell'],
        cardTwo : ['11:00','pilates', '90 min', 'jenny mcKinney'],
        cardThree : ['12:30','boxing', '120 min', 'michael lee'],
        cardFour : ['14:30','yoga', '90 min', 'annie smith']
    }
]

export default Accordion;