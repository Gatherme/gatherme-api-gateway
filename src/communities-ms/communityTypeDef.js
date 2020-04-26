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
type Response2 {
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
    createCommunity(Community: CommunityInput, token: String): Community
    updateCommunity(id: Int, Community: CommunityInput): ReturnId 
    deleteCommunity(id: Int): Response2
    createRequestCommunity(id: Int, CommunityRequest: CommunityRequestInput):  Response2
`