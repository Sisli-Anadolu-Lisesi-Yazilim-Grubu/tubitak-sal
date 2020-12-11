import React from 'react';

class Error extends React.Component {
    render () {
        if (this.props.type === 'PAGE_NOT_FOUND') {
            return (
                <h3>Sayfa bulunamadı. Taşınmış veya kaldırılmış olabilir. Lütfen URL'nizi kontrol edin veya <a href="mailto:salyazilim2019@gmail.com">geliştirici</a> ile iletişime geçin.</h3>
            );
        } else return ( <h3>Beklenmedik bir hata oluştu. Lütfen <a href="mailto:salyazilim2019@gmail.com">geliştirici</a> ile iletişime geçin. (type: {this.props.type})</h3> );
    }
}

export default Error;