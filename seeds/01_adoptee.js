
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_a').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_a').insert([
        {
          id: 1,
          user_name_a: "andimalAndrew",
          user_name_a_pw: "smashcodegetloot",
          location_city: "Winter Park",
          location_lat: "23.8794",
          location_long: "55.987",
          contact_email: "ilovegroupprojects@gmail.com",
          picture_url: "https://i1.sndcdn.com/avatars-000078021251-zm8pub-t500x500.jpg"
        } 
      ]);
    });
};
