function create_planner(goal, meals){
  let planner_content = ('<html><head><img src="banner.png" style="width:100%;z-index:0"</head><style>.top{background-color:#D1D1D1}.day{width:40px;text-align:left;background-color:#D1D1D1}th{outline-style:solid;outline-width:thin;font-weight:normal}table{width:100%;height:50%}</style><body><p>Goal: '+goal+'</p><br>')

  let meals_of_day = ['Breakfast','Snack 1','Lunch','Snack 2','Dinner']
  
  planner_content += ('<table><tr class="top"><th></th>')
  for (let meal of meals_of_day){
    planner_content += ('<th>'+ meal + '</th>')
  }
  planner_content += ('</tr>')
  
  days_of_week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  
  let i = 0
  for (let day of days_of_week){
    planner_content += ('<tr><th class="day">' + day + '</th>')
    for (let meal of meals_of_day){
      planner_content += ('<th>' + meals[i] + '</th>')
      i ++
    }
    planner_content += ('</tr>')
  }
  
  planner_content += ('</table><br><br><input id="print_planner" type="button" value="Print or Save as PDF"></body></html>')
  
  planner_content += ('<script> document.getElementById("print_planner").addEventListener("click", function(){window.print();})</script>')

  planner = window.open('about:blank','myPop','width=1000,height=600,left=200,top=200');
  planner.document.write(planner_content);
}

function validate_email(email){
  let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (email.match(regEx)){
    return true
  } else {
    return false
  }
}

document.getElementById("clear").addEventListener("click", function(){
  document.forms.meal_form.reset()
})

document.getElementById("submit").addEventListener("click", function(){
  let email = document.getElementById("email").value
  if (validate_email(email)){
    let meals = []
  
  meals.push(document.getElementById("mon_breakfast").value)
  meals.push(document.getElementById("mon_snack1").value)
  meals.push(document.getElementById("mon_lunch").value)
  meals.push(document.getElementById("mon_snack2").value)
  meals.push(document.getElementById("mon_dinner").value)
  
  meals.push(document.getElementById("tues_breakfast").value)
  meals.push(document.getElementById("tues_snack1").value)
  meals.push(document.getElementById("tues_lunch").value)
  meals.push(document.getElementById("tues_snack2").value)
  meals.push(document.getElementById("tues_dinner").value)
  
  meals.push(document.getElementById("wed_breakfast").value)
  meals.push(document.getElementById("wed_snack1").value)
  meals.push(document.getElementById("wed_lunch").value)
  meals.push(document.getElementById("wed_snack2").value)
  meals.push(document.getElementById("wed_dinner").value)
  
  meals.push(document.getElementById("thurs_breakfast").value)
  meals.push(document.getElementById("thurs_snack1").value)
  meals.push(document.getElementById("thurs_lunch").value)
  meals.push(document.getElementById("thurs_snack2").value)
  meals.push(document.getElementById("thurs_dinner").value)
  
  meals.push(document.getElementById("fri_breakfast").value)
  meals.push( document.getElementById("fri_snack1").value)
  meals.push(document.getElementById("fri_lunch").value)
  meals.push(document.getElementById("fri_snack2").value)
  meals.push(document.getElementById("fri_dinner").value)
  
  meals.push(document.getElementById("sat_breakfast").value)
  meals.push(document.getElementById("sat_snack1").value)
  meals.push(document.getElementById("sat_lunch").value)
  meals.push(document.getElementById("sat_snack2").value)
  meals.push(document.getElementById("sat_dinner").value)
  
  meals.push(document.getElementById("sun_breakfast").value)
  meals.push(document.getElementById("sun_snack1").value)
  meals.push(document.getElementById("sun_lunch").value)
  meals.push(document.getElementById("sun_snack2").value)
  meals.push(document.getElementById("sun_dinner").value)
  
  let goal = document.getElementById("goal").value

  create_planner(goal, meals)
  } else {
    window.alert('Please enter a valid email address before submitting.')
  }

  
})