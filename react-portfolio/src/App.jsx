import { useState } from 'react';
import './App.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';

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
      <div className='Header'>
        <h1>自己紹介サイト</h1>
        <nav>
          <ul>
              <li ><a href="#profile">自己紹介</a></li>
              <li ><a href="#project">地域連携課題演習</a></li>
              <li ><a href="#vitalink">VitaLink</a></li>
              <li ><a href="#contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
} ;

const Profile = () => {
  return(
    <>
      <div className='section1'>
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
                <td>登山・筋トレ・<a href="https://www.sus.ac.jp/topics/20250127-1/">献血</a></td>
            </tr>
            </tbody>
            </table>
          </div>
        </div>
    </>
  );
};



const Article = () => {
  return (
    <>
      <div className='Article'>
        <div className='section2'>
          <div className='project'>
            <h2 id ="project">地域連携課題演習</h2>
            <p>協力団体：茅野市×諏訪中央病院</p>
            <p>訪問先：茅野市社会福祉協議会訪問介護事業所</p>
            <p>提出したアイディア：サービス実績表の電子化</p>
          </div>
        </div>

        <div className='section3'>
          <div className='vitalink'>
            <h2 id ="vitalink">VitaLink</h2>
            <p>フロントエンドを学ぶ</p>
            <p>地域連携課題演習で提案したアイディアを実現したい</p>
            <p>余裕があったらセンサーなどにも触れていきたい</p>
          </div>
        </div>
      </div>
    </>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData,[name]:value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = formData;

    if(!name.trim() || !email.trim() || !message.trim()){
      alert("すべての項目を入力してください")
      return;
    }

    console.log(formData);

    // 送信完了メッセージを表示
    setIsSubmitted(true);

    // フォームの内容をクリア
    setFormData({ name: "", email: "", message: "" });

    // 数秒後にメッセージを非表示にする
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000); // 3秒後に非表示
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='Contact'>
          <h2 id="contact">お問い合わせ</h2>
          <h3>名前</h3>
          <input className='name'
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="諏訪  太郎"/>
          <h3>メールアドレス</h3>
          <input className='email'
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
          <p>
            <Button type='submit' variant='outlined' color='default'>送信</Button>
          </p>
     </form>
     {/* メッセージの表示（3秒限定） */}
      {isSubmitted && <p style={{ color: "red" }}>送信完了しました！</p>}
    </>
  );
};


const Footer = () =>{
  return(
    <>
      <div className='footer'>
        <ul>
            <li><a href=""><XIcon/></a></li>
            <li><a href=""><YouTubeIcon/></a></li>
            <li><a href=""><InstagramIcon/></a></li>        
        </ul>
      </div>
    </>
  );
};

export default App;