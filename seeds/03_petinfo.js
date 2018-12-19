
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
          pet_name: "Shasta",
          species: "dog",
          pet_gender: "female",
          pet_age: "4",
          house_trained: true,
          preferences: "snacks",
          vaccinations: false,
          spay_neuter: false,
          coat_length: "medium",
          pet_size: "small",
          pet_picture_url: "https://scontent-lhr3-1.cdninstagram.com/vp/2f0128c18f06dcb8c1e847da075449b8/5CA759E9/t51.2885-15/e35/46556609_2261037477463205_3990943470402404352_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MTkzNzkxMDcyMzUzMzEzMTA3NQ%3D%3D.2"
        },
        {
          id: 3, 
          pet_name: "Zyack",
          species: "bird",
          pet_gender: "male",
          pet_age: "33",
          house_trained: true,
          preferences: "noises to imitate",
          vaccinations: false,
          spay_neuter: false,
          coat_length: "short",
          pet_size: "small",
          pet_picture_url: "https://scontent-lhr3-1.cdninstagram.com/vp/d9dac4ec30df5d7272a067bbaf54d506/5CA2E1C0/t51.2885-15/e35/47424360_286320885562723_4031805139746940043_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MTkzNzg1NTc3MjI5NTU4Njg3MA%3D%3D.2"
        },
        {
          id: 4, 
          pet_name: "Bodhi Jay",
          species: "child",
          pet_gender: "male",
          pet_age: "3",
          house_trained: false,
          preferences: "needs juice to thrive",
          vaccinations: false,
          spay_neuter: false,
          coat_length: "short",
          pet_size: "small",
          pet_picture_url: "https://scontent-lht6-1.cdninstagram.com/vp/6bf4fc82f5a7f237e83bbed317c75244/5C1CE564/t51.2885-15/e15/s640x640/20393996_184044002134358_1553679225049841664_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com"
        },
        {
          id: 5, 
          pet_name: "Casey",
          species: "dog",
          pet_gender: "male",
          pet_age: "7",
          house_trained: true,
          preferences: "children",
          vaccinations: false,
          spay_neuter: false,
          coat_length: "long",
          pet_size: "medium",
          pet_picture_url: "https://scontent-lhr3-1.cdninstagram.com/vp/7b5faa79c3ff41fd02582df9a966c106/5CB5E48F/t51.2885-15/e35/46700174_2073378016058432_687512931723156922_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MTkzNzkxMjQ0NTEyNTU2NTEwNw%3D%3D.2"
        },
        {
          id: 6, 
          pet_name: "Maxwell",
          species: "cat",
          pet_gender: "male",
          pet_age: "4",
          house_trained: true,
          preferences: "quiet and solitude",
          vaccinations: true,
          spay_neuter: true,
          coat_length: "short",
          pet_size: "small",
          pet_picture_url: "https://scontent-lhr3-1.cdninstagram.com/vp/337067250c0c8102da35f8527d4a3e62/5CA9B24B/t51.2885-15/e35/46956009_830402547376437_665137070685289188_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=8&ig_cache_key=MTkzNzkxNjIxMDc4MDI0NjczNw%3D%3D.2"
        },
        {
          id: 7, 
          pet_name: "Lamb Chop",
          species: "dog",
          pet_gender: "Female",
          pet_age: "2",
          house_trained: true,
          preferences: "hugs and cuddles",
          vaccinations: true,
          spay_neuter: true,
          coat_length: "short",
          pet_size: "small",
          pet_picture_url: "https://scontent-lhr3-1.cdninstagram.com/vp/c6326ad7de5eb8ace07b2cd994c3a9f0/5C9AFE7D/t51.2885-15/e35/46691006_265875117460988_4711559637550196671_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MTkyMDY0ODQ5MTU3MzQwMzkxMA%3D%3D.2"
        },
        {
          id: 8, 
          pet_name: "Burt Reynolds",
          species: "dog",
          pet_gender: "male",
          pet_age: "6",
          house_trained: true,
          preferences: "house with out cats",
          vaccinations: true,
          spay_neuter: true,
          coat_length: "short",
          pet_size: "small",
          pet_picture_url: "https://scontent-lhr3-1.cdninstagram.com/vp/aa9b525f463b5509a62ab76969a5aeea/5CAB8719/t51.2885-15/e35/47417277_1182748731874686_5343879768020487261_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MTkzNzkxNTg2MTg5OTY1MTgxMw%3D%3D.2"
        },
        {
          id: 9, 
          pet_name: "Dabo",
          species: "dog",
          pet_gender: "Female",
          pet_age: "8",
          house_trained: true,
          preferences: "lots of walks",
          vaccinations: true,
          spay_neuter: true,
          coat_length: "medium",
          pet_size: "medium",
          pet_picture_url: "https://scontent-lht6-1.cdninstagram.com/vp/4edac52c7da79369d7c1d15cc7bdf109/5CA6ADCC/t51.2885-15/e35/46384499_593495167746467_1903674534885363966_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&ig_cache_key=MTkzNzkxNjE5MjYzNTIyNzQ5Ng%3D%3D.2"
        },
        {
          id: 10, 
          pet_name: "Turbo",
          species: "cat",
          pet_gender: "male",
          pet_age: "5",
          house_trained: true,
          preferences: "doesnt like people",
          vaccinations: true,
          spay_neuter: true,
          coat_length: "short",
          pet_size: "small",
          pet_picture_url: "https://scontent-lht6-1.cdninstagram.com/vp/e673d9c7b7089c0a35df3d0ddcb441de/5C96F722/t51.2885-15/e35/46759574_442310466302295_5853268238994611484_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&ig_cache_key=MTkzNzg2MTEzNDM4NTUxMTAyMA%3D%3D.2"
        },
        {
          id: 11, 
          pet_name: "Biggie Smalls",
          species: "dog",
          pet_gender: "male",
          pet_age: "2",
          house_trained: true,
          preferences: "houses with out children",
          vaccinations: true,
          spay_neuter: false,
          coat_length: "short",
          pet_size: "medium",
          pet_picture_url: "https://scontent-lhr3-1.cdninstagram.com/vp/f20fa179714d9af025f57b0241c4ff47/5C9598D6/t51.2885-15/e35/30591106_171153667037673_2358853406841372672_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=8&ig_cache_key=MTc2MDQzNzIxNjI3Nzk0ODkwNw%3D%3D.2"
        },
        {
          id: 12, 
          pet_name: "Kygo",
          species: "dog",
          pet_gender: "Female",
          pet_age: "8",
          house_trained: true,
          preferences: "room to run around",
          vaccinations: true,
          spay_neuter: true,
          coat_length: "long",
          pet_size: "small",
          pet_picture_url: "https://scontent-lhr3-1.cdninstagram.com/vp/40f5a27695a6f86f76e233d25b2758f5/5CA333CF/t51.2885-15/e35/46731840_289646758351975_9131874406053613954_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=8&ig_cache_key=MTkzNjQxMDIyNzIxMzYzNzE2Ng%3D%3D.2"
        },
        {
          id: 13, 
          pet_name: "Iggy",
          species: "reptile",
          pet_gender: "Female",
          pet_age: "3",
          house_trained: true,
          preferences: "warm rocks to chill on",
          vaccinations: false,
          spay_neuter: false,
          coat_length: "short",
          pet_size: "small",
          pet_picture_url: "https://scontent-lhr3-1.cdninstagram.com/vp/36c8ff589b7cc4b96c6fe3678d27c305/5C92B7A3/t51.2885-15/e35/46818703_347960455999752_3150419771420483622_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MTkzNzkyODI2MjcxODE3NzI5OA%3D%3D.2"
        },
        {
          id: 14, 
          pet_name: "Rammstein",
          species: "cat",
          pet_gender: "male",
          pet_age: "14",
          house_trained: true,
          preferences: "children to play with",
          vaccinations: true,
          spay_neuter: true,
          coat_length: "short",
          pet_size: "small",
          pet_picture_url: "https://scontent-lhr3-1.cdninstagram.com/vp/09899b3c1f7157ca67f5b60b7b53137f/5CA29510/t51.2885-15/e35/47141901_783116918688435_6479477666749930590_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MTkzMjM3NDE1OTMxNTE2NjcwNg%3D%3D.2"
        },
        {
          id: 15, 
          pet_name: "Veratas",
          species: "dog",
          pet_gender: "Female",
          pet_age: "4",
          house_trained: true,
          preferences: "things to chew on",
          vaccinations: false,
          spay_neuter: false,
          coat_length: "short",
          pet_size: "medium",
          pet_picture_url: "https://scontent-lht6-1.cdninstagram.com/vp/ea21c1d0a04ca814bce53e30784bb4fb/5C9513BA/t51.2885-15/e35/47172525_283963255594520_3082667310672120776_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&ig_cache_key=MTkzNzkwMzUxMjQ0ODk0NTMyOA%3D%3D.2"
        },
        {
          id: 16, 
          pet_name: "Cuddles",
          species: "dog",
          pet_gender: "male",
          pet_age: "5",
          house_trained: true,
          preferences: "house without children",
          vaccinations: true,
          spay_neuter: true,
          coat_length: "short",
          pet_size: "large",
          pet_picture_url: "https://scontent-lht6-1.cdninstagram.com/vp/7421e4fe24afe1b0fc620a618d3464a2/5CD4B81E/t51.2885-15/e35/47124318_165703474391596_1562697590663704705_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&ig_cache_key=MTkzNzQ0NDU4MzkwMzE0MzMwMA%3D%3D.2"
        },
        {
          id: 17, 
          pet_name: "Cooter",
          species: "bird",
          pet_gender: "Female",
          pet_age: "31",
          house_trained: true,
          preferences: "music to dance to",
          vaccinations: false,
          spay_neuter: false,
          coat_length: "short",
          pet_size: "small",
          pet_picture_url: "https://scontent-lht6-1.cdninstagram.com/vp/5043ed22b78eef6dac27d4b6593811e8/5CD9790C/t51.2885-15/e35/40349823_473729106459638_2420361753746472960_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=8&ig_cache_key=MTg0NDAyMTgwNTgxMjE4MTk4MA%3D%3D.2"
        },
        
      ]);
    });
};
