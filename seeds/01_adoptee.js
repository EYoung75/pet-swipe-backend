
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
        },
        {
          id: 2,
          user_name_a: "scrumMasterMer",
          user_name_a_pw: "hookEm",
          location_city: "Denver, CO",
          location_lat: "39.7392",
          location_long: "104.9903",
          contact_email: "thisismer@gmail.com",
          picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmk_TFpBc-IBSzRpdLnwkQU0Z7-hhucMyK2YSY66ogG4GJXjuCQ"
        },
        {
          id: 3,
          user_name_a: "adventurousEvan",
          user_name_a_pw: "lambislyfe",
          location_city: "Parker, CO",
          location_lat: "39.5186",
          location_long: "104.7614",
          contact_email: "evanloveslambchop@gmail.com",
          picture_url: "https://www.google.com/imgres?imgurl=http%3A%2F%2Ficons-for-free.com%2Ffree-icons%2Fpng%2F512%2F2694141.png&imgrefurl=http%3A%2F%2Ficons-for-free.com%2Ficons-sets%2Favatar-vol-1-3%2F&docid=cs9yKAtra25h4M&tbnid=HQHzGXV8I8a5oM%3A&vet=10ahUKEwipg5Xah6rfAhUHiVQKHW7RCLoQMwh-KDMwMw..i&w=512&h=512&bih=940&biw=1680&q=blonde%20person%20avatar&ved=0ahUKEwipg5Xah6rfAhUHiVQKHW7RCLoQMwh-KDMwMw&iact=mrc&uact=8"
        },
        {
          id: 4,
          user_name_a: "cheerfulCharity",
          user_name_a_pw: "petswiperules",
          location_city: "Lakewood, CO",
          location_lat: "39.7047",
          location_long: "105.0814",
          contact_email: "petswipers@gmail.com",
          picture_url: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjeq_W3iKrfAhVD-lQKHbQwDU4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F403023%2Favatar_female_person_user_woman_young_icon&psig=AOvVaw3NVCLiFiqHSOzOkZaLbkCf&ust=1545245903176191"
        }
      ])
    })
}
