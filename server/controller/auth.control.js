
import { User } from '../models/user.model.js'

export const SignUp = async (req, res) => {
  const { username, password, imageUrl } = req.body;
  let existingUser = await User.findOne({ username });

  if (!existingUser) {
    let userDetails = new User({ username, password, imageUrl });
    await userDetails.save();
    res.status(201).json({ message: userDetails });
  } else {
    res.status(403).json({ message: "User Already Exist" });
  }
}

export const GetUsers = async (req, res) => {
  const fetchedUsers = await User.find({})
  res.json(fetchedUsers)
}

export const friendRequest = async (req, res) => {
  const { friendid } = req.headers
  //-> redirection after login -> /dashboard/myId 
  //-> pass friendId to the headers via the frontEnd
  const { myID } = req.params
  const yourUser = await User.findById(friendid);
  const friendUser = await User.findById(myID);

  if (!yourUser || !friendUser) {
    return res.status(404).json({ message: "User(s) not found" });
  } else {
    yourUser.friendList.push(friendUser._id);
    friendUser.friendList.push(yourUser._id);
    await yourUser.save();
    await friendUser.save();

    res.status(200).json({ message: "Friend request accepted" });
  }
}