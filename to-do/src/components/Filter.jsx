import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className='container-filter'>
        <h2>Filter</h2>
        <div className='main-container'>
            <div className='filter-container'>
                <p>status:</p>
                <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div className='order-container'>
                <p>ordem alfabetica:</p>
                <button className='btn' onClick={() => setSort("ASC")}>ASC</button>
                <button className='btn' onClick={() => setSort("DESC")}>DESC</button>
            </div>
        </div>
    </div>
  )
}

export default Filter