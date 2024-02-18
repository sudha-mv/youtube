import { useState } from 'react';
import '../Styles/Vedios.css';
const Videos = () => {
  let videos = [
    {
      thumbnail: '/images/thumnile1.jpeg',
      channelIcon: '/images/image1.jpg',
      title: 'Leo.Naa Thalapathy Vijay | Anirudh Ravichander',
      channelname: 'Sony Music South',
      view: '2M views ,  25days',
      id:1
    },
    {
      thumbnail: '/images/thumnile2.jpeg',
      channelIcon: '/images/image2.jpg',
      title: 'Tholi Prema | Varun Tej | Raashi Khanna ',
      channelname: 'Mango Kannada',
      view: '1.3M views , 3weeks ago',
      id:2
    },
    {
      thumbnail: '/images/thumnile3.jpeg',
      channelIcon: '/images/image3.jpg',
      title: 'ಬಹದ್ದೂರ್ | Dhruva Sarja| Radhika Pandit',
      channelname: 'SGV Kannada Films',
      view: '174k views , 11days ago',
      id:3
    },
    {
      thumbnail: '/images/thumnile4.jpeg',
      channelIcon: '/images/image4.jpg',
      title: 'Mr & Mrs Ramachari |Yash|Radhika Pandith',
      channelname: 'Sri Ganesh Videos',
      view: '80M views , 5years ago',
      id:4
    },
    {
      thumbnail: '/images/thumnile5.jpeg',
      channelIcon: '/images/image5.jpg',
      title: 'Dhanush, Samyuktha Latest Superhit Kannada ',
      channelname: 'TRP Entertainments',
      view: '369k , 3weeks ago',
      id:5
    },
    {
      thumbnail: '/images/thumnile6.jpeg',
      channelIcon: '/images/image4.jpg',
      title: 'Adhyaksha  | Sharan| Chikkanna | ',
      channelname: 'Sri Ganesh Videos',
      view: '26M , 5years ago',
      id:6
    },
    {
      thumbnail: '/images/thumnile7.jpeg',
      channelIcon: '/images/image6.jpg',
      title: 'JAGGU DADA | DARSHAN | RAGHAVENDRA HEGDE|',
      channelname: 'DBeatsMusicWorld',
      view: '39M , 5years ago',
      id:7
    },
    {
      thumbnail: '/images/thumnile8.jpeg',
      channelIcon: '/images/image7.jpg',
      title: 'Ninnindale|Puneeth Rajkumar | Erica Fernandes ',
      channelname: 'SRS Media Vision ',
      view: '21M, 5years ago',
      id:8
    },
    {
      thumbnail: '/images/thumnile9.jpeg',
      channelIcon: '/images/image8.jpg',
      title: 'Vishnuvardhana | Sudeep| Priyamani',
      channelname: 'A2 Music',
      view: '6.1M views  8 years ago',
      id:9
    },
    {
      thumbnail: '/images/thumnile10.jpeg',
      channelIcon: '/images/image9.jpg',
      title: 'Kaiva Divine Teaser | Dhanveerrah | Megha Shetty |',
      channelname: ' Abhuvanasa Creations',
      view: '1m views , 3years ago',
      id:10
    },
    {
      thumbnail: '/images/thumnile11.jpeg',
      channelIcon: '/images/image10.jpg',
      title: 'Salaar | Prabhas | Prashanth Neel| Prithviraj|',
      channelname: 'Hombale Films',
      view: '11M view , 1years ago',
      id:11
    },
    {
      thumbnail: '/images/thumnile12.jpeg',
      channelIcon: '/images/image4.jpg',
      title: 'Googly | Yash, Kriti Kharbanda',
      channelname: 'Sri Ganesh Videos',
      view: '50M 5years ago',
      id:12
    },
  ];

  let [Z, setZ] = useState(videos);
  let handleDelete = (id) => {
    setZ(Z.filter((data1) =>id!==data1.id));
  };
  return (
    <div className="videos">
      {Z.map((data1) => (
        <div className="video">
          <div className="thumb">
            <img src={data1.thumbnail} alt="" />
          </div>
          <div className="detail">
            <div className="icon">
              <img src={data1.channelIcon} alt="" />
            </div>

            <div className="title1">
              <p>{data1.title}</p>
              <p>{data1.channelname}</p>
              <p>{data1.view} <span><button onClick={() => handleDelete(data1.id )}>delete</button></span>  </p> 
              
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
