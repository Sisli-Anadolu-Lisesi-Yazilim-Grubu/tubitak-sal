import React from 'react';

class Error extends React.Component {
    render () {
        if (this.props.type === 'PAGE_NOT_FOUND') {
            return (
                <div>
                    <h1 style={{textAlign: "center"}}>404</h1>
                    <h4 style={{margin: "1rem"}}>Sayfa bulunamadı. Taşınmış veya kaldırılmış olabilir. Lütfen URL'nizi kontrol edin veya <a href="mailto:salyazilim2019@gmail.com">geliştirici</a> ile iletişime geçin.</h4>
                </div>
            );
        } else return ( <h4 style={{margin: "1rem"}}>Beklenmedik bir hata oluştu. Lütfen <a href="mailto:salyazilim2019@gmail.com">geliştirici</a> ile iletişime geçin. (type: {this.props.type})</h4> );
    }
}

export default Error;