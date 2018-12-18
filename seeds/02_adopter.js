
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
        } 
      ]);
    });
};
