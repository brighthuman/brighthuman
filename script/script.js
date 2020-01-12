function CheckSel() 
{  
  var i=0; 

    if (document.myForm.myCheck1.checked) i=i+2;
    if (document.myForm.myCheck2.checked) i=i-1;
    if (document.myForm.myCheck3.checked) i=i-1;
    if (document.myForm.myCheck4.checked) i=i-1;
    
    if (document.myForm.myCheck5.checked) i=i-1;
    if (document.myForm.myCheck6.checked) i=i+2;
    if (document.myForm.myCheck7.checked) i=i-1;
    if (document.myForm.myCheck8.checked) i=i+2;
    
    if (document.myForm.myCheck9.checked) i=i-1;
    if (document.myForm.myCheck10.checked) i=i-1;
    if (document.myForm.myCheck11.checked) i=i+2;
    if (document.myForm.myCheck12.checked) i=i-1;
    
    if (document.myForm.myCheck13.checked) i=i-1;
    if (document.myForm.myCheck14.checked) i=i+2;
    if (document.myForm.myCheck15.checked) i=i+1.5;
    if (document.myForm.myCheck16.checked) i=i-1;
    
    if (document.myForm.myCheck17.checked) i=i+2;
    if (document.myForm.myCheck18.checked) i=i+1.5;
    if (document.myForm.myCheck19.checked) i=i-1;
    if (document.myForm.myCheck20.checked) i=i-1;
    
    
    if (document.myForm.myCheck21.checked) i=i-2;
    if (document.myForm.myCheck22.checked) i=i-2;
    if (document.myForm.myCheck23.checked) i=i+4;
    if (document.myForm.myCheck24.checked) i=i-2;
    
    if (document.myForm.myCheck25.checked) i=i-2;
    if (document.myForm.myCheck26.checked) i=i-2;
    if (document.myForm.myCheck27.checked) i=i-2;
    if (document.myForm.myCheck28.checked) i=i+4;
    
    if (document.myForm.myCheck29.checked) i=i-2;
    if (document.myForm.myCheck30.checked) i=i-2;
    if (document.myForm.myCheck31.checked) i=i+4;
    if (document.myForm.myCheck32.checked) i=i-2;
    
    if (document.myForm.myCheck33.checked) i=i+4;
    if (document.myForm.myCheck34.checked) i=i-2;
    if (document.myForm.myCheck35.checked) i=i-2;
    if (document.myForm.myCheck36.checked) i=i-2;
    
    if (document.myForm.myCheck37.checked) i=i-2;
    if (document.myForm.myCheck38.checked) i=i+4;

    
    
    
    if (document.myForm.myCheck41.checked) i=i-3;
    if (document.myForm.myCheck42.checked) i=i-3;
    if (document.myForm.myCheck43.checked) i=i+6;
    if (document.myForm.myCheck44.checked) i=i-3;
    
    if (document.myForm.myCheck45.checked) i=i+6;
    if (document.myForm.myCheck46.checked) i=i-3;
    if (document.myForm.myCheck47.checked) i=i-3;
    if (document.myForm.myCheck48.checked) i=i-3;
    
    if (document.myForm.myCheck49.checked) i=i-3;
    if (document.myForm.myCheck50.checked) i=i-3;
    if (document.myForm.myCheck51.checked) i=i-3;
    if (document.myForm.myCheck52.checked) i=i+6;
    
    if (document.myForm.myCheck53.checked) i=i-3;
    if (document.myForm.myCheck54.checked) i=i+6;
    if (document.myForm.myCheck55.checked) i=i-3;
    if (document.myForm.myCheck56.checked) i=i-3;
    
    if (document.myForm.myCheck57.checked) i=i-3;
    if (document.myForm.myCheck58.checked) i=i+6;
    if (document.myForm.myCheck59.checked) i=i-3;
    if (document.myForm.myCheck60.checked) i=i-3;
    
    

    
if (i<=11)
    {alert("Твой результат — "+i+"/53. Слишком мало! Пожалуй, это повод пересмотреть мультсериал.");}
else
    {
        if (i<=33)
            {alert("Твой результат — "+i+"/53. Ты находишься где-то посередине. И хоть знаешь основные моменты, всё же стоит пересмотреть мультсериал.");}
        else
        {
            if (i<=52)
                {alert("Твой результат  — "+i+"/53. Ты очень хорошо знаешь фэндом. Продолжай изучать его, и ты обязательно наберёшь максимальное количество баллов!");}
            else
                
            {
            
                
                {
            if (i<=22)
                {alert("Твой результат  — "+i+"/53. Ну, что сказать, что-то ты о фэндоме знаешь, но всё же стоит пересмотреть!");}
            else
                
                {
                if (i==53)
                {alert("Твой результат  — "+i+"/53. Да ты гуру лиокофэндома! Франц Хоппер гордился бы тобой!");}
            else
                {alert("Твой результат — "+i+"/53. быть такого не может! Да ты сломал систему!");};
             }
        }
        }
    }
 
}
    
}