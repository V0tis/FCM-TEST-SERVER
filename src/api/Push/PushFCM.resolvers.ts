import { Resolvers } from "../../resolvers";
import { PushFCMResponse } from "../../types/graphql";

const resolvers: Resolvers = {
  Query: {
    pushFCM: async (parent, args, info): Promise<PushFCMResponse> => {
      try {
        console.log('info!!!!!!!', info)
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
