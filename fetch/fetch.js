fetch('https://jsonplaceholder.org/users/?id=1 ')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(user => {
    console.log(user);
    kiirat(user);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  function kiirat (user){
    console.log(user.id);
  }