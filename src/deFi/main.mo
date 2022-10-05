import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";


actor deFi{
  stable var currentValue : Float=100;
  // currentValue := 100;
  // Debug.print(debug_show(currentValue));



  // let id=8343344234;
   stable var startTime = Time.now();
    // startTime:=Time.now();
    // Debug.print(debug_show(startTime));



  public func topUp(amount:Float){
  // type Time = Int;
  currentValue+=amount;
  Debug.print(debug_show(currentValue));
  };



  public func withdraw(amount:Float){
  let temp:Float= currentValue-amount;
  if(temp>=0){
  currentValue-=amount;
  Debug.print(debug_show(currentValue));
  }
  else{
    Debug.print("Sorry Insufficient Balance!!");
  }
  };


  public func compund(){
    let currentTime=Time.now();
    let timeElapsed=(currentTime-startTime)/1000000000;
    currentValue := currentValue * (1.01 ** (Float.fromInt(timeElapsed)/1000));
    startTime:= currentTime;
  };

  public query func checkAmount(): async Float{
  return currentValue;  
  };

  // topUp();
}