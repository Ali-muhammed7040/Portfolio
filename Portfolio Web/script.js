


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Skills', 'Skill'],
  ['HTML',95],
  ['CSS',90],
  ['Javascript',85],
  ['Animate.css',100],
  ['Bootstrap',95],
  ['gihub',90],
  ['w3.css',95],
  ['scss',90],
  ['React',87],
  ['Angular',75],
  ['Typescript',82],
  ['Python',90],
  ['Django',40]
]);

var options = {
  title:'My Skills'
};

var chart = new google.visualization.BarChart(document.getElementById('myChart'));
  chart.draw(data, options);
}

























const allButtons = document.querySelectorAll(".accordion__button");

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnChild = button.firstElementChild;

    button.nextElementSibling.classList.toggle("active");

    if (btnChild.classList.contains("fa-plus")) {
      btnChild.classList.replace("fa-plus", "fa-minus");
    } else {
      btnChild.classList.replace("fa-minus", "fa-plus");
    }
  });
});


const btn = document.getElementById('changeColor');
btn.addEventListener('click',function onclick(event)
{
  document.body.style.backgroundColor='#616161';
  
});