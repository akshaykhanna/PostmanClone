import React from 'react'
import PropTypes from 'prop-types'

function Results({results}) {
    return (
        <div>
            <h1>Request Results:</h1>
            <pre>{JSON.stringify(results, null, 2)}</pre>
            
        </div>
    )
}

Results.propTypes = {
    results: PropTypes.any.isRequired

}

export default Results


