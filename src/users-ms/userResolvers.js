import { getUserByID,getUserByUsername,updateUser, deleteUser, createUser} from '../logic';
import { getLikeByID,updateLike, deleteLike, createLike, getLikesByCategory} from '../logic';



const userResolvers = {
	Query: {
		userById: (_, { id }) =>{
            let response = getUserByID(`${id}`)
            return response;   
        },
        userByUsername: (_, { username }) =>{
            let response = getUserByUsername(`${username}`)
            return response;   
        },
        likeById: (_, { id }) =>{
            let response = getLikeByID(`${id}`)
            return response;   
        },
        likesByCategory: (_, { category }) =>{
            let response = getLikesByCategory(`${category}`)
            return response;   
        }  
	},
	Mutation: {
		createUser: (_, { user }) =>{
            let response = createUser(user)
            return response;
        },
			
		updateUser: (_, { user }) =>{
           let response = updateUser(user)
           return response;
        },
			
		deleteUser: (_, { id }) =>{
            let response = deleteUser(id)
            return response
        },
        createLike: (_, { like }) =>{
            let response = createLike(like)
            return response;
        },
			
		updateLike: (_, { like }) =>{
           let response = updateLike(like)
           return response;
        },
			
		deleteLike: (_, { id }) =>{
            let response = deleteLike(id)
            return response
        }
			
	}
};

export default userResolvers;
