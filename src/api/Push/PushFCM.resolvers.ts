import { Resolvers } from "../../resolvers";
import { PushFCMResponse } from "../../types/graphql";
import admin from 'firebase-admin'
import sendMessage from "../../utils/sendMessage";

const resolvers: Resolvers = {
  Query: {
    pushFCM: async (parent, args, info): Promise<PushFCMResponse> => {
      try {
        console.log(sendMessage({
          title: 'hi',
          body: 'this is test',
          token: 'jkajdjafjqnemrgnrqmgn14t1j4t1-14t-0n4mjn'
        }))
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
