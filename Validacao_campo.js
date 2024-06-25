
function ValidacaoNome ()
    {

        if (NomeCompleto.value.trim() === "")
            {
               NomeCompleto.style.border = "Red Solid";
               return false; 
            }
             
        else 
            {
                if (isNaN(NomeCompleto.value) === false)
                    {alert ("ERRO: DIGITE APENAS LETRAS")}

                else
                {
                NomeCompleto.style.border = "Green Solid";
                return true;
                }
            }

        }
        
function ValidacaoMatricula ()
        {        
        
        if (NumeroMatricula.value.trim() === "")
           {
                    NumeroMatricula.style.border = "Red Solid";
                    return false;
            }

        else
            {   if (isNaN(NumeroMatricula.value) === true)
                    {alert ("ERRO: DIGITE APENAS NUMEROS")}

                else
                    {
                    NumeroMatricula.style.border = "Green Solid";
                    return true;
                    }
            }
        }

function ValidacaoDataInicial ()
            {        
                
            if (DataInicial.value.trim() === "")
            {
                        DataInicial.style.border = "Red Solid";
                        return false;
                }

            else
                {
                        DataInicial.style.border = "Green Solid";
                        return true;
                }
            }

function ValidacaoDataFinal ()
            {        
                
            if (DataFinal.value.trim() === "" || DataInicial.value.trim() ==="")
                {
                        DataFinal.style.border = "Red Solid";
                        return false;
                }

            else
                {
                        DataFinal.style.border = "Green Solid";
                        return true;
                }
            }

