import "../White/White.scss";
import star from "../../../Svgs/star2.png";
import ellipse from "../../../Svgs/Ellipse10.png";
import x from "../../../Svgs/x.png";
import sun from "../../../Svgs/sun1.png";
import human from "../../../Svgs/human.png";
import money from "../../../Svgs/money.png";


function White() {
  return (
    <section>
      <img className="star" src={star} alt="" />
      <img className="ellipse" src={ellipse} alt="" />
      <img className="x" src={x} alt="" />
      <div className="rahbar">
        <div className="stardiv">
          <img className="starr" src={human} alt="" />
        </div>
        <div className="left">HR Bo'limi</div>
      </div>

      <div className="moneydiv">
        <div className="startdiv">
          <img className="money" src={money} alt="" />
        </div>
        <div className="leftt">Savdo bo’limi</div>
      </div>
      <div className="poem">
        <h2 className="poem__heading">Hurmatli biznes egasi...</h2>
        <p className="sher">
          Bugun biznesni boshqarish, uni yangi bosqichlarga olib chiqish har
          qachon-gidan ham qiyin vazifa hisoblanadi.
          <br />
          <br />
          Har bir biznesning o’ziga yarasha jarayonlari, maqsadlari va talablari
          bo’ladi. Agar biznesda barcha jarayonlarni, maqsadlarni va xodimlarni
          birlashtiradigan yagona texnologiya mavjud bo’lmasa, bugungi
          raqobatdosh bozorga dosh berish va rivojlanish mumkin bo’lmay qoladi.{" "}
          <br />
          <br />
          Agar sizning biznesingiz ham bir nechta bo’lim-larga va katta jamoaga
          ega bo’lsa… <br />
          <br />
          Sizga barcha biznes jarayonlarini avtomatlash-tiradigan, xodimlaringiz
          samaradorligini oshiradigan va xarajatlaringizni bir necha baravarga
          qisqartiradigan yagona yechim kerak.
        </p>
        <div className="tugmaDiv">
          <button className="btn">Davomini o'qish</button>
        </div>
      </div>

      <div className="bigDiv">
        <div className="first">
          <h2>Statistik ma’lumot</h2>
          <p>
            “Kompaniyalar osongina avtomatlashtirilishi mumkin bo’lgan topshiriq
            va vazifalarga qimmatli vaqtlarining 23% qismini havoga
            sovurishadi.”
          </p>
          <h3>- Salesforce tadqiqoti</h3>
        </div>
        <div className="second">
          <img src={sun} alt="" />
        </div>
      </div>
    </section>
  );
}

export default White;
