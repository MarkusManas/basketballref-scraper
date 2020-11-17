import React, {Component} from 'react';
import NavBar from './NavBar';
import ScrapeUrl from './ScrapeUrl';
import axios from 'axios';
import cheerio from 'cheerio';

const Title = "Mini-bbref";
//const BBrefScrape = axios.get()
const PlaceHolder = "Enter bbref link"
const config = {
    headers: {"Access-Control-Allow-Origin": "*"}
}

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tables: ''
        }
    }


    UpdateTables = (BBrefUrl) => {
        axios.get(BBrefUrl, config)
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html);
                const StatTables = $('.stats_table');
                console.log(StatTables.length);
                this.setState({
                    tables: BBrefUrl
                });
            })
            .catch(console.error);
    }

    render() {
        
        return(
            <div>
                <div>
                    <NavBar title={Title}/>
                </div>
                <div>
                    <header className="masthead text-white text-center" id="search-div">
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 mx-auto">
                                    <h1 className="mb-5">Get every stats table in any basketball-reference page</h1>
                                </div>
                                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                    <ScrapeUrl placeholder={PlaceHolder} SubmitButton={this.UpdateTables} />
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="grey-overlay"></div>
                </div>
                <div>
                    <p>{this.state.tables}</p>
                </div>
            </div>    
        )
    }
}