import admin from 'firebase-admin'
import { MessagePayload } from "../types/messagePayload";

const sendMessage = async (dataForPayload: MessagePayload) => {
  const token: string | string[] = dataForPayload.token ? dataForPayload.token : ''

  const payload = {
    notification: {
      title: dataForPayload.title,
      body: dataForPayload.body,
      sound: 'default'
    }
  }

  try {
    return await admin.messaging().sendToDevice(token, payload)
  } catch (error) {
    console.log('error in sendMessage Function', error)
  }
}

export default sendMessage
