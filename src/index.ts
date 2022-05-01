/* function greet(name: string): void {
    console.log("Hello", name);
  }
  
  const readerName = "Medium Reader";
  
  greet(readerName); */

  /* var i =0;

  setInterval(() =>{
      console.log('iteration' + i);  
      i++;
  }, 1000); */
  
  const data = {
      name: 'Deepesh Kumar',
      agee:27,
      address:"Lucknow, Uttar Pradesh"
  }

  function getAddress<T>(data: T):T {
        return data;
  }

  const result = getAddress("Deepesh");


  const array = [1,2,3,4];

  const testData = [1,2] 