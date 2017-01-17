/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validate_listbox()
{
    
    if (document.getElementById("Name").value=="")
    {
        alert("Please enter required fields")
        return false;
    }else if (document.getElementById("bloodgroup1").value=="" || document.getElementById("bloodgroup1").value=="null")
    {
        alert("Please enter required fields")
        return false;
    }else if (document.getElementById("street").value=="")
    {
        alert("Please enter required fields")
        return false;
    }else if (document.getElementById("City").value=="")
    {
        alert("Please enter required fields")
        return false;
    }else if (document.getElementById("hcontact").value=="")
    {
        alert("Please enter required fields")
        return false;
    }
    
    
    db_insert();
    
}

function db_insert()
{
    Name=document.getElementById("Name").value;
    bgroup=document.getElementById("bloodgroup1").value;
    street=document.getElementById("street").value;
    city=document.getElementById("City").value;
    phone=document.getElementById("hcontact").value;
    emil=document.getElementById("Email").value;
    Ldonation=document.getElementById("lastdonated").value;
    $.ajax({type: "POST",
        url: 'insert.php',
        data:{
            Q_Name:Name,
            Q_bgroup:bgroup,
            Q_street:street,
            Q_city:city,
            Q_phone:phone,
            Q_emil:emil,
            Q_Ldonation:Ldonation
        },
        error:function(x,e){
            
        }
        }).done(function(result){
           alert(result); 
        });
    
    
}