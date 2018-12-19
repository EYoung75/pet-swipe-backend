
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users_b").del()
    .then(function () {
      // Inserts seed entries
      return knex("users_b").insert([
        {
          id: 1,
          user_name_b: "CatGirlJaney",
          user_name_b_pw: "ilikecats",
          location_city: "Denver",
          location_lat: "23.4444",
          location_long: "55.237",
          contact_email: "toomanycats@gmail.com",
          picture_url: "https://i1.sndcdn.com/avatars-000078021251-zm8pub-t500x500.jpg",
          about: " My name is Janey I like Cats and have 43 inside my house i never clean. Ive also been on Hoarders twice."
        },
        {
          id: 2,
          user_name_b: "LookingForChild",
          user_name_b_pw: "freelabor",
          location_city: "Denver",
          location_lat: "23.4444",
          location_long: "55.237",
          contact_email: "needachild@gmail.com",
          picture_url: "https://i1.sndcdn.com/avatars-000078021251-zm8pub-t500x500.jpg",
          about: " My name is Lucas. What up. I am 43 years old. I have no friends."
        },
        {
          id: 3,
          user_name_b: "NiceGuyCarl",
          user_name_b_pw: "iamnice",
          location_city: "Denver",
          location_lat: "23.4444",
          location_long: "55.237",
          contact_email: "niceguysfinishlast@gmail.com",
          picture_url: "https://i1.sndcdn.com/avatars-000078021251-zm8pub-t500x500.jpg",
          about: " I am Carl. I am nice. I am constantly hungry. I eat lots of rice."
        },
        {
          id: 4,
          user_name_b: "Felicia",
          user_name_b_pw: "exoticAnimalLover",
          location_city: "Denver",
          location_lat: "23.4444",
          location_long: "55.237",
          contact_email: "gamergirl@gmail.com",
          picture_url: "https://i1.sndcdn.com/avatars-000078021251-zm8pub-t500x500.jpg",
          about: "The name's Felicia. I'm super into monkeys and stuff. HMU if you have an exotic animal or something i.e. chinchilla."
        },
      ]);
    });
};
