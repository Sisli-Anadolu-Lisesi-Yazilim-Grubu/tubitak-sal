import React from 'react';

import './Footer.css';

class Footer extends React.Component {
    render () {
        return (
            <footer className="sal-footer py-4">
                    <div className="row px-3">
                    <small className="ml-4 ml-sm-5 mb-2">
                        Telif Hakkı &copy; 2020 Şişli Anadolu Lisesi. Hiçbir proje verisi Şişli Anadolu Lisesi Müdürlüğü'nün 
                        açık izni olmadan <i>kopyalanamaz, değiştirilemez, dağıtılamaz, yayımlanamaz</i>.
                    </small>
                    <div className="social-contact ml-4 ml-sm-auto">
                        <a href="http://sislianadolu.meb.k12.tr" rel="noreferrer" target="_blank">
                            <span className="fa fa-home mr-4 text-sm"></span>
                        </a>
                        <a href="https://github.com/Sisli-Anadolu-Lisesi-Yazilim-Grubu" rel="noreferrer" target="_blank">
                            <span className="fa fa-github mr-4 text-sm"></span>
                        </a>
                        <a href="https://www.instagram.com/sisli_anadolu" rel="noreferrer" target="_blank">
                            <span className="fa fa-instagram mr-4 text-sm"></span>
                        </a>
                        <a href="https://twitter.com/sisli_anadolu" rel="noreferrer" target="_blank">
                            <span className="fa fa-twitter mr-4 text-sm"></span>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;