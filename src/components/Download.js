import React from 'react';

import './Download.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';

import ios0 from './../assets/screenshot/ios0.png';
import ios1 from './../assets/screenshot/ios1.png';
import ios2 from './../assets/screenshot/ios2.png';
import ios3 from './../assets/screenshot/ios3.png';

class Download extends React.Component {
    constructor () {
        super();
        this.state = {
            apk: "https://github.com/Sisli-Anadolu-Lisesi-Yazilim-Grubu/tubitak-sal-android/releases/download/v2.0/app-release.apk"
        }
    }

    activateTab (pageId) {
        let tabCtrl = document.getElementById('tabview');
        let pageToActivate = document.getElementById(pageId);

        for (let i = 0; i < tabCtrl.childNodes.length; i++) {
            let node = tabCtrl.childNodes[i];
            if (node.nodeType === 1)
                node.style.display = (node === pageToActivate) ? 'block' : 'none';
        }
    }

    render () {
        return (
            <div>
                <Navbar href="/" />
                <main style={{margin: "1em"}}>
                    <nav>
                        <ul id="tabcontrol">
                            <li><button className="btn btn-secondary" onClick={() => this.activateTab('page0')}>Android</button></li>
                            <li><button className="btn btn-secondary" onClick={() => this.activateTab('page1')}>IOS</button></li>
                        </ul>
                    </nav>
                    <div id="tabview">
                        <div id="page0" style={{display: "block"}}>
                            <h3>Android için İndir</h3>
                            <p>
                                Lütfen uygulamamızı <a href={this.state.apk}>buradan</a> indirin. <br/>
                                Ardından <strong>apk</strong> dosyasının indiği konuma <i>(genellikle indirilenler klasörü)</i> dosya yöneticisi ile gidip 
                                <strong> apk</strong> dosyasına tıklayın.<br/>
                                <strong>Paket ayrıştırıcı</strong> ile kurulum yapıldıktan sonra kullanmaya başlayabilirsiniz.<br/>
                            </p>
                            <div className="warning-red">
                                <small>
                                    <i>Bilinmeyen kaynaklar hatası alıyorsanız, lütfen Ayarlar -&gt; Güvenlik -&gt; <b>Bilinmeyen Kaynaklara İzin Ver</b> adlı kutucuğu seçin.</i>
                                </small>
                            </div>
                        </div>
                        <div id="page1" style={{display: "none"}}>
                            <h3>IOS için İndir</h3>
                            <div className="warning-red mb-2">
                                <small>
                                Apple firmasının güvenlik tedbirleri nedeniyle <strong>IOS</strong> cihazlarda App Store dışından uygulama indirilememektedir. Bu sebeple 
                                <strong> Tübitak ŞAL</strong> mobil uygulaması <strong>IOS</strong> cihazlarda <b>kullanılamamaktadır.</b><br/>
                                <b>Fakat aşağıdaki adımları takip ederek <strong>Tübitak ŞAL</strong> web sitesini ana ekranınıza ekleyebilir ve kullanabilirsiniz.</b>
                                </small>
                            </div>
                            <h4>Tübitak ŞAL'ı Ana Ekranınıza Ekleyin</h4>
                            <ol>
                                <li>Tarayıcınızla <a href="https://tubitak-sal.web.app" target="_blank" rel="noreferrer">tubitak-sal.web.app</a> sayfasına gidin ve tarayıcınızın paylaş butonuna basın.</li>
                                <li>Açılan paylaş penceresinde <b>Ana Ekrana Ekle</b>ye basın.</li>
                                <li>Açılan düzenleme penceresinde <b>Ekle</b>ye basın.</li>
                                <li>Artık web sayfamıza ana ekranınızdan hızlıca erişebilirsiniz.</li>
                            </ol>
                            <Slider img={[ios0, ios1, ios2, ios3]} alt={["ScreenShot0", "ScreenShot1", "ScreenShot2", "ScreenShot3"]} />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Download;