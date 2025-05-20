
import { useState } from 'react';
import './App.css'

const App = () => {
  return (
    <>
      <Header/>
      <Profile/>
      <Article/>
      <ContactForm/>
      <Footer/>
    </>
  );
};

const Header = () => {
  return (
    <>
      <h1>自己紹介サイト</h1>
      <nav>
        <ul>
            <li ><a href="#profile">自己紹介</a></li>
            <li ><a href="#project">地域連携課題演習</a></li>
            <li ><a href="#vitalink">VitaLink</a></li>
            <li ><a href="#contact">お問い合わせ</a></li>
        </ul>
      </nav>
    </>
  );
} ;

const Profile = () => {
  return(
    <>
      <h2 id ="profile">自己紹介</h2>
      <div className='profile'>
        <img src="/myphoto.jpg" alt="自分の画像"/>
        <table border="0" className='grahp'>
          <tbody>
          <tr>
              <td>名前</td>
              <td>税所樹磨</td>
          </tr>
          <tr>
              <td>学籍番号</td>
              <td>T223056</td>
          </tr>
          <tr>
              <td>出身地</td>
              <td>新潟県</td>
          </tr>
          <tr>
              <td>趣味</td>
              <td>登山、筋トレ、<a href="https://www.sus.ac.jp/topics/20250127-1/">献血</a></td>
          </tr>
          </tbody>
          </table>
        </div>
    </>
  );
};



const Article = () => {
  return (
    <>
      <h2 id ="project">地域連携課題演習</h2>
      <p>協力団体：茅野市×諏訪中央病院</p>
      <p>提出したアイディア：サービス実績表の電子化</p>

      <h2 id ="vitalink">VitaLink</h2>
      <p>フロントエンドを学び、地域連携課題演習で提案したアイディアを実現したい</p>
      <p>余裕があったらセンサーなどにも触れていきたい</p>
    </>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData,[name]:value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
          <h2 id="contact">お問い合わせ</h2>
          <h3>名前</h3>
          <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="名字 名前"/>
          <h3>メールアドレス</h3>
          <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder=""/>
          <h3>メッセージ</h3>
          <textarea 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          placeholder="メッセージを入力"></textarea>
          <p><input type="submit" value="送信"/></p>
     </form>
    </>
  );
};


const Footer = () =>{
  return(
    <>
    <div className='footer'>
      <ul>
          <li><a href="">Facebook</a></li>
          <li><a href="">X</a></li>      
      </ul>
    </div>
    </>
  );
};

export default App;