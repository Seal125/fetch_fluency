const logPost = async function(postID) {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  let json = await response.json()
  let result = json.find(user => user.id === postID);
  console.log(result);
};


const logUsers = async function() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  let json = await response.json()
  let result = json.map((user, ind) => {
    return `${user.name}`
  });
  console.log(result)
};

const getBizUsers = async function() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  let json = await response.json()
  let result = json.filter(user => {
    return user.email.includes(".biz");
  });
  console.log(result)
};

const longestPost = async function() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  let json = await response.json()
  let bodyArr = json.map(user => user.body)
  let longest = ""
  for (let i of bodyArr) {
    if (i.length > longest.length) {
      longest = i
    }
  }
  console.log(longest)
};

const getCompletedTasks = async function() {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos')
  let json = await response.json()
  let result = json.filter(user => user.completed === true)
  console.log(result)
}

const displayPhotos = async function() {
  let response = await fetch('https://jsonplaceholder.typicode.com/photos')
  let json = await response.json()
  let result
};

const findClosest = async function() {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos')
  let json = await response.json()
}

const numOfLongPosts = async function() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  let json = await response.json()
  let results = json.filter(user => user.body.length > 20)
  console.log(results.length)
}

const getUserFromPost = async function(postTitle) {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos')
  let json = await response.json()
  let results = json.find(user => user.title === postTitle)
  console.log(results)
};
