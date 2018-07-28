/*function Loadjson(file,callback) {
var xhr = new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange = function(){
if(xhr.readyState === 4 && xhr.status == "200"){
  callback(xhr.responseText);
}
} ;
xhr.send(null);
}
Loadjson("data.json",function(text)
{
var data = JSON.parse(text);
console.log(data);
basics(data.details);
careerinfo(data.career);
educationinfo(data.education);
skill(data.skills);
})*/
function loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error("error"));
      }
    })
  })
}
var newfile= loadjson("data.json");
newfile.then(data=>{
  console.log(data);
  basics(data.details);
  careerinfo(data.career);
  educationinfo(data.education);
  skill(data.skills);

})

var child1 = document.querySelector(".childone");

function basics(det){
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);
  var name = document.createElement("h4")
  name.textContent = det.name;
  child1.appendChild(name);
  var phone = document.createElement("h4")
  phone.textContent = det.phno;
  child1.appendChild(phone);
  var email = document.createElement("a");
  email.href = "mailto:sethaddanki7@gmail.com";
  email.textContent = det.email;
  child1.appendChild(email);
  var address = document.createElement("h2");
  address.textContent = "address";
  child1.appendChild(address);
  var hr = document.createElement("hr");
  child1.appendChild(hr);
  var p = document.createElement("p");
  p.textContent = "vasantha colony";
  child1.appendChild(p)
  var hr = document.createElement("hr");
  child1.appendChild(hr);
  }
  var child2 = document.querySelector(".childtwo");

  function careerinfo(inf){

  var heading=document.createElement("h2");
  heading.textContent=inf.head;
  child2.appendChild(heading);

  var para=document.createElement("p");
  para.textContent=inf.para;
  child2.appendChild(para);

}

function educationinfo(edu) {
  var hd = document.createElement("h2");
  hd.textContent = "Educational Qualifications";
  child2.append(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var table1 = document.createElement("table");
  table1.border = "1";
  child2.appendChild(table1);

  var tabledata="";
  for(var i=0;i<edu.length;i++){
    tabledata+= "<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
  }
table1.innerHTML=tabledata;
}

function skill(skillinfo){

  var hd = document.createElement("h2");
  hd.textContent="technical skills";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(var i=0;i<skillinfo.length;i++){
  var title=document.createElement("h4");
  title.textContent=skillinfo[i].title;
  child2.appendChild(title);

  var eduul = document.createElement("ul");
  var eduli = document.createElement("li");
  eduli.textContent=skillinfo[i].info;
  eduul.appendChild(eduli);
  child2.appendChild(eduul);
}
}
