import Users from "./users.mongo.js";

async function getUser(id) {
  const userstatus = await Users.findOne({
    clerkID: id,
  });

  return userstatus;
}

async function postUser(userDetails) {
  try {
    const postuserstatus = await Users.create(userDetails);
    return postuserstatus;
  } catch (error) {
    return error;
  }
}

// async function updateUser(userDetails) {
//   try {
//     const updateUserstatus = await user.findOneAndUpdate(
//       {
//         userName: userDetails.userName,
//       },
//       {
//         $set: {
//           userName: userDetails.userName,
//           firstName: userDetails.firstName,
//           lastName: userDetails.lastName,
//           password: userDetails.password,
//           profilePicture: userDetails.profilePicture,
//           following: userDetails.following,
//           followers: userDetails.followers,
//           Tracks: userDetails.Tracks,
//         },
//       },
//       {
//         new: true,
//       }
//     );
//     return updateUserstatus;
//   } catch (error) {
//     return error;
//   }
// }

export { getUser, postUser };
