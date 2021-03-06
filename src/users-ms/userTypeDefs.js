export const userTypeDef = `
type User {
    id: String!
    username: String!
    name : String!
    email: String!
    picture: String!
    description: String!
    gender: String!
    age: Int!
    city: String!
    likes: [String!]
    communities: [Int!]
    activities:[Int!]
    gathers: [String!]
    error: String
}
type responseDelete{
    result: String
    error: String

}

type responseUser {
    id: String
    username: String
    name : String
    email: String
    picture: String
    description: String
    gender: String
    age: Int
    city: String
    likes: [String]
    communities: [Int]
    activities:[Int]
    gathers: [String]
    error: String
    token: String
}

type Like {
    id: String
    category: String
    name: String
    error: String
}

type ReturnCreationLike{
    ans : String
    error: String
}


input LikeInput {
    category: String!
    name: String!
}

input LikeInputUpdate {
    id: String!
    category: String!
    name: String!
}



input UserInput {
    username: String!
    name : String!
    email: String!
    picture: String!
    description: String!
    gender: String!
    age: Int!
    city: String!
    likes: [String!]
    communities: [Int!]
    activities:[Int!]
    gathers: [String!]
}

input UserInputUpdate {
    id: String!
    username: String!
    name : String!
    email: String!
    picture: String!
    description: String!
    gender: String!
    age: Int!
    city: String!
    likes: [String!]
    communities: [Int!]
    activities:[Int!]
    gathers: [String!]
}

input inputDelete {
    id: String!
}

input  register {
    username: String!
    name : String!
    password: String!
    email: String!
    picture: String!
    description: String!
    gender: String!
    age: Int!
    city: String!
    likes: [String!]
    communities: [Int!]
    activities:[Int!]
    gathers: [String!]
}

input testUser{
    activities: Int!
    username: String!
    token: String!
}

`
;

export const userQueries = `
    userById(id: String!): User!
    userByUsername(username: String!): User!
    userByEmail(email: String!): User!
    likeById(id: String!): Like!
    likesByCategory(category: String!):[Like!]
`;

export const userMutations = `
    createUser(user: UserInput!): User!
    updateUser(user: UserInputUpdate!): responseDelete!
    deleteUser(id: inputDelete!): responseDelete!
    createLike(like: LikeInput!,username: String!,token: String!): Like!
    updateLike(like: LikeInputUpdate!): responseDelete!
    deleteLike(id: inputDelete!): responseDelete!

    addLikeToUser(like: String!, username: String!, token: String!): ReturnCreationLike!
    register(user: register!): responseUser!
    test(user: testUser!): responseDelete!
`;
