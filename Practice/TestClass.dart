import 'dart:io';

class car
{
  String? color ;
  String? size ;
  String? fuel;

  static String  CmpName = "Maruti";
  static int wheels = 4;


  void start()
  {
    print("car is starting");
  }
  void stop()
  {
    print("car is Stopping");
  }
  car.createObj()
  {
    this.color =
    this.size = "6";

  }

  car(String color, String size, String fuel)
  {
     this.color = color;
     this.size = size;
     this.fuel = fuel;
  }
}

void main() {
  car yourcar = new car("red", "4", "Diesel");
  car mycar = new car("white", "5", "Petrol");

  mycar.start();
  mycar.stop();
}