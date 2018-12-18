
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pet_info").del()
    .then(function () {
      // Inserts seed entries
      return knex("pet_info").insert([
        {
          id: 1, 
          pet_name: "Mr Sparkles",
          species: "cat",
          pet_gender: "male",
          pet_age: "4",
          house_trained: false,
          preferences: "people",
          vaccinations: true,
          spay_neuter: true,
          coat_length: "none",
          pet_size: "small",
          pet_picture_url: "https://scontent-lht6-1.cdninstagram.com/vp/2a4a060abb587312ed690caf165b10ff/5CA4647A/t51.2885-15/e35/12331954_193006447712478_2037544279_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&ig_cache_key=MTE0MDgyMTQ5MzIyMjcyMTk0OQ%3D%3D.2"
        },
        {
          id: 2, 
          pet_name: "Samantha",
          species: "reptile",
          pet_gender: "female",
          pet_age: "2",
          house_trained: false,
          perfers_house_without: "snakes",
          vacinations: false,
          spay_neuter: false,
          coat_length: "none",
          pet_size: "small",
          pet_picture_url: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwitpZHAwKrfAhVo64MKHSVDBUUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.orlandoweekly.com%2FBlogs%2Farchives%2F2018%2F03%2F12%2Fthe-best-way-to-kill-an-iguana-is-to-bash-its-head-in-says-florida-researchers&psig=AOvVaw02D4630KrhzRsxjSvWcsVY&ust=1545261138284257"
        },
        {
          id: 3, 
          pet_name: "King Henry the 128th",
          species: "horse",
          pet_gender: "male",
          pet_age: "5",
          house_trained: false,
          perfers_house_without: "walls",
          vacinations: true,
          spay_neuter: true,
          coat_length: "short",
          pet_size: "large",
          pet_picture_url: "https://www.airc.ie/wp-content/uploads/horse-web.jpg"
        },
        {
          id: 4, 
          pet_name: "Mustache",
          species: "dog",
          pet_gender: "female",
          pet_age: "4 months",
          house_trained: false,
          perfers_house_without: "children",
          vacinations: true,
          spay_neuter: true,
          coat_length: "long",
          pet_size: "medium",
          pet_picture_url: "https://www.dogster.com/wp-content/uploads/2015/05/MovemberDogs8.png"
        }
      ]);
    });
};
