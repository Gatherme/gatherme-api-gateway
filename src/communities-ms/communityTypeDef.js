export const CommunityTypeDef = `
type Community {
    id: Int
    tag:  [String]
    name:  String
    banner:  String
    description:  String
    users:  [String]
    administrators:  [String]
}
type CommunityRequest {
    id: Int
    user:  String 
    state:  String
    comunity_id:  Int
}
type Response {
    Status: Int
}
input CommunityInput {
    tag:  [String]
    name:  String
    banner:  String
    description:  String
    users:  [String]
    administrators:  [String]
}
input CommunityRequestInput {
    user:  String 
    state:  String
    comunity_id:  Int
}
`
;


export const CommunityQueries = `
    getCommunityByID(id: Int!): Community!
    getAllCommunities: [Community]

`
;

export const CommunityMutations = `
    createCommunity(Community: CommunityInput, token: String): ReturnId
    updateCommunity(id: Int, Community: CommunityInput): ReturnId 
    deleteCommunity(id: Int): Response
    createRequestCommunity(id: Int, comment: CommunityRequestInput):  Response
`