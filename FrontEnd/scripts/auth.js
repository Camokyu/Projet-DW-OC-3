const checkToken = () =>{
  let currentToken = localStorage.getItem('token');
  let result;
  if(currentToken?.length){
    result = true;
  }
  else{
    result = false;
  }
  return result;
}