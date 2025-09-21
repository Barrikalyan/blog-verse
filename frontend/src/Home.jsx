import Navbar from "./Navbar";
function Home() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React and Tailwind CSS",
      author: "Super Man",
      timeRead: " 5 min read",
      postedOn: "Jan 10, 2024",
      content:
        "React and Tailwind CSS are a powerful combination for building modern web applications. In this article, we'll explore how to set up a React project with Tailwind CSS and create a simple responsive layout.",
      Image:
        "https://imagez.tmz.com/image/05/4by3/2022/12/15/05bf4f9059a5452ba8d0b7a2f7c44294_xl.jpg",
      profilePic:
        "https://th.bing.com/th/id/OIP.2l7sS4A4-C7I8PtGLshN-gHaEo?w=347&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      id: 2,
      title: "Understanding JavaScript Closures",
      author: "Bat Man",
      timeRead: " 7 min read",
      postedOn: "Dec 05, 2023",
      content:
        "JavaScript closures are a fundamental concept that every developer should understand. In this article, we'll dive deep into closures, how they work, and practical examples of their usage.",
      Image:
        "https://imgcdn.stablediffusionweb.com/2024/4/6/e91de18e-6234-49c6-8356-cc83a1167067.jpg",
      profilePic:
        "https://th.bing.com/th/id/R.a1cb2912372e262aa4d633ed6583d9a1?rik=3uk3YX8qn9LeXQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fSCSYKFW.jpg&ehk=ZnbXPiu1sx3G6VvPmo8Lc%2bEPCxqVaym7x6vRiL8pnQQ%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      title: "A Guide to Responsive Web Design",
      author: "Spider Man",
      timeRead: " 6 min read",
      postedOn: "Nov 20, 2023",
      content:
        "Responsive web design is essential in today's mobile-first world. This guide will walk you through the principles of responsive design and how to implement them using CSS and modern frameworks.",
      Image:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/09/PS4-Spider-Man-Stark-Homecoming-Suit.jpg",
      profilePic:
        "https://wallpapercave.com/wp/qRFZnut.jpg",
    },
    {
      id: 4,
      title: "Exploring the New Features of ES2021",
      author: "Iron Man",
      timeRead: " 8 min read",
      postedOn: "Oct 01, 2023",
      content:
        "ES2021 introduces several new features that enhance the JavaScript language. In this article, we'll explore these features and how they can improve your code.",
      Image:
        "https://www.hdwallpapers.in/download/iron_man_2-HD.jpg",
      profilePic:
        "https://i.etsystatic.com/17547840/r/il/c7991c/1744051792/il_794xN.1744051792_d4me.jpg",
    },
    {
      id: 5,
      title: "Mastering Flexbox for Layout Design",
      author: "Thor",
      timeRead: " 10 min read",
      postedOn: "Sep 15, 2023",
      content:
        "Flexbox is a powerful layout module in CSS that allows for flexible and responsive design. This article will guide you through the basics of Flexbox and how to use it effectively in your projects.",
      Image:
        "https://th.bing.com/th/id/R.e26d6c95ca708541657aef3885c61da0?rik=y6cixU%2bhnKaQnw&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f5fbc4a62c2150e62cfcb09aa%2ft%2f60a3478bbcf9404bd6346a47%2f1621313423783%2fThor.png%3fformat%3d1500w&ehk=yPzFSPd3SlGSBvO0nmiRhMxUAxA%2bwQOzVekm7%2fxfD7M%3d&risl=&pid=ImgRaw&r=0",
      profilePic:
        "https://i.etsystatic.com/14620198/c/1229/977/168/273/il/06582b/1199720473/il_340x270.1199720473_2ep7.jpg",
    },
    {
      id: 6,
      title: "Introduction to TypeScript for JavaScript Developers",
      author: "Hulk",
      timeRead: " 9 min read",
      postedOn: "Aug 10, 2023",
      content:
        "TypeScript is a superset of JavaScript that adds static typing and other features to enhance developer productivity. This introduction will cover the basics of TypeScript and how to get started.",
      Image:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/04/hulk-from-the-mcu-franchise.jpg",
      profilePic:
        "https://i.pinimg.com/originals/14/fd/0c/14fd0c1eb1b2965860b8563b260a1867.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center pt-5 bg-gray-50">
      <Navbar />
      <p className="text-4xl font-bold">Welcome back, Dev Astra</p>
      <p className="text-lg text-gray-500 mt-4">
        {" "}
        Discover amazing stories, insights, and ideas from our community of
        writers.
      </p>
      <div className=" flex gap-10 justify-around mt-5 ">
        <button className="px-10 py-4 cursor-pointer bg-blue-700 hover:bg-blue-900 shadow-md text-white rounded-md">
          Write a New Post
        </button>
        <button className="px-10 py-4 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md">
          View My Posts
        </button>
      </div>
      <div className="mt-5 flex gap-10 flex-wrap justify-center w-full rounded-lg shadow-lg pb-5">
        {posts.map((post) => (
          <div
            className="w-96 bg-white shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer rounded-lg"
            key={post.id}
          >
            <div className="relative overflow-hidden">
              <img
                className=" rounded-t-lg transform hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer shadow-lg h-52 w-96 "
                src={post.Image}
                alt="Writing"
              />
              <button className="p-3 text-sm bg-white rounded-full absolute cursor-pointer right-4 top-3">
                Save
              </button>
            </div>
            <div className="flex gap-5 mt-3 px-2">
              <img
                className="rounded-full shadow-lg h-12 w-12 "
                src={post.profilePic}
                alt="Writing"
              />
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-gray-500">
                  {post.postedOn} - {post.timeRead}
                </p>
              </div>
            </div>
            <div className="mt-3 px-3 flex flex-col gap-3">
              <p className="text-2xl font-bold ">{post.title}</p>
              <p className="text-gray-600">{post.content}</p>
            </div>
            <div className="mt-3 mb-3  px-3 flex justify-end">
              <button className="text-blue-500 hover:underline cursor-pointer">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
