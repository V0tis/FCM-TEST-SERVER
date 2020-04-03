import { Resolvers } from "../../resolvers";
import { PushFCMResponse } from "../../types/graphql";
import sendMessage from "../../utils/sendMessage";
import admin from "firebase-admin";
import MessagingDevicesResponse = admin.messaging.MessagingDevicesResponse;

const resolvers: Resolvers = {
  Query: {
    pushFCM: async (parent, args, info): Promise<PushFCMResponse> => {
      try {
        const requestMessage: MessagingDevicesResponse | undefined = await sendMessage({
          title: 'hi',
          body: 'this is test',
          token: 'jkajdjafjqnemrgnrqmgn14t1j4t1-14t-0n4mjn'
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
