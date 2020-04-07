import { Resolvers } from "../../resolvers";
import { PushFCMResponse } from "../../types/graphql";
import sendMessage from "../../utils/sendMessage";
import admin from "firebase-admin";
import MessagingDevicesResponse = admin.messaging.MessagingDevicesResponse;

const resolvers: Resolvers = {
  Query: {
    pushFCM: async (parent, args, info): Promise<PushFCMResponse> => {
      try {
        const token = 'cLQ-vUdXZGc:APA91bHfG2SL2gNIJvZgNQVtV39GExVslxoIUnk5Ek6yJUFL_g3ccT3AaNdVvhu61CiB40qt18NMmbiSNug6VVZOR5qzVddJrV-_2R7yfWuCmVMmnU2fWszbYmhvwJf3H76NyqeiBNC6'

        const requestMessage: MessagingDevicesResponse | undefined = await sendMessage({
          title: 'fcmTEST',
          body: 'BODY BODY BODY',
          token,
        })

        if (requestMessage !== undefined) {
          console.log('requestMessage', requestMessage.results)
        }

        return {
          status: true
        }
      } catch (error) {
        return {
          status: false
        }
      }
    }
  }
}

export default resolvers
