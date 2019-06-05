var inicio=function(valor,callback){
  if(typeof callback === 'function'){
    callback(valor);
  } else{
    console.log(valor);
  }
}

inicio("Javier", function(valor){
  console.log("Bienvenido "+valor)
});

inicio("Hola", "hdfuvbl");
