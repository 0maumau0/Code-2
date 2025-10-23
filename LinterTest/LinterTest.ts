namespace linterTest {

  interface Info {
    text: string,
    key: KEY
  }
  enum KEY {
    POS = 1, NEG = -1
  }
  
  
  const info: Info = { text: "G`udetmvhsgBncd1 ", key: KEY.POS };
  console.log(DeCrypt(info.text, info.key));
  
  
  

  function DeCrypt(_text: string, _Key: number) {
    let result: string = "";
    for (let i = 0; i < _text.length; i++)
      result += String.fromCharCode(_text.charCodeAt(i) + _Key);

    return result;
    //text length isnt rigth!
  }
  
}