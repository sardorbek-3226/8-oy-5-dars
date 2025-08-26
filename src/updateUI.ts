import type { User } from "./interfaces";

const name = document.getElementById("name")!;
const userName = document.getElementById("userName")!;
const joinedAt = document.getElementById("joinedAt")!;
const img = document.getElementById("img") !;
const followers = document.getElementById("followers")!;
const following = document.getElementById("following")!;
const join = document.getElementById("join")!;
const repos = document.getElementById("repos");
const bio = document.getElementById("bio")!;
const twitter = document.getElementById("twitter")!;
const blog = document.getElementById("blog")!;

export const updateUI = (user: User) => {
  name.textContent = user.name ?? "Ism topilmadi";
  userName.textContent = user.login ?? "Username yo‘q";
  joinedAt.textContent = user.created_at ?? "Sana yo‘q";
  img.src = user.avatar_url ?? "https://via.placeholder.com/150";

  followers.textContent = user.followers ?? "0";
  following.textContent = user.following ?? "0";
  if (repos) repos.textContent = user.public_repos ?? "0";

  bio.textContent = user.bio ?? "Biografiya mavjud emas";
  join.textContent = user.location ?? "Manzil topilmadi";
  twitter.textContent = user.twitter_username ?? "No twitter account";
  blog.textContent = user.company ?? "Hech qayerda ishlamaydi!";
};
