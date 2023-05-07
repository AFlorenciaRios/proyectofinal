const ACCESS_TOKEN =
"ya29.a0AWY7Ckmw4Chl0dtfd-QsNN42GWoePGhYmBMGdjdAWmTvF5WtrsAxNKgtm5N1iz3-LlmLVnB4P19Tw5ygPyUWZTJwICzBet8BuLjCmQeLF-5U1UXIPtXMZ5YsbmVtmFqEkYMZefrlj4t7aP05vvg1NbzPFMrmaCgYKAcESARISFQG1tDrpZ8NUZF8ynMqbXA8AgYbdhQ0163"
 
const SHEET_ID = "1iGoUWbwuuCDGH10FAaR4ltJps5bjHcx8107xyuGtmTo";



function onRegistrarStock() {

  //Obtenemos los datos del formulario
  const tipodebebida = document.getElementById('Tipodebebida').value;
  const cantidad = document.getElementById('cantidad').value;
  const precio = document.getElementById('precio').value;
  
  //Creamos el JSON que espera nuestra API  
  let values = [];
  let data = {};
  let fila = [tipodebebida, cantidad, precio];

  values.push(fila);
  
  //Verificar que coincida con el nombre de la hoja de nuestro sheet
  data.range = "stock";
  
  data.majorDimension = "ROWS";
  data.values = values;

  //Invocamos al método POST de la API
  fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/1iGoUWbwuuCDGH10FAaR4ltJps5bjHcx8107xyuGtmTo/values/stock:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data)
    }
  ).then(function (response) {
    response.json().then(function (data) {

    });
  });

  //Limpiamos los campos del formulario para permitir cargar un nuevo gasto
  document.getElementById('cantidad').value = "";
  
  document.getElementById('precio').value = "";
};

function limpiar(){
    document.getElementById('Tipodebebida').value = 0;
    document.getElementById('cantidad').value = 0;
    document.getElementById('precio').value = 0;
}

limpiar();