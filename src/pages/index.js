import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const [roomName, setRoomName] = useState('')

  const joinRoom = () => {
  const id=  router.push(`/room/${roomName || Math.random().toString(36).slice(2)}`)
  console.log(id)
  }

 function checkEmpty(val){

  console.log(val);




  }

 

  return (
    <div className={styles.container}>
      <Head>
        <title>Native WebRTC API with NextJS</title>
        <meta name="description" content="Use Native WebRTC API for video conferencing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h1>Lets join a room!</h1>
    
       <button onClick={joinRoom} type="button" className={styles['join-room']}>Host a Meeting</button>
       <input onChange={(e) => setRoomName(e.target.value)} value={roomName} className={styles['room-name']} required />
<button onClick={joinRoom} type="button" className={styles['join-room']} disabled={!roomName}>Join Room</button>
      </main>
    </div>
  )
}
