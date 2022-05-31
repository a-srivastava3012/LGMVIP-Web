function display(val){

    document.getElementById('result').value += val

    return val

}
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
function clearScreen(){

    document.getElementById('result').value = ''

}
function ce()
{
    let st=document.getElementById('result').value;
    let len=st.length;
    st=st.substring(0,len-1);
    document.getElementById('result').value = st;
}