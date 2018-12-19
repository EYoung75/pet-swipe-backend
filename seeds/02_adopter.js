
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
          picture_url: "https://cdn.xl.thumbs.canstockphoto.com/portrait-of-a-beautiful-smiling-woman-smiling-woman-with-arms-crossed-over-white-stock-image_csp20414260.jpg",
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
          picture_url: "https://ak9.picdn.net/shutterstock/videos/23662039/thumb/6.jpg",
          about: "My name is Lucas. What up. I am 43 years old. I have no friends."
        },
        {
          id: 3,
          user_name_b: "NiceGuyCarl",
          user_name_b_pw: "iamnice",
          location_city: "Denver",
          location_lat: "23.4444",
          location_long: "55.237",
          contact_email: "niceguysfinishlast@gmail.com",
          picture_url: "https://assets3.thrillist.com/v1/image/1299823/size/tmg-article_default_mobile.jpg",
          about: "I am Carl. I am nice. I am constantly hungry. I eat lots of rice."
        },
        {
          id: 4,
          user_name_b: "Felicia",
          user_name_b_pw: "exoticAnimalLover",
          location_city: "Denver",
          location_lat: "23.4444",
          location_long: "55.237",
          contact_email: "gamergirl@gmail.com",
          picture_url: "http://i.huffpost.com/gen/1165155/thumbs/o-ICE-POP-570.jpg?1",
          about: "The name's Felicia. I'm super into monkeys and stuff. HMU if you have an exotic animal or something i.e. chinchilla."
        },
        {
          id: 5,
          user_name_b: "Groot",
          user_name_b_pw: "groot",
          location_city: "Denver",
          location_lat: "23.4444",
          location_long: "55.237",
          contact_email: "iamgroot@groot.groot",
          picture_url: "https://images-na.ssl-images-amazon.com/images/I/41ngWp1%2BeYL._SX425_.jpg",
          about: "I am Groot. Groot Groot Groot. I. Am. Groot."
        },
        {
          id: 6,
          user_name_b: "Turtlenecks4",
          user_name_b_pw: "turkeyTr0t43",
          location_city: "Denver",
          location_lat: "23.4444",
          location_long: "55.237",
          contact_email: "treatYoSelf@gmail.com",
          picture_url: "https://media.istockphoto.com/photos/bookish-guy-in-black-picture-id613650382?k=6&m=613650382&s=612x612&w=0&h=uyemZHfRck5UXCyf5LAC55cllVb540y4Z0BfUho7opU=",
          about: "Hello everyone, my name is Tim. I am a 35 year old Denver-ite living life in the fast lane. I'm looking for a cool dog to pick up chicks with."
        },
        {
          id: 7,
          user_name_b: "CatPerson2",
          user_name_b_pw: "catLoverIsWhatIAm",
          location_city: "Denver",
          location_lat: "23.4444",
          location_long: "55.237",
          contact_email: "CarlaReed@gmail.com",
          picture_url: "https://images.freeimages.com/images/large-previews/6e9/cat-girl-1435939.jpg",
          about: "Im Carla, I'm really just looking for a cat to add to my collection."
        }
      ]);
    });
};
