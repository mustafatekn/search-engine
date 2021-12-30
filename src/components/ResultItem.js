import React from 'react'

export default function ResultItem({res}) {
    return (
        <div className="result">
            <div className="resultHeader">
            <h5 className="resultLocation">{res[4]} - {res[5]}</h5>
            <h5 className="resultEmail">{res[2]}</h5>
            </div>
            <small className="resultPerson">{res[0]} - {res[3].split('/')[2]}</small>
        </div>
    )
}
