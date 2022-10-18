const dropdown= document.querySelectorAll('.dropdown');
dropdown.forEach(dropdown => {
    const select=dropdown.querySelector('.select');
    const caret= dropdown.querySelector('.caret');
    const menu=dropdown.querySelector('.menu');
    const options= dropdown.querySelectorAll('.menu li');
    const selected= dropdown.querySelector('.selected');
select.addEventListener('click' , () =>{
select.classList.toggle('select-clicked');
caret.classList.toggle('caret-rotate');
menu.classList.toggle('menu-open');
});
options.forEach(Option => {
option.addEventListener('click', () => {
selected.innerText = option.innerText;
select.classList.remove('select-clicked');
caret.classList.remove('caret-rotate');
menu.classList.remove('menu-open');
options.forEach(option =>{
    option.classList.remove('active');
});
option.classlist.add('active');
});
});
});
$('li').click(function (){
  $(this).addClass("active").siblings().removeClass("active");
});
function openpage(){
    var x=document.getElementById("search").value.toLowerCase();
    if(x==="ben 10 cosmic destruction")
    window.open("Ben 10 Cosmic Destruction.html")

    if(x==="mortal kombat unchained")
    window.open("Mortal Kombat Unchained.html")

    if(x==="naruto shippuden ultimate ninja impact")
    window.open("Naruto Shippuden Ultimate Ninja Impact.html")

    if(x==="assassins creed bloodline")
    window.open("Assassins Creed Bloodline.html")

    if(x==="god of war ghost of sparta")
    window.open("God Of War Ghost Of Sparta.html")

    if(x==="god of war")
    window.open("God Of War Ghost Of Sparta.html")

    if(x==="phantasy star portable 2")
    window.open("Phantasy Star Portable 2.html")

    if(x==="dynasty warrior strikeforce")
    window.open("Dynasty Warrior Strikeforce.html")

    if(x==="naruto ultimate ninja heroes")
    window.open("Naruto Ultimate Ninja Heroes.html")

    if(x==="dragon ball Z tenkaichi tag team")
    window.open("Dragon Ball Z Tenkaichi Tag Team.html")

    if(x==="dragon ball z shin budokai")
    window.open("Dragon Ball Z Shin Budokai.html")

    if(x==="naruto ultimate ninja heroes 2")
    window.open("Naruto Ultimate Ninja Heroes 2.html")

    if(x==="need for speed most wanted")
    window.open("Need For Speed Most Wanted.html")

    if(x==="sword art online infinity moments")
    window.open("Sword Art Online Infinity Moments.html")

    if(x==="sonic rivals 2")
    window.open("Sonic Rivals 2.html")

    if(x==="ridge racer")
    window.open("Ridge Racer.html")

    if(x==="wwe smackdown vs raw 2010")
    window.open("WWE Smackdown Vs Raw 2010.html")

    if(x==="ghost rider")
    window.open("Ghost Rider.html")

    if(x==="kidou senshi gundam gundam vs gundam next plus")
    window.open("Kidou Senshi Gundam Gundam Vs Gundam NEXT PLUS.html")

    if(x==="crisis core final fantasy vii")
    window.open("Crisis Core Final Fantasy VII.html")

    if(x==="iron man 2")
    window.open("Iron Man 2.html")

    if(x==="ironman 2")
    window.open("Iron Man 2.html")

    if(x==="gods eater burst")
    window.open("Gods Eater Burst.html")

    if(x==="pes 2021")
    window.open("PES 2021.html")

    if(x==="spider man 3")
    window.open("Spider Man 3.html")

    if(x==="spiderman 3")
    window.open("Spider Man 3.html")

    if(x==="marvel ultimate alliance")
    window.open("Marvel Ultimate Alliance.html")

    if(x==="grand theft auto vice city stories")
    window.open("Grand Theft Auto Vice City Stories.html")

    if(x==="gta vice city stories")
    window.open("Grand Theft Auto Vice City Stories.html")

    if(x==="dragon ball z")
    window.open("Dragon Ball Z.html")

    if(x==="naruto")
    window.open("Naruto.html")

    if(x==="sword art online")
    window.open("Sword Art Online Infinity Moments.html")

    if(x==="dragon ball")
    window.open("Dragon Ball Z.html")
}
