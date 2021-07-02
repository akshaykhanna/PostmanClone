import React from 'react'
import PropTypes from 'prop-types'

function Search({handleSubmit, handleUrlChange, handleMethod, handleJson, url, radioInput, json }) {
    return (
        <form
        name="search-form"
        onSubmit={handleSubmit}>
            <input
            value={url}
            onInput={handleUrlChange}
            placeholder="Request Endpoint Here"/>
            <span>
                <label>
                    <input 
                    type="radio"
					name="method"
					value="GET"
                    checked={radioInput==='GET'}
                    onChange={handleMethod}/>
                    <span>Get</span>
                </label>
                 <label>
                    <input 
                    type="radio"
					name="method"
					value="POST"
                    checked={radioInput==='POST'}
                    onChange={handleMethod}/>
                    <span>Post</span>
                </label>
                 <label>
                    <input
                    type="radio"
					name="method"
					value="PUT"
                    checked={radioInput==='PUT'}
                    onChange={handleMethod}/>
                    <span>Put</span>
                </label>
                 <label>
                    <input
                    type="radio"
					name="method"
					value="PATCH"
                    checked={radioInput==='PATCH'}
                    onChange={handleMethod}/>
                    <span>Patch</span>
                </label>
                 <label>
                    <input
                    type="radio"
					name="method"
					value="DELETE"
                    checked={radioInput==='DELETE'}
                    onChange={handleMethod}/>
                    <span>Delete</span>
                </label>
            </span>

            <label>
                <span>Raw JSON Request</span>
                <textarea
                value={json}
                aria-label='json-request'
                onInput={handleJson}>
                </textarea>
            </label>
            <button>Submit Request</button>
            
        </form>
    )
}

Search.propTypes = {
    handleSubmit: PropTypes.func.isRequired, 
    handleUrlChange: PropTypes.func.isRequired, 
    handleMethod: PropTypes.func.isRequired, 
    handleJson: PropTypes.func.isRequired, 
    url: PropTypes.string.isRequired, 
    radioInput: PropTypes.string.isRequired, 
    json: PropTypes.string.isRequired
}

export default Search


