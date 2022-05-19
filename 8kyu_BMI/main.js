function bmi(weight, height) {
    let calculateBMI = weight / (height**2);
    if(calculateBMI <= 18.5){
      return  'Underweight';
    }else if(calculateBMI <= 25.0){
      return 'Normal';
    }else if(calculateBMI <= 30.0){
      return 'Overweight';
    }else if(calculateBMI > 30){
      return 'Obese';
    }
  }
  
  
  // calculate BMI
  // return response based on calculated BMI