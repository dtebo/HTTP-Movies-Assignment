import React, { Component } from 'react';
import axios from 'axios';

class MovieForm extends Component{
    state = {
        values: {
            title: '',
            director: '',
            metascore: '',
            stars: []
        },
        error: ''
    };

    componentDidMount(){
        const { id } = this.props.match.params;

        axios
            .get('/api/movies')
            .then(res => {
                this.setState({
                    ...this.state,
                    values: {
                        ...res.data
                    }
                });
            })
            .catch(err => {
                console.error('Error: ', err.message);
            });
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            values: {
                ...this.values,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        const { id } = this.props.match.params;

        axios
            .put(`/api/movies/${id}`, this.state.values)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error('Error: ', err.message);
            });
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <section className='form-group'>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            required
                            value={this.state.values.title}
                            onChange={this.handleChange}
                        />
                        <label htmlFor='title'>Title</label>
                    </section>
                    <section className='form-group'>
                        <input
                            type='text'
                            id='director'
                            name='director'
                            required
                            value={this.state.values.director}
                            onChange={this.handleChange}
                        />
                        <label htmlFor='director'>Director</label>
                    </section>
                    <section className='form-group'>
                        <input
                            type='text'
                            id='metascore'
                            name='metascore'
                            required
                            value={this.state.values.metascore}
                            onChange={this.handleChange}
                        />
                        <label htmlFor='metascore'>MetaScore</label>
                    </section>
                    <button>
                        Update
                    </button>
                </form>
            </>
        )
    }
}

export default MovieForm;