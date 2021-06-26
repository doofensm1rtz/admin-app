const userData = [
  { month: "Jan", users: 4000 },
  { month: "Feb", users: 3000 },
  { month: "Mar", users: 2000 },
  { month: "Apr", users: 4000 },
  { month: "May", users: 4500 },
  { month: "Jun", users: 3000 },
  { month: "Jul", users: 2500 },
  { month: "Aug", users: 4000 },
  { month: "Sep", users: 1000 },
  { month: "Oct", users: 2500 },
  { month: "Nov", users: 4000 },
  { month: "Dec", users: 4700 },
];

const userRows = [
  {
    id: 1,
    name: "Emily Garland",
    email: "emily@gmail.com",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    transactions: "$235",
  },
  {
    id: 2,
    name: "Masha Raymers",
    email: "masha@gmail.com",
    avatar:
      "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    transactions: "$300",
  },
  {
    id: 3,
    name: "Rodrigo Souza",
    email: "rodrigo@gmail.com",
    avatar:
      "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    transactions: "$250",
  },
  {
    id: 4,
    name: "Andrea Piacquadio",
    email: "andrea@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1537996372242-2bc8f3ff3a2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    transactions: "$200",
  },
  {
    id: 5,
    name: "Aiony Haust",
    email: "aiony@gmail.com",
    avatar:
      "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    transactions: "$320",
  },
  {
    id: 6,
    name: "Luis Reynoso",
    email: "luis@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    transactions: "$170",
  },
  {
    id: 7,
    name: "Daniel Monteiro",
    email: "daniel@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=296&q=80",
    transactions: "$275",
  },
  {
    id: 8,
    name: "Aldair Vagas",
    email: "aldair@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1528234591865-8c4f372b3f2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    transactions: "$310",
  },
  {
    id: 9,
    name: "Jon Snow",
    email: "jon@gmail.com",
    avatar:
      "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    transactions: "$200",
  },
  {
    id: 10,
    name: "Jon Snow",
    email: "jon@gmail.com",
    avatar:
      "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    transactions: "$200",
  },
];

const productRows = [
  {
    id: 1,
    name: "Asus Laptop",
    stock: 4,
    image:
      "https://laptopaz.vn/media/lib/1692_Asus-ROG-Strix-G15-G512-IAL013T3.jpg",
    price: "$235",
  },
  {
    id: 2,
    name: "Apple Watch",
    stock: 6,
    image:
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "$300",
  },
  {
    id: 3,
    name: "Iphone 11",
    stock: 3,
    image:
      "https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "$250",
  },
  {
    id: 4,
    name: "IPhone 12",
    stock: 7,
    image:
      "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "$200",
  },
  {
    id: 5,
    name: "Gigabyte Speakers",
    stock: 18,
    image:
      "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "$320",
  },
  {
    id: 6,
    name: "Alexa",
    stock: 9,
    image:
      "https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "$170",
  },
  {
    id: 7,
    name: "Marshall Headphones",
    stock: 20,
    image:
      "https://images.pexels.com/photos/324672/pexels-photo-324672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "$275",
  },
  {
    id: 8,
    name: "White Headphones",
    stock: 17,
    image:
      "https://images.pexels.com/photos/3394656/pexels-photo-3394656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "$310",
  },
  {
    id: 9,
    name: "Airpods",
    stock: 12,
    image:
      "https://images.pexels.com/photos/3921870/pexels-photo-3921870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "$200",
  },
  {
    id: 10,
    name: "Asus Laptop",
    stock: 6,
    image:
      "https://laptopaz.vn/media/lib/1692_Asus-ROG-Strix-G15-G512-IAL013T3.jpg",
    price: "$200",
  },
];

const analyticsBarChartRows = [
  {
    month: "Jan",
    mobile: 54,
    desktop: 69,
  },
  {
    month: "Feb",
    mobile: 66,
    desktop: 67,
  },
  {
    month: "Mar",
    mobile: 41,
    desktop: 24,
  },
  {
    month: "Apr",
    mobile: 55,
    desktop: 48,
  },
  {
    month: "May",
    mobile: 52,
    desktop: 62,
  },
  {
    month: "Jun",
    mobile: 75,
    desktop: 62,
  },
  {
    month: "Jul",
    mobile: 68,
    desktop: 72,
  },
  {
    month: "Aug",
    mobile: 34,
    desktop: 78,
  },
  {
    month: "Sep",
    mobile: 89,
    desktop: 56,
  },
  {
    month: "Oct",
    mobile: 64,
    desktop: 65,
  },
  {
    month: "Nov",
    mobile: 76,
    desktop: 42,
  },
  {
    month: "Dec",
    mobile: 32,
    desktop: 43,
  },
];

const smallWidgetRows = [
  {
    name: "Emily Garland",
    title: "Photographer",
    email: "emilygarland@gmail.com",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Masha Raymers",
    title: "Engineer",
    email: "masharaymers@gmail.com",
    avatar:
      "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Rodrigo Souza",
    title: "Photographer",
    email: "rodrigosouza@gmail.com",
    avatar:
      "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Andrea Piacquadio",
    title: "Business",
    email: "andreapiacquadio@gmail.com",
    avatar:
      "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export {
  userData,
  userRows,
  productRows,
  analyticsBarChartRows,
  smallWidgetRows,
};
