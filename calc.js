function buttonclick(val)
{
    document.getElementById("input").value=document.getElementById("input").value+val
}
function clearscreen()
{
    document.getElementById("input").value=""
}
function equelclick(){
    var text=document.getElementById("input").value
    var result=eval(text)
    document.getElementById("input").value=result
}