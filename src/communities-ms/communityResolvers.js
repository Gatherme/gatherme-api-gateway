import {getCommunityByID,
        getAllCommunities,
        createCommunity,
        updateCommunity,
        deleteCommunity,
        createRequestCommunity
    }from '../logic'

const CommunityResolvers = {
    Query: {
        getCommunityByID: (_, {id}) => {
            let response = getCommunityByID({id});
            return response;
        },
        getAllCommunities: (_)=>{
            let response= getAllCommunities();
            return response;
        }
    },
    Mutation: {
        createCommunity: (_, {Community, token}) => {
            let response = createCommunity(Community, token);
            return response;
        },
        updateCommunity: (_, {id, Community, token }) => {
            let response = updateCommunity(`{id}`,Community, token);
            return response;
        },
        deleteCommunity: (_, {id, token}) => {
            let response = deleteCommunity(`{id}`, token);
            return response;
        },
        createRequestCommunity: (_, {CommunityRequest, token}) => {
            let response = createRequestCommunity(CommunityRequest, token);
            return response;
        }
    }
}

export default CommunityResolvers;