import React from 'react';
import { connect } from 'react-redux';

import './Choose.css';
import salLogo from './../assets/img/sal-logo.svg';
import { Link } from 'react-router-dom';

class Choose extends React.Component {
    constructor (props) {
        super(props);

        let years = [];
        for (let i = 0; i < this.props.projects.length; i++)
            years.push(this.props.projects[i].year);

        this.state = {
            years: [...new Set(years)],
            types: [],
            choice: { year: null, type: null }
        };
        
        this.selectYear = this.selectYear.bind(this);
        this.selectType = this.selectType.bind(this);
        this.send = this.send.bind(this);
    }

    selectYear (e) {
        e.preventDefault();
        let year = e.currentTarget.innerHTML;
        let types = [];

        for (let i = 0; i < this.props.projects.length; i++)
            if (this.props.projects[i].year === year)
                types.push(this.props.projects[i].type)

        document.getElementById('select-year').textContent = year;
        document.getElementById('select-type').textContent = "Tür Seçiniz";
        this.setState({ types: [...new Set(types)], choice: { year: e.currentTarget.innerHTML, type: null } });
    }

    selectType (e) {
        e.preventDefault();
        let type = e.currentTarget.innerHTML;

        document.getElementById('select-type').textContent = type;
        this.setState({ choice: { year: this.state.choice.year, type: type } });
    }

    send (e) {
        if (!(this.state.choice.year && this.state.choice.type))
            e.preventDefault();
    }

    render () {
        return (
            <div id="choose" className="card bg-dark">
                <img className="card-img-top" src={salLogo} alt="Şişli Anadolu Lisesi Logo" />
                <div className="card-body">
                    <h4 className="card-title">Lütfen Yarışma Yılını ve Türünü Seçiniz</h4>
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" id="select-year" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Yıl Seçiniz
                        </button>
                        <div className="dropdown-menu" aria-labelledby="select-year">
                            {this.state.years.map((val, i) => (
                                <a onClick={this.selectYear} className="dropdown-item" href="." key={i}>{val}</a>
                            ))}
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" id="select-type" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tür Seçiniz
                        </button>
                        <div className="dropdown-menu" aria-labelledby="select-type">
                            {this.state.types.map((val, i) => (
                                <a onClick={this.selectType} className="dropdown-item" href="." key={i}>{val}</a>
                            ))}
                        </div>
                    </div>
                    <Link onClick={this.send} to={'/projects/' + this.state.choice.year + '/' + this.state.choice.type}><button type="button" id="competition" className="btn">Gönder</button></Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { projects: state.projects };
};

export default connect(mapStateToProps)(Choose);