exports.data = {
  items: {
    apple: 10,
  },
  warehouses: [
    {
      name: "owd",
      inventory: { apple: 5 },
    },
    {
      name: "dm",
      inventory: { apple: 5 },
    },
  ],
};

exports.result = [
    { 
      "owd": {
        apple: 5 
      } 
    },
    { "dm": 
    { 
      apple: 5 
    } 
  }
];
