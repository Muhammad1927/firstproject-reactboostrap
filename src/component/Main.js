import Navigation from "./Navigation";
import Hero from "./Hero";
import Jurusan from "./Jurusan";
import card1 from "./../assets/card1.png";
import card2 from "./../assets/card2.png";
import card3 from "./../assets/card3.png";
import Kegiatan from "./Kegiatan";
import kegiatan1 from "./../assets/kegiatan1.png";
import kegiatan2 from "./../assets/kegiatan2.png";
import Kegiatan3 from "./../assets/kegiatan3.png";
import kegiatan4 from "./../assets/kegiatan4.png";
import kegiatan5 from "./../assets/kegiatan5.png";


const Main = () => {
    return (
        <div>
            <Navigation />
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <Jurusan  image={card1} judul="Multimedia" />
                    </div>
                    <div className="col-4">
                        <Jurusan  image={card2} judul="Rekayasa Perangkat Lunak" />
                    </div>
                    <div className="col-4">
                        <Jurusan  image={card3}  judul="Teknik Komputer Dan Jaringan" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan Sekolah</h1>
                    </div>
                </div>
                <div className="row gap-3 mb-5">
                    <div className="col-12">
                        <Kegiatan image={kegiatan1}  deskripsi="Sepak Bola" />
                    </div>
                    <div className="col-12">
                        <Kegiatan image={kegiatan2} deskripsi="Bulu Tangkis" />
                    </div>
                    <div className="col-12">
                        <Kegiatan image={Kegiatan3} deskripsi="Berenang" />
                    </div>
                    <div className="col-12">
                        <Kegiatan image={kegiatan4} deskripsi="Memanah" />
                    </div>
                    <div className="col-12">
                        <Kegiatan image={kegiatan5} deskripsi="Bela Diri" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;