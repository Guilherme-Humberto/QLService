import User from "../../models/User";

export default {
  Query: {
    users: async () => {
        const users = await User.find()
        return users
    },
    user: async (_, { id }) => {
      const user = await User.findById(id);
      if (!user) {
        return new Error("Usuário não existe");
      }
      return user;
    },
  },
  Mutation: {
    register: async (_, { userInput }) => {
      const user = await User.create(userInput);
      return user;
    },

    update: async (_, { id, userInput }) => {
        const newUser = await User.findByIdAndUpdate(id, userInput, { 
            new: true 
        })
        return newUser
    },

    delete: async (_, { id }) => {
        await User.findByIdAndRemove(id)
        return true
    }
  },
};
