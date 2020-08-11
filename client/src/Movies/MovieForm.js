import React, { Component } from 'react';

class MovieForm extends Component{
    state = {
        values: {
            title: '',
            director: '',
            metascore: '',
            stars: []
        }
    };

    render(){
        return(
            <>
                <form onSubmit={handleSubmit}>
                    <section className='form-group'>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            value={this.state.values.title}
                            onChange={handleChange}
                        />
                        <label htmlFor='title'>Title</label>
                    </section>
                </form>
            </>
        )
    }
}