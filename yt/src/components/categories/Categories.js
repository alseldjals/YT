import React, {useState} from 'react';
import './Categories.scss';

const keywords = [
    '전체',
    '먹방',
    '일상',
    '게임',
    '엔터테인먼트',
    '음악',
    'ASMR',
    '요리',
    '스포츠',
    '경제',
    '뉴스',
]
const Categories = () => {

    const [activeElement, setActiveElement] = useState('All')

    const handleClick = value =>{
        setActiveElement(value)
    }

    return (
        <div className='categories'>
           {keywords.map((value, i) => (
              <span
                 onClick={() => handleClick(value)}
                 key={i}
                 className={activeElement === value ? 'active' : ''}>
                 {value}
              </span>
           ))}
        </div>
     )
  }
  

export default Categories;