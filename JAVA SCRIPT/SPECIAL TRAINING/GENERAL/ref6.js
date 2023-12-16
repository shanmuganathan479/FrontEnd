const data = {
    code: 42,
    items: [{
      id: 1,
      name: 'foo'
    }, {
      id: 2,
      name: 'bar'
    }]
  };

  const item_name = data.items[1].name;
  
  console.log(item_name)
  console.log(data.items[1])