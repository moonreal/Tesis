const inpFile = document.getElementById("inpFile");
const btnUpload = document.getElementById("btnUpload");
const resultText = document.getElementById("resultText");

btnUpload.addEventListener("click", () => {
  console.log("Hola Gey");
  console.log("Botón de subida de archivo clickeado."); // Verificar en la consola
  const formdata = new FormData();
  formdata.append("pdfFile", inpFile.files[0]);
  console.log(extractedText);

  fetch("/extract-text", {
    method: "post",
    body: formdata,
  })
    .then((response) => {
      return response.text();
    })
    .then((extractedText) => {
      resultText.value = extractedText.trim();
    })
    .catch((error) => {
      console.error("Error:", error);
      resultText.value = "Error al subir el archivo.";
    });
});
