import React from 'react';

import './Download.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';

import ios0 from './../assets/screenshot/ios0.jpeg';
import ios1 from './../assets/screenshot/ios1.jpeg';
import ios2 from './../assets/screenshot/ios2.jpeg';
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
                            <li>
                                <button className="btn btn-secondary" onClick={() => this.activateTab('page2')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
                                        <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                                        <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                                        <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div id="tabview">
                        <article id="page0" style={{display: "block"}}>
                            <h3>Android için İndir</h3>
                            <div className="warning mb-2"><small>Desteklenen <strong>Minimum Android</strong> Sürümü: 4.1 (Jelly Bean)</small></div>
                            <div className="warning-red mb-2"><small>Eğer uygulamanın daha eski bir sürümü kurulu ise uygulama kurulumundan önce <b>eski sürümü kaldırmanız gereklidir</b>.</small>
                            </div>
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
                        </article>
                        <article id="page1" style={{display: "none"}}>
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
                                <li>Açılan paylaş penceresinde <b>Ana Ekrana Ekle</b> ifadesine basın.</li>
                                <li>Açılan düzenleme penceresinde <b>Ekle</b> ifadesine basın.</li>
                                <li>Artık web sayfamıza ana ekranınızdan hızlıca erişebilirsiniz.</li>
                            </ol>
                            <Slider img={[ios0, ios1, ios2, ios3]} alt={["ScreenShot0", "ScreenShot1", "ScreenShot2", "ScreenShot3"]} />
                        </article>
                        <article id="page2" style={{display: "none"}}>
                            <h3>Sürüm Geçmişi</h3>
                            <section className="warning-section mb-2">
                                <h4>Tübitak ŞAL (Android) Sürüm Geçmişi</h4>
                                <section className="warning-section-dark mb-2">
                                    <h5>Sürüm 2.0.0 (<span className="text-success">En Son</span>)</h5>
                                    <ul>
                                        <li>Uygulama paketi (Apk) boyutu <b> %88 azaldı</b>.</li>
                                        <li>Ayrıştırılmış uygulama paketi boyutu <b>%95 azaldı</b>.</li>
                                        <li>Yeni projeler için dinamik destek eklendi (uygulama güncellemesine gerek yok).</li>
                                        <li>Uygulama arayüzü yeniden tasarlandı.</li>
                                        <li>Uygulama başlatma süresi <b>azaldı</b>.</li>
                                        <li>Tek bir paket ile tüm işlemci mimarileri desteklendi.</li>
                                        <li>Android Jelly Bean için destek eklendi.</li>
                                        <li>Android 9 üstü sürümler için destek eklendi.</li>
                                        <li>Native C++ dili ve Qt çerçevesinden Kotlin programlama dili ve resmi Android Api'ye geçildi.</li>
                                    </ul>
                                </section>
                                <section className="warning-section-dark mb-2">
                                    <h5>Sürüm 1.5.1-beta (<span className="text-danger">Desteklenmiyor</span>)</h5>
                                    <ul>
                                        <li>Hata Düzeltmeleri.</li>
                                    </ul>
                                </section>
                                <section className="warning-section-dark mb-2">
                                    <h5>Sürüm 1.5.0-beta (<span className="text-danger">Desteklenmiyor</span>)</h5>
                                    <ul>
                                        <li>Dokunmatik sorunları çözüldü.</li>
                                        <li>Performans iyileştirmeleri.</li>
                                        <li>Artık proje resimleri büyütülebilir.</li>
                                    </ul>
                                </section>
                                <section className="warning-section-dark mb-2">
                                    <h5>Sürüm 1.0.1 (<span className="text-danger">Desteklenmiyor</span>)</h5>
                                    <ul>
                                        <li>Hata Düzeltmeleri.</li>
                                    </ul>
                                </section>
                                <section className="warning-section-dark">
                                    <h5>Sürüm 1.0.0 (<span className="text-danger">Desteklenmiyor</span>)</h5>
                                    <ul>
                                        <li>İlk sürüm.</li>
                                    </ul>
                                </section>
                            </section>
                            <section className="warning-section">
                                <h4>Tübitak ŞAL (Web) Sürüm Geçmişi</h4>
                                <section className="warning-section-dark mb-2">
                                    <h5>Sürüm 1.0.0 (<span className="text-success">En Son</span>)</h5>
                                    <ul>
                                        <li>İndirme sayfası eklendi.</li>
                                        <li>İndirme pop-up'ı oluşturuldu.</li>
                                        <li>SEO için meta bilgisi eklendi.</li>
                                    </ul>
                                </section>
                                <section className="warning-section-dark mb-2">
                                    <h5>Sürüm 0.1.1</h5>
                                    <ul>
                                        <li>Hata Düzeltmeleri.</li>
                                    </ul>
                                </section>
                                <section className="warning-section-dark">
                                    <h5>Sürüm 0.1.0</h5>
                                    <ul>
                                        <li>İlk Sürüm.</li>
                                    </ul>
                                </section>
                            </section>
                        </article>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Download;