
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
        }
      ]);
    });
};
