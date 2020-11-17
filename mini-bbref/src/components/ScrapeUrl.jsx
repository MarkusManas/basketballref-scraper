import React, {Component} from 'react';
import '../css/App.css';

export default class ScrapeUrl extends Component{
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            link: ''
        }

    }

    onSubmit() {
        this.props.SubmitButton(this.state.link);

    }

    onChangeInput = (e) => {
        e.preventDefault();
        this.setState({link: e.target.value});
    }
    
    render() {
        return(
            <form action="#" onSubmit={this.onSubmit}>
                <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                        <input className="form-control form-control-lg" onChange={this.onChangeInput} placeholder={this.props.placeholder} />
                    </div>
                    <div className="col-12 col-md-3">
                        <button type="submit" className="btn btn-block btn-lg btn-primary">Search</button>
                    </div>
                </div>
            </form>

        )
    }
}