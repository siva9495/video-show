import React, { useState, useEffect } from 'react'
import firebase from '../FIREBASE/firebase'

const VideosList = () => {

    const [videoUrls, setVideoUrls] = useState([]);

    useEffect(() => {
        // Function to retrieve video URLs from Firebase Storage
        const fetchVideoUrls = async () => {
          try {
            const storageRef = firebase.storage().ref();
            const videosFolderRef = storageRef.child('cameraVideos');
            const videoList = await videosFolderRef.listAll();
            const urls = await Promise.all(videoList.items.map(async (videoRef) => {
              const url = await videoRef.getDownloadURL();
              return url;
            }));
            setVideoUrls(urls);
          } catch (error) {
            console.error('Error fetching video URLs:', error);
          }
        };
    
        fetchVideoUrls();
        
        }, []);

  return (
    <div className="h-screen w-screen bg-black">
        <div className="grid grid-cols-5">
        {videoUrls.map((url, index) => (
          <div key={index}>
            <video controls src={url} className="w-60 h-40 bg-white" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideosList;