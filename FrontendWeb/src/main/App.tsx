// import Accordion from '../components/Accordion'
// import { io } from 'socket.io-client'
// import { useEffect, useState } from 'react'

import { AppRoutes } from "../presentation/routes/AppRoutes"

// interface Message {
//   tagId: string
//   date: string
// }

// const socket = io('http://localhost:8087')

// function App() {

//   const [messages, setMessages] = useState<Message[]>([])

//   useEffect(() => {
//     socket.on('connect', () => {
//       console.log('connected with the server')
//     })

//     socket.on('message', (data: { message: string }) => {

//       const message = JSON.parse(data.message) as Message

//       setMessages((prevMessages) => [...prevMessages, message]);
//     })

//     return () => {
//       socket.off('message');
//       socket.off('connect');
//     };
//   })

//   return (
//     <>
//       <Accordion
//         img=''
//         name='Franco Fernandez'
//         idCard='1234567'
//       >
//         <p>my data</p>
//       </Accordion>

//       <h3>Mensajes del api client al backend</h3>

//       {messages.map((message) => (
//         <>
//           <h2>Etiqueta: {message?.tagId}</h2>
//           <h2>Fecha: {message?.date}</h2>
//         </>
//       ))}
//     </>
//   )
// }

function App() {
  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
