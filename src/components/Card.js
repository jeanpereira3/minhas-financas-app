import React from 'react'

const Card = (props) => {

    

    return (
    <div className='card mb-3'>
        <h3 className='card-header'>{props.title}</h3>
        <div className='card-body'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='bs-component'>
                        <form>
                            <fieldset>
                                {props.children}
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card